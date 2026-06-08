import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Experience from "./pages/Experience";

function App() {
  return (
    <>

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <div className="app-container">

        <Routes>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* PROJECT */}
          <Route path="/project" element={<Project />} />

          {/* EXPERIENCE */}
          <Route path="/experience" element={<Experience />} />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />

        </Routes>

      </div>

    </>
  );
}

export default App;