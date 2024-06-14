const StrictModePage = () => {
  return (
    <div>
      <h3>Strict Mode enables the following checks in development:</h3>
      <h4>Your components will re-render an extra time to find bugs caused by impure rendering.</h4>
      <h4>Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.</h4>
      <h4>Your components will be checked for usage of deprecated APIs.</h4>

        All of these checks are development-only and do not impact the production build.
    </div>
  );
};

export default StrictModePage;
