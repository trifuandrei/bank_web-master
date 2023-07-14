import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import "./App.css";
import { CoinShowAll, CoinCreate, CoinEdit, CoinDelete } from "./pages/coin";


const CoinSubMenu = () => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const handleClick = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };
  const handleMouseLeave = () => {
    setSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <div className="nav-dropdown">
      <button className="nav-link" onClick={handleClick}>
        Coin options
      </button>
      {isSubMenuVisible && (
        <ul
          onClick={handleClick}
          onMouseLeave={handleMouseLeave}
          className="sub-menu"
        >
          <li>
            <Link to="/coin/showall">Show all</Link>
          </li>
          <li>
            <Link to="/coin/create">Create</Link>
          </li>
          <li>
            <Link to="/coin/edit">Edit</Link>
          </li>
          <li>
            <Link to="/coin/delete">Delete</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

const App = () => {
    return (
        <Router>
            <div>
                <nav className="navbar">
                    <Link to="/dashboard" className="nav-link">
                        Dashboard
                    </Link>
                    <CoinSubMenu />
                </nav>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/coin/showall" element={<CoinShowAll />} />
                    <Route path="/coin/create" element={<CoinCreate />} />
                    <Route path="/coin/edit" element={<CoinEdit />} />
                    <Route path="/coin/delete" element={<CoinDelete />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
