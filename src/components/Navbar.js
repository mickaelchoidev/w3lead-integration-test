import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Nav-container">
      <ul className="Nav-content">
        <li className="Nav-link Selected">
          <p className="Link">Chairs</p>
          <div className="Dot" />
        </li>
        <li className="Nav-link">
          <p className="Link">Sofas</p>
          <div className="Dot Transparent" />
        </li>
        <li className="Nav-link">
          <p className="Link">Tables</p>
          <div className="Dot Transparent" />
        </li>
        <li className="Nav-link">
          <p className="Link">Lamps</p>
          <div className="Dot Transparent" />
        </li>
        <li className="Nav-link">
          <p className="Link">Kit</p>
          <div className="Dot Transparent" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
