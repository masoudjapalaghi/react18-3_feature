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
