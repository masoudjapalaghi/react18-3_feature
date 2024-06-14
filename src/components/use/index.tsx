const UsePage = () => {
  return (
    <div>
      <h2>use is a React API that lets you read the value of a resource like a Promise or context.</h2>

      <h3>Usage</h3>
      <div>Reading context with use</div>
      <pre style={{ backgroundColor: "#858585", color: "black" }}>
        {`
            import { use } from 'react';

            function MessageComponent({ messagePromise }) {
              const message = use(messagePromise);
              const theme = use(ThemeContext);
              // ...
          `}
      </pre>
      <br />

      <div style={{ fontSize: "12px" }}>
        Unlike React Hooks, use can be called within loops and conditional statements like if. Like React Hooks, the function that calls use must be a Component or Hook.
      </div>
      <br />
      <div style={{ fontSize: "12px" }}>When called with a Promise, the use API integrates with Suspense and error boundaries. The component</div>
      <br />

      <div>Streaming data from the server to the client</div>
      <br />

      <div>Dealing with rejected Promises</div>

      <h3>Caveats </h3>
      <div>The use API must be called inside a Component or a Hook.</div>
      <br />
      <div>
        When fetching data in a Server Component, prefer async and await over use. async and await pick up rendering from the point where await was invoked, whereas use re-renders the component after
        the data is resolved.
      </div>
      <br />
      <div>
        Prefer creating Promises in Server Components and passing them to Client Components over creating Promises in Client Components. Promises created in Client Components are recreated on every
        render. Promises passed from a Server Component to a Client Component are stable across re-renders.
      </div>
      <pre style={{ backgroundColor: "#858585", color: "black" }}>
        {`
        import { fetchMessage } from './lib.js';
        import { Message } from './message.js';
        
        export default function App() {
          const messagePromise = fetchMessage();
          return (
            <Suspense fallback={<p>waiting for message...</p>}>
              <Message messagePromise={messagePromise} />
            </Suspense>
          );
        }
          `}
      </pre>
      <pre style={{ backgroundColor: "#858585", color: "black" }}>
        {`
     // message.js
     'use client';
     
     import { use } from 'react';
     
     export function Message({ messagePromise }) {
       const messageContent = use(messagePromise);
       return <p>Here is the message: {messageContent}</p>;
     }
          `}
      </pre>
      <br />
      <h3>Should I resolve a Promise in a Server or Client Component? </h3>
      <div>
        A Promise can be passed from a Server Component to a Client Component and resolved in the Client Component with the use API. You can also resolve the Promise in a Server Component with await
        and pass the required data to the Client Component as a prop.
      </div>
      <br />
      <pre style={{ backgroundColor: "#858585", color: "black" }}>
        {`
      export default async function App() {
          const messageContent = await fetchMessage();
          return <Message messageContent={messageContent} />
     }
          `}
      </pre>
      <br />
      <div>
        But using await in a Server Component will block its rendering until the await statement is finished. Passing a Promise from a Server Component to a Client Component prevents the Promise from
        blocking the rendering of the Server Component.
      </div>
      <br />
      <h3>Dealing with rejected Promises</h3>
      <div>Displaying an error to users with an error boundary.</div>
      <div>Providing an alternative value with Promise.catch</div>
    </div>
  );
};

export default UsePage;
