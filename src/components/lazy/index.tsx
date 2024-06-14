const ActPage = () => {
  return (
    <div>
      When writing UI tests, tasks like rendering, user events, or data fetching can be considered as “units” of interaction with a user interface. React provides a helper called act() that makes sure
      all updates related to these “units” have been processed and applied to the DOM before you make any assertions
    </div>
  );
};

export default ActPage;
