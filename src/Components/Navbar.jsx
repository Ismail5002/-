import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/PUT">PUT</Link>
      <Link to="/POST">POST</Link>
      <Link to="/GET">GET</Link>
    </div>
  );
};

export default Navbar;
