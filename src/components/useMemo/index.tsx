import { useMemo, useState } from "react";
import RefeRenceTypeByUsMemo from "./RefeRenceTypeByUsMemo";
import PrimitiveChid from "./PrimitiveChid";
import RefeRenceTypeWithoutUseMemo from "./RefeRenceTypeWithoutUseMemo";

const UseMemo = () => {
  const [statusToggle, toggle] = useState(false);
  const [nameUser, setNameUser] = useState("john");
  const primitiveType = "hello";

  const dataMemoized = useMemo(() => {
    return {
      name: nameUser,
    };
  }, [nameUser]);

  const dataUnMemoized = {
    name: nameUser,
  };

  return (
    <div>
      <input onChange={(e) => setNameUser(e.target.value)} value={nameUser} />
      <button onClick={() => toggle((prev) => !prev)}>click Me for toggle statusToggle</button>:{statusToggle ? "is true" : "is false"}
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <PrimitiveChid message={primitiveType} />
        <RefeRenceTypeByUsMemo data={dataMemoized} />
        <RefeRenceTypeWithoutUseMemo data={dataUnMemoized} />
      </div>
      <pre style={{ backgroundColor: "#858585", color: "black" }}>
        {`  
import { useMemo, useState } from "react";
import RefeRenceTypeByUsMemo from "./RefeRenceTypeByUsMemo";
import PrimitiveChid from "./PrimitiveChid";
import RefeRenceTypeWithoutUseMemo from "./RefeRenceTypeWithoutUseMemo";

const UseMemo = () => {
  const [statusToggle, toggle] = useState(false);
  const [nameUser, setNameUser] = useState("john");
  const primitiveType = "hello";

  const dataMemoized = useMemo(() => {
    return {
      name: nameUser,
    };
  }, [nameUser]);

  const dataUnMemoized = {
    name: nameUser,
  };

  return (
    <div>
      <input onChange={(e) => setNameUser(e.target.value)} value={nameUser} />
      <button onClick={() => toggle((prev) => !prev)}>click Me for toggle statusToggle</button>
      status :{statusToggle ? "is true" : "is false"}
      <PrimitiveChid message={primitiveType} />
      <RefeRenceTypeByUsMemo data={dataMemoized} />
      <RefeRenceTypeWithoutUseMemo data={dataUnMemoized} />
    </div>
  );
};

export default UseMemo;
  `}
      </pre>
    </div>
  );
};

export default UseMemo;
