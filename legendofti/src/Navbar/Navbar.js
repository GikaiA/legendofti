import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import tipfp from "../images/ti-pfp.png";
import { RiKickFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";

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
        </li>{" "}
        <div className="navbar-icons-section">
          <a href="https://discord.gg/FQV2B9MfRT" className="link">
            <FaDiscord className="navbar-icon" />
          </a>
          <a href="https://twitter.com/LegendofTi" className="link">
            <RiTwitterXFill className="navbar-icon" />
          </a>
          <a href="https://www.instagram.com/legendof_ti/" className="link">
            <RiInstagramFill className="navbar-icon" />
          </a>
          <a href="https://www.twitch.tv/legendof_ti" className="link">
            <FaTwitch className="navbar-icon" />
          </a>
          <a href="https://www.youtube.com/@LegendofTi" className="link">
            <FaYoutube className="navbar-icon" />
          </a>
          <a href="https://www.tiktok.com/@legendof_ti" className="link">
            <FaTiktok className="navbar-icon" />
          </a>
          <a href="https://www.youtube.com/@legendoftishorts" className="link">
            <SiYoutubeshorts className="navbar-icon" />
          </a>
          <a href="https://kick.com/legendof_ti" className="link">
            <RiKickFill className="navbar-icon" />
          </a>
          <a
            href="https://www.facebook.com/people/LegendofTi/100078030915722/"
            className="link"
          >
            <FaFacebookSquare className="navbar-icon" />
          </a>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
