import { useCallback, useState } from "react";
import RefeRenceTypeByUsCallBack from "./RefeRenceTypeByUsCallBack";
import RefeRenceTypeWithoutUseCallBack from "./RefeRenceTypeWithoutUseCallBack";

const UseCallbackPage = () => {
  const [statusToggle, toggle] = useState(false);

  const handleToggleByUseCallBack = useCallback(() => {
    toggle((prev) => !prev);
  }, []);

  const handleToggleWithoutUseCallBack = () => {
    toggle((prev) => !prev);
  };
  return (
    <div>
      statusToggle:{statusToggle ? "is true" : "is false"}
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <RefeRenceTypeByUsCallBack handleToggle={handleToggleByUseCallBack} />
        <RefeRenceTypeWithoutUseCallBack handleToggle={handleToggleWithoutUseCallBack} />
      </div>
      <pre style={{ backgroundColor: "#858585", color: "black" }}>
        {`  
import { useCallback, useState } from "react";
import RefeRenceTypeByUsCallBack from "./RefeRenceTypeByUsCallBack";
import RefeRenceTypeWithoutUseCallBack from "./RefeRenceTypeWithoutUseCallBack";

const UseCallbackPage = () => {
  const [statusToggle, toggle] = useState(false);

  const handleToggleByUseCallBack = useCallback(() => {
    toggle((prev) => !prev);
  }, []);

  const handleToggleWithoutUseCallBack = () => {
    toggle((prev) => !prev);
  };
  return (
    <div>
      statusToggle:{statusToggle ? "is true" : "is false"}
      <RefeRenceTypeByUsCallBack handleToggle={handleToggleByUseCallBack} />
      <RefeRenceTypeWithoutUseCallBack handleToggle={handleToggleWithoutUseCallBack} />
   
    </div>
  );
};

export default UseCallbackPage;

  `}
      </pre>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <pre style={{ backgroundColor: "#858585", color: "black" }}>
          {`  
import { memo } from "react";
import { getRandomColor } from "../../utils";
type Props = {
  handleToggle: () => void;
};
const RefeRenceTypeByUseCallBack = ({ handleToggle }: Props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", backgroundColor: getRandomColor() }}>
      RefeRence Type By UseCallback
      <button onClick={handleToggle}>click Me for toggle statusToggle</button>
    </div>
  );
};

export default memo(RefeRenceTypeByUseCallBack);

  `}
        </pre>
        <pre style={{ backgroundColor: "#858585", color: "black" }}>
          {`  
import { memo } from "react";
import { getRandomColor } from "../../utils";
type Props = {
  handleToggle: () => void;
};
const RefeRenceTypeWithoutUseCallBack = ({ handleToggle }: Props) => {
  return (
    <div style={{display:"flex" , justifyContent:"space-evenly",backgroundColor: getRandomColor() }}>
      RefeRence Type Without UseCallBack
      <button onClick={handleToggle}>click Me for toggle statusToggle</button>
    </div>
  );
};

export default memo(RefeRenceTypeWithoutUseCallBack);

  `}
        </pre>
      </div>
    </div>
  );
};

export default UseCallbackPage;
