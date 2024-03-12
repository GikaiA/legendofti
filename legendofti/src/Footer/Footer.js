import React from "react";
import "./Footer.css";
import { useLocation } from "react-router-dom";
import { RiKickFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";


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
      <a href="https://discord.gg/FQV2B9MfRT" className="link">
          <FaDiscord className="icon" />
        </a>
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
        <a href="https://www.facebook.com/people/LegendofTi/100078030915722/" className="link">
          <FaFacebookSquare className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
