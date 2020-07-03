import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Nav-container">
      <ul className="Nav-content">
        <li className="Nav-link">
          <p tabIndex="0" className="Link">
            Chairs
          </p>
          <div className="Dot" />
        </li>
        <li className="Nav-link">
          <p tabIndex="0" className="Link">
            Sofas
          </p>
          <div className="Dot" />
        </li>
        <li className="Nav-link">
          <p tabIndex="0" className="Link">
            Tables
          </p>
          <div className="Dot" />
        </li>
        <li className="Nav-link">
          <p tabIndex="0" className="Link">
            Lamps
          </p>
          <div className="Dot" />
        </li>
        <li className="Nav-link">
          <p tabIndex="0" className="Link">
            Kit
          </p>
          <div className="Dot" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
