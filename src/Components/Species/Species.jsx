import React from 'react'
import './Species.css'
import gallery_1 from '../../assets/pixels1.jpg'
import gallery_2 from '../../assets/pixels2.jpg'
import gallery_3 from '../../assets/pixels3.jpg'
import gallery_4 from '../../assets/pixels4.jpg'
import gallery_5 from '../../assets/pixels5.jpg'
import gallery_6 from '../../assets/pixels6.jpg'
import gallery_7 from '../../assets/pixels7.jpg'
import right_arrow from '../../assets/right-arrow.png'
const Species = () => {
  return (
    <div className='species container'>
      <div className="gallery">
      <img src={gallery_1} alt="" />
      <img src={gallery_2} alt="" />
      <img src={gallery_3} alt="" />
      <img src={gallery_4} alt="" />
      <img src={gallery_5} alt="" />
      <img src={gallery_6} alt="" />
      <img src={gallery_7} alt="" />
    </div>
    <button className='btn dark-btn'>See more here <img src={right_arrow} alt="" /> </button>
    </div>
  )
}


export default Species
