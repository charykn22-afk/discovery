import React from 'react'
import './Footer.css'
import followus_img from '../../assets/followus.png' // Use the frog/rocket graphic
import discoverymain_logo from '../../assets/logomain.png'

const Footer = () => {
  return (
    <div className='footer-container' name='Footer'>
      {/* Newsletter / Follow Us Section */}
      <div className='follow-us-section'>
        <div className='follow-left'>
          <img src={followus_img} alt="Follow Discovery" />
        </div>
        <div className='follow-right'>
          <p>By entering your email address, you agree to our <span>Terms of Use</span> and acknowledge the <span>Privacy Policy</span>.</p>
          <div className='signup-box'>
            <input type="email" placeholder='Enter your email' />
            <button className='btn signup-btn'>Sign Up</button>
          </div>
          <p className='consent-text'>To withdraw your consent or learn more about your rights, see the <span>Privacy Policy</span>.</p>
        </div>
      </div>

      {/* Bottom Navigation Links */}
      <div className='footer-links'>
        <ul>
          <li>Site Map</li>
          <li>Visitor Agreement</li>
          <li>Privacy Policy</li>
          <li>AdChoices</li>
          <li>About</li>
          <li>Advertise</li>
          <li>Careers at Discovery</li>
        </ul>
        
      </div>

      {/* Copyright Bar */}
      <div className='copyright-bar'>
        <p>The Discovery Family of Networks</p>
        <p>© 2026 Warner Bros. Discovery, Inc. or its subsidiaries and affiliates. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer