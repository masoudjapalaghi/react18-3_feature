const StrictModePage = () => {
  return (
    <div>
      <h3>Strict Mode enables the following checks in development:</h3>
      <div>Enabling Strict Mode for entire app</div>
      <br />
      <div>Enabling Strict Mode for a part of the app</div>
      <br />
      <div>Fixing bugs found by double rendering in development</div>
      <br />
      <div>Fixing bugs found by re-running Effects in development</div>
      <br />
      <div>Fixing deprecation warnings enabled by Strict Mode</div>
      <br />
      <div>All of these checks are development-only and do not impact the production build.</div>
    </div>
  );
};

export default StrictModePage;
