import { memo } from "react";

const NestedUpdate = () => {
  const expensiveCalculate = () => {
    let i = 0;
    for (let index = 0; index < 10000000 + Math.floor(Math.random() * 10) + 1; index++) {
      // console.log("hello word");
      i++;
    }
    return i;
  };

  return <div>expensive calculate {expensiveCalculate()}</div>;
};

export default memo(NestedUpdate);
