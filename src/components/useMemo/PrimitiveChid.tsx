import { memo } from "react";
import { getRandomColor } from "../../utils";
type Props = {
  message:string
};
const PrimitiveChid = ({ message }: Props) => {
  return <div style={{ backgroundColor: getRandomColor() }}>{message} Primitive  Child</div>;
};

export default memo(PrimitiveChid);
