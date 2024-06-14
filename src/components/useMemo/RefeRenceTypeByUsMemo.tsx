import { memo } from "react";
import { getRandomColor } from "../../utils";
type Props = {
  data: { name: string };
};
const RefeRenceTypeByUseMemo = ({ data }: Props) => {
  return <div style={{ backgroundColor: getRandomColor() }}>RefeRence Type By useMemo {data.name}</div>;
};

export default memo(RefeRenceTypeByUseMemo);
