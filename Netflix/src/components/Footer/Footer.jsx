import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Descrption</li>
        <li>Help centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relation</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>privacy</li>
        <li>Legal Notice</li>
        <li>Cookie preference</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'> c 1997-2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
