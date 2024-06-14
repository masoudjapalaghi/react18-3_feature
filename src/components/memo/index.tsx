import { useState } from "react";
import ChildWithoutMemo from "./childWithoutMemo";
import ChildByMemo from "./childByMemo";
import ChildByCustomConfigForMemo from "./childByCustomConfigForMemo";

const MemoPage = () => {
  const [statusToggle1, toggle1] = useState(false);
  const [statusToggle2, toggle2] = useState(false);
  return (
    <div>
      <button onClick={() => toggle1((prev) => !prev)}>click Me for toggle statusToggle1</button>
      {`  <||>   `}
      <button onClick={() => toggle2((prev) => !prev)}>click Me for toggle statusToggle2</button>
      <ChildWithoutMemo status1={statusToggle1} />
      <ChildByMemo  />
      <ChildByCustomConfigForMemo status1={statusToggle1} status2={statusToggle2} />

      <pre style={{ backgroundColor: "#858585", color: "black" }}>
        {`  
import { useState } from "react";
import ChildWithoutMemo from "./childWithoutMemo";
import ChildByMemo from "./childByMemo";

const MemoPage = () => {
  const [statusToggle1, toggle1] = useState(false);
  const [statusToggle2, toggle2] = useState(false);
  return (
    <div>
      <button onClick={() => toggle1((prev) => !prev)}>click Me for toggle statusToggle11</button>
        <||>   
      <button onClick={() => toggle2((prev) => !prev)}>click Me for toggle statusToggle2</button>
      <ChildWithoutMemo status1={statusToggle1} />
      <ChildByMemo />
      <ChildByCustomConfigForMemo status1={statusToggle1} status2={statusToggle2} />

    </div>
  );
};

export default MemoPage;

  `}
      </pre>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <pre style={{ backgroundColor: "#858585", color: "black" }}>
          {`  
import { getRandomColor } from "../../utils";

const ChildWithoutMemo = ({ status1 }: { status1: boolean }) => {
  return <div style={{ backgroundColor: getRandomColor() }}>
    Child Without Memo status1:{status1 ? "is true" : "is false"}
    </div>;
};

export default ChildWithoutMemo;

  `}
        </pre>
        <pre style={{ backgroundColor: "#858585", color: "black" }}>
          {`  
import { memo } from "react";
import { getRandomColor } from "../../utils";
const ChildByMemo = () => {
  return (
    <div style={{ backgroundColor: getRandomColor() }}>
      Child by Memo 
    </div>
  );
};

export default memo(ChildByMemo);

  `}
        </pre>
        <pre style={{ backgroundColor: "#858585", color: "black" }}>
          {`  
import { memo } from "react";
import { getRandomColor } from "../../utils";
type Props = { status1: boolean; status2: boolean };
const ChildByCustomConfigForMemo = ({ status1,status2 }: Props) => {
  return (
    <div style={{ backgroundColor: getRandomColor() }}>
    Child by custom config Memo 
    status1:{status1 ? "is true" : "is false"}
      ---
      status2:{status2 ? "is true" : "is false"}
    </div>
  );
};

export default memo(ChildByCustomConfigForMemo, (prev: Props, current: Props) => {
  return prev.status1 === current.status1;
});

  `}
        </pre>
      </div>
    </div>
  );
};

export default MemoPage;
