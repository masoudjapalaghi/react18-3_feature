const LazyPage = () => {
  return (
    <div>
      <h3>lazy lets you defer loading component’s code until it is rendered for the first time.</h3>A function that returns a Promise or another thenable (a Promise-like object with a then method).
      React will not call load until the first time you attempt to render the returned component. After React first calls load, it will wait for it to resolve, and then render the resolved value’s
      .default as a React component. Both the returned Promise and the Promise’s resolved value will be cached, so React will not call load more than once. If the Promise rejects, React will throw the
      rejection reason for the nearest Error Boundary to handle.
    </div>
  );
};

export default LazyPage;
