import React from 'react'
import './Hero.css'
import arrow_right from '../../assets/arrow-right.svg'
// import video_bg from '../../assets/video_bg.mp4'


const Hero = () => {
  return (
    <div className='hero container' name='hero'>
       {/* <video autoPlay muted loop className='back-video'>
            <source src={video_bg} type="video/mp4" />
        </video> */}
        <div className="hero-text">
        <h1>Discover the Unseen.<br/>Experience the Extraordinary </h1>
        <p>Embrace the spirit of adventure as you journey into the heart of the world's most breathtaking landscapes. From the golden hues of a savannah sunset to the hidden depths of ancient forests, every horizon offers a new story waiting to be told.</p>
        <a href="/explore" target="_blank" rel="noopener noreferrer" className="hero-link">
        <button className='btn'>Explore More <img src={arrow_right} alt="" /></button>
        </a>
      </div> 
    </div> 
  )
}

export default Hero
