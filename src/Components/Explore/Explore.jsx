import React from 'react'
import './Explore.css'
import video_bg from '../../assets/video_bg.mp4' 

// 1. CHANGE IMPORTS HERE: Match the variable name to the file name
import pixels1 from '../../assets/pixels1.jpg' 
import pixels2 from '../../assets/pixels2.jpg'
import pixels3 from '../../assets/pixels3.jpg'
import pixels4 from '../../assets/pixels4.jpg'
import pixels5 from '../../assets/pixels5.jpg' 
import pixels6 from '../../assets/pixels6.jpg' 
import pixels7 from '../../assets/pixels7.jpg' 
import pixels8 from '../../assets/pixels8.jpg' 
import pixels9 from '../../assets/pixels9.jpg' 
import pixels10 from '../../assets/pixels10.jpg' 
import pixels11 from '../../assets/pixels11.jpg'   

const Explore = () => {
  return (
    <div className='explore-container'>
      <div className='container'>
        <h1>Experience the Extraordinary</h1>
        
        <div className='video-section'>
          <video controls width="100%" className='explore-video'>
            <source src={video_bg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className='explore-grid'>
          {/* 2. CHANGE IMAGE TAGS HERE: Use the names defined in imports */}
          <img src={pixels1} alt="Discovery 1" />
          <img src={pixels2} alt="Discovery 2" />
          <img src={pixels3} alt="Discovery 3" />
          <img src={pixels4} alt="Discovery 4" />
          <img src={pixels5} alt="Discovery 5" />
          <img src={pixels6} alt="Discovery 5" />
          <img src={pixels7} alt="Discovery 5" />
          <img src={pixels8} alt="Discovery 5" />
          <img src={pixels9} alt="Discovery 5" />
          <img src={pixels10} alt="Discovery 5" />
          <img src={pixels11} alt="Discovery 5" />
          
        </div>
      </div>
    </div>
  )
}

export default Explore