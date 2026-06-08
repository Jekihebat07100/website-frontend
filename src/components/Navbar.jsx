import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
        ReactApp
      </h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/project">Project</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/about">About</Link>
      </div>

    </nav>
  );
}

export default Navbar;