import React from "react";
import "./Sponsors.css";
import ghost from "../images/ghost-logo.png";
import gameradvantage from "../images/gamer-advantage.png";
import scuf from "../images/scuf.png";
import meta from "../images/metapc.png";

function Sponsors() {
  return (
    <div className="sponsors">
      <div className="sponsor-title-section">
        <h1 className="sponsor-title">Sponsors</h1>
      </div>
      <div className="sponsor-container">
        <div className="ghost-section">
          <a
            href="https://www.ghostlifestyle.com/?ref=Ti"
            className="sponsor-link"
          >
            <img src={ghost} alt="ghost-logo" className="ghost-logo"></img>
          </a>
        </div>
      </div>
      <div className="sponsor-container">
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
      </div>
      <div className="sponsor-container">
        <div className="meta-section">
          <div className="info-section">
            <a href="https://www.metapcs.com/ref/ti/" className="sponsor-link">
              {" "}
              <img src={meta} alt="metapc-logo" className="metapc-logo"></img>
            </a>
          </div>
        </div>
      </div>
      <div className="sponsor-container">
        <div className="scuf-section">
          <div className="info-section">
            <a
              href="https://scufgaming.sjv.io/c/3116279/1897353/22689"
              className="sponsor-link"
            >
              {" "}
              <img src={scuf} alt="scuf-logo" className="scuf-logo"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
