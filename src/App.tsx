import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ProfilerPage from "./components/profiler";
import StrictModePage from "./components/stricMode";
import SuspensePage from "./components/suspense";
import LazyPage from "./components/lazy";

function App() {
  return (
    <div>
      <nav className="header">
        <Link to="/profilerPage">profiler</Link>
        <Link to="/strictMode">strictMode</Link>
        <Link to="/lazyPage">lazy</Link>
        <Link to="/suspensePage">suspense</Link>
      </nav>
      <Routes>
        <Route path="/profilerPage" element={<ProfilerPage />} />
        <Route path="/strictMode" element={<StrictModePage />} />
        <Route path="/lazyPage" element={<LazyPage />} />
        <Route path="/suspensePage" element={<SuspensePage />} />
      </Routes>
    </div>
  );
}

export default App;
