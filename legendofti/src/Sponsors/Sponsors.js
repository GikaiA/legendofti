import React from "react";
import "./Sponsors.css";
import tighost from "../images/ti-ghost.jpg";
import tigameradvantage from "../images/ti-gameradvantage.jpg";
import timeta from "../images/ti-metapc.jpg";
import tialtcustoms from '../images/ti-altcustoms.jpg'
import ghost from "../images/ghost-logo.png";
import gameradvantage from "../images/gamer-advantage.png";
import altcustoms from "../images/altcustoms.png";
import meta from "../images/metapc.png";
import GamerAdv from "../GamerAdv/GamerAdv";

function Sponsors() {
  return (
    <div className="sponsors">
      <div className="sponsor-container">
        <img src={tighost} alt="ti-ghost-pic" className="sponsor-pic"></img>
        <div className="ghost-section">
          <div className="info-section">
            <a
              href="https://www.ghostlifestyle.com/?ref=Ti"
              className="sponsor-link"
            >
              <img src={ghost} alt="ghost-logo" className="ghost-logo"></img>
            </a>
          </div>
        </div>
      </div>
      <GamerAdv/>
      {/* <div className="sponsor-container">
        <img
          src={tigameradvantage}
          alt="ti-gameradvantage-pic"
          className="sponsor-pic"
        ></img>
        <div className="gameradvantage-section">
          <div className="info-section">
            <a
              href="https://gameradvantage.com/?ref=Ti"
              className="sponsor-link"
            >
              <img
                src={gameradvantage}
                alt="gamer-advantage"
                className="gameradvantage-logo"
              ></img>
            </a>
          </div>
        </div>
      </div> */}
      <div className="sponsor-container">
        <img src={timeta} alt="ti-ghost-pic" className="sponsor-pic"></img>
        <div className="meta-section">
          <div className="info-section">
            <a href="https://www.metapcs.com/ref/ti/" className="sponsor-link">
              {" "}
              <img src={meta} alt="metapc-logo" className="metapc-logo"></img>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="sponsor-container">
        <img src={tialtcustoms} alt="ti-altcustom-pic" className="sponsor-pic"></img>
        <div className="altcustoms-section">
          <div className="info-section">
            <a href="https://altcustoms.com/?ref=Ti" className="sponsor-link">
              {" "}
              <img src={altcustoms} alt="altcustoms-logo" className="altcustoms-logo"></img>
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Sponsors;