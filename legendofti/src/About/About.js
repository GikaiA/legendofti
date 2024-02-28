/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./About.css";
import ti from "../images/ti-landscape.png";

function About() {
  return (
    <div className="about-section">
      <img src={ti} alt="ti-image" className="ti-pic"></img>
      <div className="about-paragraph">
        <p className="about-text">
          LegendOfTi is a multifaceted content creator, celebrated for her
          prowess in the gaming world as a Call of Duty Partner. Hailing from
          the vibrant state of Arizona, LegendOfTi embarked on her streaming
          journey on a Playstation, honing her skills and building connections
          within the gaming community. Over the course of five years, she
          transformed her passion for gaming into a thriving career, not only as
          a notable Call of Duty Partner but also as an accomplished bodybuilder
          and dancer. Her commitment to entertaining her audience extends beyond
          the virtual battlefield, showcasing her diverse talents and creating a
          welcoming community that resonates with fans across various interests.
          LegendOfTi's journey exemplifies the power of dedication and
          creativity, proving that with persistence, one can carve a niche in
          the ever-evolving landscape of content creation.
        </p>
      </div>
    </div>
  );
}

export default About;
