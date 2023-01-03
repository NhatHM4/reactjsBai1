import "./App.scss";

import React from "react";
import Header from "./components/header/header";

import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>
        test Link
        <div>
          <button>
            <Link to="/users">go to user page</Link>
          </button>
          <button>
            <Link to="/admin">go to admin page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
