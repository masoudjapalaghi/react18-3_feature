import { memo } from "react";
import { getRandomColor } from "../../utils";
type Props = {
  data: { name: string };
};
const RefeRenceTypeWithoutUseMemo = ({ data }: Props) => {
  return <div style={{ backgroundColor: getRandomColor() }}>RefeRence Type Without UseMemo {data.name}</div>;
};

export default memo(RefeRenceTypeWithoutUseMemo);
