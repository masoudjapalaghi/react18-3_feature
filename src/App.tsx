import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ProfilerPage from "./components/profiler";
import StrictModePage from "./components/stricMode";
import SuspensePage from "./components/suspense";
import LazyPage from "./components/lazy";
import ActPage from "./components/lazy";
import CachePage from "./components/cache";
import CreateContext from "./components/createContext";
import ForwardRef from "./components/forwardRef";
import StartTransitionPage from "./components/startTransition";
import UsePage from "./components/use";
import MemoPage from "./components/memo";
import UseMemo from "./components/useMemo";
import UseCallbackPage from "./components/useCallback";

function App() {
  return (
    <div>
      <nav className="header">
        <Link to="/profilerPage">profiler</Link>
        <Link to="/strictMode">strictMode</Link>
        <Link to="/actPage">act</Link>
        <Link to="/createContextPage">createContext</Link>
        <Link to="/forwardRefPage">forwardRef</Link>
        <Link to="/startTransitionPage">startTransition</Link>
        <Link to="/lazyPage">lazy</Link>
        <Link to="/suspensePage">suspense</Link>
        <Link to="/usePage">use (Canary)</Link>
        <Link to="/cachePage">cache (Canary)</Link>
        <Link to="/memoPage">memo</Link>
        <Link to="/useMemoPage">useMemo</Link>
        <Link to="/useCallbackPage">useCallBack</Link>
      </nav>
      <Routes>
        <Route path="/profilerPage" element={<ProfilerPage />} />
        <Route path="/strictMode" element={<StrictModePage />} />
        <Route path="/actPage" element={<ActPage />} />
        <Route path="/createContextPage" element={<CreateContext />} />
        <Route path="/forwardRefPage" element={<ForwardRef />} />
        <Route path="/startTransitionPage" element={<StartTransitionPage />} />
        <Route path="/lazyPage" element={<LazyPage />} />
        <Route path="/suspensePage" element={<SuspensePage />} />
        <Route path="/usePage" element={<UsePage />} />
        <Route path="/cachePage" element={<CachePage />} />
        <Route path="/memoPage" element={<MemoPage />} />
        <Route path="/useMemoPage" element={<UseMemo />} />
        <Route path="/useCallbackPage" element={<UseCallbackPage />} />
      </Routes>
    </div>
  );
}

export default App;
{
  /* <Profiler>
<StrictMode>
<Suspense>

React APIs:

act
createContext
forwardRef
startTransition
use (Canary) 
lazy
cache (Canary)
memo*/
}
