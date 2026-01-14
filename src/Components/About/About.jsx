import React from 'react'
import './About.css'
import mxd6 from '../../assets/mxd6.jpg'
import play from '../../assets/play.svg'

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={mxd6} alt="" className='about-img'/>
            <img src={play} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>About Us</h3>
            <h2>Our Legacy of Wonder</h2>
            <p>Since our inception, we have been dedicated to bringing the wonders 
           of the world to your screen. From the deepest oceans to the farthest 
           reaches of space...</p>
           <p>"Our mission is to inspire wonder by exploring the frontiers of science, 
            nature, and history, ensuring that the spirit of discovery never fades."</p>
        </div>
    </div>
  )
}

export default About
