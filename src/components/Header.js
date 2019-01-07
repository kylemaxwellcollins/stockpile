import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Stockpile</h1>
    <NavLink to="/" exact activeClassName="is-active">
      Store
    </NavLink>
    <NavLink to="/inventory" activeClassName="is-active">
      Inventory
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Item
    </NavLink>
    <NavLink to="/report" activeClassName="is-active">
      Report
    </NavLink>
    <NavLink to="/records" activeClassName="is-active">
      Records
    </NavLink>

  </header>
);

export default Header;
