import React from "react";
import "./Gaming.css";
import { TwitchPlayer, TwitchChat } from "react-twitch-embed";
import {TwitterTimelineEmbed} from 'react-twitter-embed';
import { InstagramEmbed } from "react-social-media-embed";
import tiyt from "../images/ti-yt.png";
import tiyt2 from "../images/ti-yt2.jpg";
import tiyt3 from "../images/ti-yt3.jpg";
import ReactPlayer from "react-player/youtube";

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
        <h1 className="social-title">Youtube</h1>
        <div className="video-container">
          <div className="yt-profile-section">
            <div className="yt-profile">
              <img src={tiyt} alt="ti-yt-pfp" className="yt-pic"></img>
              <div className="thumbnail-section">
                <div className="player-wrapper">
                <ReactPlayer className="react-player"
                  url="https://youtu.be/vTWWoAX-FbU?si=p0L8u9HK0JyCCuST"
                  controls
                  width="640px"
                  height="360px"
                /></div>
                <br></br>
                <ReactPlayer className="react-player"
                  url="https://youtu.be/ET0pOoBzJ5o?si=LO6SyzzfPxtKJzzf"
                  controls
                />
                <br></br>
                <ReactPlayer className="react-player"
                  url="https://youtu.be/A9QqTFU2bAc?si=Wvige2KS3oqO-VgZ"
                  controls
                />
              </div>
            </div>
            <div className="yt-profile">
              <img src={tiyt2} alt="ti-yt2-pfp" className="yt2-pic"></img>
              <div className="thumbnail-section">
                <ReactPlayer  className="react-player"
                  url="https://youtu.be/jKlT3vvwuIk?si=8Y_WBV4vuYyqL1a_"
                  controls
                />
                <br></br>
                <ReactPlayer className="react-player"
                  url="https://youtu.be/rnVf9FP5MIw?si=_-WJi8RDkF6hMS3n"
                  controls
                />
                <br></br>
                <ReactPlayer className="react-player"
                  url="https://youtu.be/tGX4egjMBJQ?si=pc5ki6xY3XMshxUC"
                  controls
                />
              </div>
            </div>
            <div className="yt-profile">
              <img src={tiyt3} alt="ti-yt3-pfp" className="yt3-pic"></img>
              <div className="thumbnail-section">
                <ReactPlayer className="react-player"
                  url="https://www.youtube.com/shorts/cDTPstQhy9o"
                  controls
                />
                <br></br>
                <ReactPlayer className="react-player"
                  url="https://www.youtube.com/shorts/RZ60crXF-QQ"
                  controls
                />
                <br></br>
                <ReactPlayer className="react-player"
                  url="https://youtu.be/V6_9Xp6M15Y?si=N52DbimDTmrAWYes"
                  controls
                />
              </div>
            </div>
          </div>
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
            url="https://www.instagram.com/legendofti/"
            width="100%"
          ></InstagramEmbed>
        </div>
        <h1 className="social-title">Twitter/X</h1>
        <div className="social-container">
        <TwitterTimelineEmbed
  sourceType="profile"
  screenName="LegendofTi"
  options={{width:1800, height: 1400}}
/>
        </div>
      </div>
    </div>
  );
}

export default Gaming;
