import React from "react";
import "./Gaming.css";
import { TwitchPlayer, TwitchChat } from "react-twitch-embed";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


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
          <InstagramEmbed
            url="https://www.instagram.com/legendof_ti/"
            width={900}
          ></InstagramEmbed>
        </div>
        <h1 className="social-title">Youtube</h1>
        <div className="social-container">
          <Carousel showArrows={false} infiniteLoop={true} autoPlay={true}>
              <YouTubeEmbed url="https://youtu.be/X9Sf5pfMekE?si=rswg2lUBzLEquMnH" className="yt-video"></YouTubeEmbed>
              <YouTubeEmbed url="https://youtu.be/X9Sf5pfMekE?si=rswg2lUBzLEquMnH"></YouTubeEmbed>
            <YouTubeEmbed url="https://youtu.be/X9Sf5pfMekE?si=rswg2lUBzLEquMnH"></YouTubeEmbed>
            <YouTubeEmbed url="https://youtu.be/X9Sf5pfMekE?si=rswg2lUBzLEquMnH"></YouTubeEmbed>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Gaming;
