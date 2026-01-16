import React from 'react'
import './Species.css'
import gallery_1 from '../../assets/pixels1.jpg'
import gallery_2 from '../../assets/pixels2.jpg'
import gallery_3 from '../../assets/pixels3.jpg'
import gallery_4 from '../../assets/pixels4.jpg'
import right_arrow from '../../assets/right-arrow.png'

const Species = () => {
  return (
    <div className='species container' name='species'>
      <div className="gallery">
        <img src={gallery_1} alt="Gallery 1" />
        <img src={gallery_2} alt="Gallery 2" />
        <img src={gallery_3} alt="Gallery 3" />
        <img src={gallery_4} alt="Gallery 4" />
      </div>

      {/* Wrapping the button in an <a> tag to open in a new tab */}
      <a 
        href="https://www.discovery.com/nature" 
        target=""
        rel="noopener noreferrer"
        className='see-more-link'
      >
        <button className='btn dark-btn'>
          See more here <img src={right_arrow} alt="" />
        </button>
      </a>
    </div>
  )
}

export default Species