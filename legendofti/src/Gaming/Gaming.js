import React from "react";
import "./Gaming.css";
import { TwitchPlayer, TwitchChat } from "react-twitch-embed";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { InstagramEmbed } from "react-social-media-embed";

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
          ></TwitchChat>
        </div>
        <h1 className="social-title">Twitter/X</h1>
        <div className="social-container">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="LegendofTi"
            options={{ height: 800, width: 900 }}
          ></TwitterTimelineEmbed>
        </div>
        <h1 className="social-title">Instagram</h1>
        <div className="social-container">
          <InstagramEmbed url="https://www.instagram.com/legendof_ti/" width={900}></InstagramEmbed>
        </div>
      </div>
    </div>
  );
}

export default Gaming;
