import React, { useState } from 'react'
import './episodes.css' 
import moonshiner from '../../assets/moonshiner.jpeg'
import expedition from '../../assets/expedition.jpeg'
import contraband from '../../assets/contraband.jpeg'

// Importing your specific image names
import pixels18 from '../../assets/pixels18.jpeg' 
import pixels20 from '../../assets/pixels20.jpeg'
import pixels21 from '../../assets/pixels21.jpeg'

const Episodes = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  // Mapping your images to episode data
  const episodeData = {
    moonshiners: [
      { id: 1, title: "Episode 1: Discovery", img: pixels18 },
      { id: 2, title: "Episode 2: The Run", img: pixels20 },
      { id: 3, title: "Episode 3: Master Class", img: pixels21 }
    ]
  };

  if (selectedShow) {
    return (
      <div className='episodes container'>
        <button className='btn' onClick={() => setSelectedShow(null)} style={{marginBottom: '20px'}}>
            ← Back to Shows
        </button>
        <h2 className='section-title'>Episodes for {selectedShow}</h2>
        <div className="episodes-grid">
          {episodeData[selectedShow]?.map(ep => (
            <div className="episode-card" key={ep.id}>
              <img src={ep.img} alt={ep.title} />
              <div className="episode-details">
                <h5>{ep.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='episodes container'>
      <h2 className='section-title'>What to Watch</h2>
      <div className="episodes-grid">
        <div className="episode-card">
          <img src={moonshiner} alt="Moonshiners" />
          <div className="episode-details">
            <h6>6 SEASONS</h6>
            <h5>Moonshiners: Master Distiller</h5>
            <button className='binge-btn' onClick={() => setSelectedShow('moonshiners')}>
                Binge on discovery+
            </button>
          </div>
        </div>
        {/* Repeat for other cards as needed */}
      </div>
    </div>
  )
}

export default Episodes