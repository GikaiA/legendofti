import React from 'react';
import './GamerAdv.css';
import tigameradvantage from '../images/ti-gameradvantage.jpg';
import gameradvantage from '../images/gamer-advantage.png';

function GamerAdv() {
  return (
    <div className='gamer-advantange-wrapper'>
        <img src={tigameradvantage} alt='gamer-advantage-bg' className='gamer-advantage-bg'></img>
      <div className='gamer-advantage-section'>
        <img src={gameradvantage} alt='gamer-adv-logo' className='gamer-adv-logo'></img>
       </div>
    </div>
  )
}

export default GamerAdv
