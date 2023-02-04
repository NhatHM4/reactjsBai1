import "./App.scss";

import React from "react";
import Header from "./components/header/header";

import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header/>
      </div>
      <div className="main-container">
        <div className="nav-container">
          
        </div>

        <div className="app-container">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};
export default App;
