import React, { useState } from "react";

import "./Navbar.css";

// Ici, je pense qu'avec plus de temps je peux faire en sorte d'avoir un composant navbar dynamique.

const Navbar = () => {
  const [chairs, setChairs] = useState(true);
  const [sofas, setSofas] = useState(false);
  const [tables, setTables] = useState(false);
  const [lamps, setLamps] = useState(false);
  const [kit, setKit] = useState(false);

  return (
    <nav className="Nav-container">
      <ul className="Nav-content">
        <li
          className="Nav-link"
          onClick={() => {
            setChairs(!chairs);
            setSofas(false);
            setTables(false);
            setLamps(false);
            setKit(false);
          }}
        >
          <p className={chairs ? "Link Selected" : "Link"}>Chairs</p>
          <div className={chairs ? "Dot Selected" : "Dot"} />
        </li>
        <li
          className="Nav-link"
          onClick={() => {
            setSofas(!sofas);
            setChairs(false);
            setTables(false);
            setLamps(false);
            setKit(false);
          }}
        >
          <p className={sofas ? "Link Selected" : "Link"}>Sofas</p>
          <div className={sofas ? "Dot Selected" : "Dot"} />
        </li>
        <li
          className="Nav-link"
          onClick={() => {
            setTables(!tables);
            setChairs(false);
            setSofas(false);
            setLamps(false);
            setKit(false);
          }}
        >
          <p className={tables ? "Link Selected" : "Link"}>Tables</p>
          <div className={tables ? "Dot Selected" : "Dot"} />
        </li>
        <li
          className="Nav-link"
          onClick={() => {
            setLamps(!lamps);
            setChairs(false);
            setSofas(false);
            setTables(false);
            setKit(false);
          }}
        >
          <p className={lamps ? "Link Selected" : "Link"}>Lamps</p>
          <div className={lamps ? "Dot Selected" : "Dot"} />
        </li>
        <li
          className="Nav-link"
          onClick={() => {
            setKit(!kit);
            setChairs(false);
            setSofas(false);
            setTables(false);
            setLamps(false);
          }}
        >
          <p className={kit ? "Link Selected" : "Link"}>Kit</p>
          <div className={kit ? "Dot Selected" : "Dot"} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
