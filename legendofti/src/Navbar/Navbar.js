import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import tipfp from "../images/ti-pfp.png";

function Navbar() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  return (
    <div className={`navbar ${isHomePage ? "transparent" : "white"}`}>
      <img src={tipfp} alt="ti-pfp" className="tipfp"></img>
      <ul>
        <li>
          <Link to="/" className={`navbar-link ${isHomePage ? "active" : "black"}`}>
            Home
          </Link>
        </li>
        <li>
        <Link to="/about" className={`navbar-link ${isHomePage ? '' : 'black'}`}>
            About
          </Link>
        </li>
        <li>
        <Link to="/gaming" className={`navbar-link ${isHomePage ? '' : 'black'}`}>
            Gaming
          </Link>
        </li>
        <li>
        <Link to="/contact" className={`navbar-link ${isHomePage ? '' : 'black'}`}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
