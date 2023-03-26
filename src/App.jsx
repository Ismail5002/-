import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Components/Navbar";
import AppRoutes from "./Components/AppRoutes";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <div className="GET">
        <div className="btn"></div>
      </div>
      <AppRoutes />
      <div className="PUT"></div>
    </div>
  );
};

export default App;
