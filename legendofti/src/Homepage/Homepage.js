import React from "react";
import "./Homepage.css";
import tibg from "../videos/ti-bg.mp4";
import Typewriter from "typewriter-effect";

function Homepage() {
  return (
    <>
      <div className="bg-wrapper">
        <video autoPlay muted controls={false} loop playsInline={true}>
          <source src={tibg} type="video/mp4"></source>
        </video>
      </div>
      <div className="homepage">
        <div className="heading-section">
          <h1 className="heading-title">Welcome to Legend Of Ti</h1>
          <Typewriter
            options={{
              strings: ["Gamer", "Creator", "Bodybuilder"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 250,
            }}
          />{" "}
        </div>
      </div>
    </>
  );
}

export default Homepage;
