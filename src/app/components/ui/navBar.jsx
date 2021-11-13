import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/extended-hooks">
            Main
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/extended-hooks/useRef">
            useRef
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/extended-hooks/useMemo">
            useMemo
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/extended-hooks/useCallback">
            useCallback
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/extended-hooks/hoc">
            HOC
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/extended-hooks/memo">
            React.memo
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/extended-hooks/cloneElement">
            React.cloneElement
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/extended-hooks/children">
            React Children
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
