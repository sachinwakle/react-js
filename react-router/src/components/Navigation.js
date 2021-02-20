import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Navigation() {
  const navStyle = {
    color: "white",
    textDecoration: 'none'
  };
  return (
    <div>
      <nav>
        <h1>Logo </h1>
        <ul className="nav-links">
          <Link style={navStyle} to="/about">
            <li>About</li>
          </Link>
          <Link style={navStyle} to="/shop">
            <li>Shop</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
