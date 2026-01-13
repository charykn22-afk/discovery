import React from 'react'
import './Episodes.css'
import thumb1 from '../../assets/pixel12.jpeg' // Ensure path is ../../
import thumb2 from '../../assets/pixels13.jpeg'
import thumb3 from '../../assets/pixels14.jpeg'

const Episodes = () => {
  return (
    <div className='episodes container'>
      <h2 className='section-title'>What to Watch</h2>
      <div className="episodes-grid">
        {/* Card 1 */}
        <div className="episode-card">
          <img src={thumb1} alt="Moonshiners" />
          <div className="episode-details">
            <h6>6 SEASONS</h6>
            <h5>Moonshiners: Master Distiller</h5>
            <button className='binge-btn'>Binge on discovery+</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="episode-card">
          <img src={thumb2} alt="Expedition X" />
          <div className="episode-details">
            <h6>9 SEASONS</h6>
            <h5>Expedition X</h5>
            <button className='binge-btn'>Binge on discovery+</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="episode-card">
          <img src={thumb3} alt="Harpoon Hunters" />
          <div className="episode-details">
            <h6>NEW SHOW</h6>
            <h5>Harpoon Hunters</h5>
            <button className='binge-btn'>Binge on discovery+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodes