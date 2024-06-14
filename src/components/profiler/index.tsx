import  { Profiler, ProfilerOnRenderCallback, useState } from "react";
import NestedUpdate from "./nestedUpdate";
import { getRandomColor } from "../../utils";

const ProfilerPage = () => {
  const [statusToggle, toggle] = useState(false);
  const onRender: ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    console.log({ id, phase, actualDuration, baseDuration, startTime, commitTime });
  };

  return (
    <Profiler id="App" onRender={onRender}>
      <div style={{ backgroundColor: getRandomColor() }}>
        <span onClick={() => toggle((prev) => !prev)}>Profiler {statusToggle}</span>
        <NestedUpdate />
      </div>
    </Profiler>
  );
};

export default ProfilerPage;
