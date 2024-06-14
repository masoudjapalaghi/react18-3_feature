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
