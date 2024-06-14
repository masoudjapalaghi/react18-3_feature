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
