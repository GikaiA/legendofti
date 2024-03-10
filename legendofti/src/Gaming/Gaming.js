import React from "react";
import "./Gaming.css";
import { Link } from "react-router-dom";
import { TwitchPlayer, TwitchChat } from "react-twitch-embed";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { InstagramEmbed } from "react-social-media-embed";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import tithumbnail1 from "../images/ti-thumbnail1.jpg";
import tithumbnail2 from "../images/ti-thumbnail2.jpg";
import tithumbnail3 from "../images/ti-thumbnail3.jpg";
import tithumbnail4 from "../images/ti-thumbnail4.jpg";

function Gaming() {


  return (
    <div className="gaming-wrapper">
      <div className="social-section">
        <h1 className="social-title">Twitch</h1>
        <div className="social-container">
          <TwitchPlayer
            channel="legendof_ti"
            autoplay
            muted
            className="twitch-video"
          ></TwitchPlayer>
          <TwitchChat
            channel="legendof_ti"
            darkMode={true}
            height={480}
            className="twitch-chat"
          ></TwitchChat>
        </div>
        <h1 className="social-title">Youtube</h1>
        <div className="social-container">
          <Carousel
            showArrows={false}
            infiniteLoop={true}
            autoPlay={true}
            showStatus={false}
            showThumbs={true}
          >
            <img src={tithumbnail1} alt="ti-thumbnail" className="thumbnail" />
            <img src={tithumbnail2} alt="ti-thumbnail" className="thumbnail" />
            <img src={tithumbnail3} alt="ti-thumbnail" className="thumbnail" />
            <img src={tithumbnail4} alt="ti-thumbnail" className="thumbnail" />
          </Carousel>
        </div>
        <div className="tiktok-embed-wrapper">
      <iframe
        title="TikTok Embed"
        src="https://www.tiktok.com/embed/@legendof_ti"
        width="100%"
        height="800"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
        {/* <h1 className="social-title">Twitter/X</h1>
        <div className="social-container">
          <TwitterTimelineEmbed
            sourceType="timeline"
            screenName="LegendofTi"
            options={{ height: 800, width: 1200 }}
          ></TwitterTimelineEmbed>
        </div>
        <h1 className="social-title">Instagram</h1>
        <div className="social-container">
          <InstagramEmbed
            url="https://www.instagram.com/legendof_ti/"
            width={900}
          ></InstagramEmbed>
        </div>  */}
      </div>
    </div>
  );
}

export default Gaming;
