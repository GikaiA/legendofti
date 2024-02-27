import React from "react";
import "./Footer.css";
import { useLocation } from "react-router-dom";
import { RiKickFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";

function Footer() {
    const location = useLocation();

    const isHomePage = location.pathname === '/'

    const footerClass = isHomePage ? 'footer-transparent' : 'footer-colored';
  return (
    <div className={`footer-section ${footerClass}`}>
    <div className="copyright-section">
        <p className="copyright-sentence">Copyright © 2024 LegendOfTi, Inc. </p>
      </div>
      <div className="icons-section">
        <a href="https://twitter.com/LegendofTi" className="link">
          <RiTwitterXFill className="icon" />
        </a>
        <a href="https://www.instagram.com/legendof_ti/" className="link">
          <RiInstagramFill className="icon" />
        </a>
        <a href="https://www.twitch.tv/legendof_ti" className="link">
          <FaTwitch className="icon" />
        </a>
        <a href="https://www.youtube.com/@LegendofTi" className="link">
          <FaYoutube className="icon" />
        </a>
        <a href="https://www.tiktok.com/@legendof_ti" className="link">
          <FaTiktok className="icon" />
        </a>
        <a href="https://www.youtube.com/@legendoftishorts" className="link">
          <SiYoutubeshorts className="icon" />
        </a>
        <a href="https://kick.com/legendof_ti" className="link">
          <RiKickFill className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
