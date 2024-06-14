const SuspensePage = () => {
  return (
    <div>
      <h2>Suspense lets you display a fallback until its children have finished loading.</h2>

      <h4>Only Suspense-enabled data sources will activate the Suspense component. They include:</h4>
      <br />
      <div> Data fetching with Suspense-enabled frameworks like Relay and Next.js</div>
      <br />
      <div> Lazy-loading component code with lazy</div>
      <br />
      <div> Reading the value of a Promise with use</div>
      <br />
      <div> Suspense does not detect when data is fetched inside an Effect or event handler.</div>

      <h4>Caveats :</h4>
      <div>
        React does not preserve any state for renders that got suspended before they were able to mount for the first time. When the component has loaded, React will retry rendering the suspended tree
        from scratch.
      </div>
      <br />
      <div>
        If Suspense was displaying content for the tree, but then it suspended again, the fallback will be shown again unless the update causing it was caused by startTransition or useDeferredValue.
      </div>
      <br />
      <div>
        If React needs to hide the already visible content because it suspended again, it will clean up layout Effects in the content tree. When the content is ready to be shown again, React will fire
        the layout Effects again. This ensures that Effects measuring the DOM layout don’t try to do this while the content is hidden.
      </div>
      <br />
      <div>
        React includes under-the-hood optimizations like Streaming Server Rendering and Selective Hydration that are integrated with Suspense. Read an architectural overview and watch a technical talk
        to learn more.
      </div>

      <h4>Usage</h4>
      <br />
      <div> Displaying a fallback while content is loading</div>
      <a href="https://codesandbox.io/p/sandbox/restless-waterfall-7hzg5z?file=%2Fsrc%2FArtistPage.js&utm_medium=sandpack">example</a>
      <br />
      <div> Revealing content together at once</div>
      <a href="https://codesandbox.io/p/sandbox/strange-black-6j7nnj?utm_medium=sandpack">example</a>

      <br />
      <div> Revealing nested content as it loads</div>
      <a href="https://codesandbox.io/p/sandbox/red-architecture-4sp9wt?utm_medium=sandpack">example</a>
      <br />
      <div> Showing stale content while fresh content is loading</div>
      <div>
        <a href="https://codesandbox.io/p/sandbox/wild-framework-mm976s?file=%2Fsrc%2FApp.js&utm_medium=sandpack">example refetch</a>
      </div>
      <div>
        {/* <h4>useDeferredValue:</h4>
        <div> a React Hook that lets you defer updating a part of the UI.</div> */}
        <a href="https://codesandbox.io/p/sandbox/wild-framework-mm976s?file=%2Fsrc%2FApp.js&utm_medium=sandpack">
          example Showing stale content when refetch data.useDeferredValue:a React Hook that lets you defer updating a part of the UI.
        </a>
      </div>
      <br />
      <div> Preventing already revealed content from hiding</div>
      <a href="https://codesandbox.io/p/sandbox/thirsty-wildflower-6mr49s?file=%2Fsrc%2FApp.js&utm_medium=sandpack">example before</a>
      <a href="https://codesandbox.io/p/sandbox/hidden-dust-xcmgz2?utm_medium=sandpack">example after</a>
      <br />
      <div> Indicating that a Transition is happening</div>
      <a href="https://codesandbox.io/p/sandbox/brave-worker-5gfq94?utm_medium=sandpack">example</a>

      <br />
      <div> Resetting Suspense boundaries on navigation</div>
      {"<ProfilePage key={queryParams.id} />"}
      <br />
      <div> Providing a fallback for server errors and client-only content</div>
      <b>
        {" "}
        {`If you use one of the streaming server rendering APIs (or a framework that relies on them), React will also use your <Suspense> boundaries to handle errors on the server. If a component throws an error on the server, React will not abort the server render. Instead, it will find the closest <Suspense> component above it and include its fallback (such as a spinner) into the generated server HTML. The user will see a spinner at first.

On the client, React will attempt to render the same component again. If it errors on the client too, React will throw the error and display the closest error boundary. However, if it does not error on the client, React will not display the error to the user since the content was eventually displayed successfully.

You can use this to opt out some components from rendering on the server. To do this, throw an error in the server environment and then wrap them in a <Suspense> boundary to replace their HTML with fallbacks:`}
      </b>
    </div>
  );
};

export default SuspensePage;
