import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">

      <div className="logo">
        <h1>MIS Store</h1>
      </div>

      <ul className="nav-links">
        <li className="active-link">Home</li>
        <li>About</li>
        <li>Our Schools</li>
        <li>Parents</li>
        <li>Staff Portal</li>
      </ul>
    </div>
  );
}

export default Header;
