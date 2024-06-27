import React from "react";
import "./Gaming.css";
import { TwitchPlayer, TwitchChat } from "react-twitch-embed";
import { TwitterTweetEmbed } from "react-twitter-embed";
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
            channel="legendofti"
            autoplay
            muted
            className="twitch-video"
            width={1200}
            height={800}
          ></TwitchPlayer>
          <TwitchChat
            channel="legendofti"
            darkMode={true}
            height={800}
            className="twitch-chat"
          ></TwitchChat>
        </div>
        <a href="https://www.youtube.com/@LegendofTi" className="youtube-link">
          <h1 className="social-title">Youtube *CLICK ME*</h1>
        </a>
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
        <h1 className="social-title">Tiktok</h1>
        <div className="tiktok-embed-wrapper">
          <iframe
            title="TikTok Embed"
            src="https://www.tiktok.com/embed/@legendof_ti"
            display="block"
            width="100%"
            height="500"
            // max-width="100%"
            frameBorder="0"
            allowFullScreen
            overflow="none"
          ></iframe>
        </div>
        <h1 className="social-title">Instagram</h1>
        <div className="social-container">
          <InstagramEmbed
            url="https://www.instagram.com/legendof_ti/"
            width="100%"
          ></InstagramEmbed>
        </div>
        <h1 className="social-title">Twitter/X</h1>
        <div className="social-container">
          
          <TwitterTweetEmbed
            tweetId={"1805370064725852584"}
            options={{ width: 900, height: 400 }}
          /><TwitterTweetEmbed
            tweetId={"1799873723996217721"}
            options={{ width: 800, height: 400 }}
          />
          <TwitterTweetEmbed
            tweetId={"1704661068268900800"}
            options={{ width: 900, height: 400 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Gaming;
