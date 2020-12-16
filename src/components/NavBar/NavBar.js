import React from "react";
// Router
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>
        <NavLink to="/">JD Anagnostou</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/listings">Listings</NavLink>
        </li>
        <li>
          <NavLink to="/community">Community</NavLink>
        </li>
        <li>
          <NavLink to="/meet-jd">Meet JD</NavLink>
        </li>
        <li>
          <NavLink to="/get-in-touch">Get in Touch</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
