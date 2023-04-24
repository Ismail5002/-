import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-center gap-10  ">
        <Link to="/POST">POST</Link>
        <Link to="/GET">GET</Link>
      </div>
    </div>
  );
};

export default Navbar;
