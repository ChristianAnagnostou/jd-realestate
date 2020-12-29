import React, { useState, useEffect, useRef } from "react";
// Router
import { NavLink } from "react-router-dom";

function NavBar() {
  const navBar = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScrollHeight = () => setScrollHeight(window.scrollY);
    window.addEventListener("scroll", handleScrollHeight);

    if (scrollHeight >= 450) {
      navBar.current.style.top = 0;
      navBar.current.style.opacity = 1;
    } else {
      navBar.current.style.top = "-60px";
      navBar.current.style.opacity = 0;
    }

    if (window.location.pathname !== "/") {
      navBar.current.style.top = 0;
      navBar.current.style.opacity = 1;
    }

    return () => {
      window.removeEventListener("scroll", handleScrollHeight);
    };
  }, [scrollHeight]);

  return (
    <nav ref={navBar}>
      <h1>
        <NavLink to="/">JD</NavLink>
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
