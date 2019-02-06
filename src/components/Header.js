import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="wrapper header__container">
      <h1 className="header__title">Stockpile</h1>
      <nav className="header__nav">
        <NavLink
          to="/"
          exact
          className="header__nav__link"
          activeClassName="is-active"
        >
          Store
        </NavLink>
        <NavLink
          to="/create"
          className="header__nav__link"
          activeClassName="is-active"
        >
          Create Item
        </NavLink>
        {/* <NavLink to="/inventory" activeClassName="is-active">
      Inventory
    </NavLink> */}
        {/* <NavLink to="/report" activeClassName="is-active">
      Report
    </NavLink>
    <NavLink to="/records" activeClassName="is-active">
      Records
    </NavLink> */}
      </nav>
    </div>
  </header>
);

export default Header;
