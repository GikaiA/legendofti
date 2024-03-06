import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import tipfp from "../images/ti-pfp.png";

function Navbar() {
  const location = useLocation();

  // const isHomePage = location.pathname === "/";

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`navbar ${
        location.pathname === "/" ? "transparent" : "white"
      }`}
    >
      <img src={tipfp} alt="ti-pfp" className="tipfp"></img>
      <div
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <li>
          <Link
            to="/"
            className={`navbar-link ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`navbar-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/gaming"
            className={`navbar-link ${
              location.pathname === "/gaming" ? "active" : ""
            }`}
          >
            Gaming
          </Link>
        </li>
        <li>
          <Link
            to="/sponsors"
            className={`navbar-link ${
              location.pathname === "/sponsors" ? "active" : ""
            }`}
          >
            Sponsors
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`navbar-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
