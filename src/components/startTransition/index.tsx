const StartTransitionPage = () => {
  return (
    <div>
      <h2>startTransition lets you update the state without blocking the UI.</h2>
      <div>
        The startTransition function is used to mark long or heavy updates as a Transition. This allows React to perform these updates with lower priority, providing a smoother user experience.
      </div>
      <pre style={{ backgroundColor: "#858585", color: "black" }}>
        {`  
        const [filter, setFilter] = useState('');
        const [items, setItems] = useState(allItems); // allItems یک آرایه بزرگ است

        const handleInputChange = (e) => {
            const newFilter = e.target.value;
            setFilter(newFilter);

            startTransition(() => {
            const filteredItems = allItems.filter(item => item.includes(newFilter));
            setItems(filteredItems);
            });
        };
  `}
      </pre>

      <h3>Caveats </h3>
      <div> startTransition does not provide a way to track whether a Transition is pending. To show a pending indicator while the Transition is ongoing, you need useTransition instead.</div>
      <br />
      <div>
        You can wrap an update into a Transition only if you have access to the set function of that state. If you want to start a Transition in response to some prop or a custom Hook return value,
        try useDeferredValue instead.
        <pre style={{ backgroundColor: "#858585", color: "black" }}>
          {`  
    import React, { useState, startTransition } from 'react';

    function App() {
      const [filter, setFilter] = useState('');
      const [items, setItems] = useState(allItems); // allItems یک آرایه بزرگ است
    
      const handleInputChange = (e) => {
        const newFilter = e.target.value;
        setFilter(newFilter);
    
        startTransition(() => {
          const filteredItems = allItems.filter(item => item.includes(newFilter));
          setItems(filteredItems);
        });
      };
    
      return (
        <div>
          <input type="text" value={filter} onChange={handleInputChange} />
          <ul>
            {items.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      );
    }
  `}
        </pre>
        <pre style={{ backgroundColor: "#858585", color: "black" }}>
          {`  
       import React, { useState, useDeferredValue } from 'react';

       function FilteredList({ filter }) {
         const deferredFilter = useDeferredValue(filter);
         const filteredItems = allItems.filter(item => item.includes(deferredFilter));
       
         return (
           <ul>
             {filteredItems.map(item => <li key={item}>{item}</li>)}
             <p>Filtering with: {deferredFilter}</p>
           </ul>
         );
       }
       
       function App() {
         const [filter, setFilter] = useState('');
       
         const handleInputChange = (e) => {
           setFilter(e.target.value);
         };
       
         return (
           <div>
             <input type="text" value={filter} onChange={handleInputChange} />
             <FilteredList filter={filter} />
           </div>
         );
       }
  `}
        </pre>
      </div>
      <br />
      <div>
        The function you pass to startTransition must be synchronous. React immediately executes this function, marking all state updates that happen while it executes as Transitions. If you try to
        perform more state updates later (for example, in a timeout), they won’t be marked as Transitions.
      </div>
      <br />
      <div>
        A state update marked as a Transition will be interrupted by other state updates. For example, if you update a chart component inside a Transition, but then start typing into an input while
        the chart is in the middle of a re-render, React will restart the rendering work on the chart component after handling the input state update.
      </div>
      <br />
      <div> Transition updates can’t be used to control text inputs.</div>
      <br />
      <div> If there are multiple ongoing Transitions, React currently batches them together. This is a limitation that will likely be removed in a future release.</div>
      <br />
      <div>
        startTransition is very similar to useTransition, except that it does not provide the isPending flag to track whether a Transition is ongoing. You can call startTransition when useTransition
        is not available. For example, startTransition works outside components, such as from a data library.
      </div>
    </div>
  );
};

export default StartTransitionPage;
