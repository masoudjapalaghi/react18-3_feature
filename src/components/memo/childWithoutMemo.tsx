import { getRandomColor } from "../../utils";

const ChildWithoutMemo = ({ status1 }: { status1: boolean }) => {
  return <div style={{ backgroundColor: getRandomColor() }}>
    Child Without Memo status1:{status1 ? "is true" : "is false"}
    </div>;
};

export default ChildWithoutMemo;
