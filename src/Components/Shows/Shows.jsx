import React from 'react'
import './Shows.css'

import contraband from '../../assets/contraband.jpeg'
import expedition from '../../assets/expedition.jpeg'
import program_1 from '../../assets/programs-1.jpg'
import harpoon from '../../assets/harpoon.jpeg'
import seasons from '../../assets/seasons.jpeg'
import moonshiner from '../../assets/moonshiner.jpeg'
const Programs = () => {
  return (
    <div className='shows container'>
        {/* Program 1 */}
        <div className="show">
            <img src={Moonshiners} alt="Nature" />
            <div className="caption">
                <p>MoonSHINERS</p>
            </div>
           <div className="shows2">
            <img src={harpoon} alt="" />
             </div> 
        </div>
        

        {/* Program 2 */}
        <div className="show">
            <img src={contraband} alt="Deep Blue" />
            <div className="caption">
                <p>Deep Blue Secrets</p>
            </div>
            <div className="shows2">
            <img src={seasons} alt="" />
             </div>
        </div>

        {/* Program 3 */}
        <div className="show">
            <img src={expedition} alt="Horizons" />
            <div className="caption">
                <p>Untamed Horizons</p>
            </div>
            <div className="showss2">
            <img src={moonshiner} alt="" />
             </div>
        </div>

        {/* Program 4 
        <div className="program">
            <img src={program_1} alt="Civilizations" />
            <div className="caption">
                <p>Lost Civilizations</p>
            </div>
        </div> */}
    </div>
  )
}

export default Programs