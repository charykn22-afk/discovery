import React,{useRef} from 'react'
import './Schedule.css'
import arrowfor_icon from '../../assets/arrowfor.png'
import back_icon from '../../assets/back.png'
import user_1 from '../../assets/user1.jpg'
import user_2 from '../../assets/user2.jpg'
import user_3 from '../../assets/user3.jpg'
import user_4 from '../../assets/user4.jpg'

const Schedule = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = () => {
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

}
const slideBackward = () => {
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}


  return (
    <div className='schedule container'>
        <img src={arrowfor_icon} alt="" className='arrowfor-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                    <h3>Mike Rowe</h3>
                    <span>Dirty Jobs, USA</span>
                </div>
              </div>
              <p>Join Mike as he explores the toughest, strangest, and most essential 
              jobs that keep the world running.</p>
            </div>
          </li>
           <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                    <h3>Ed Stafford</h3>
                    <span>Survivalist, First Man Out</span>
                </div>
              </div>
              <p>The first human to walk the length of the Amazon River, Ed now tests his limits against 
                the world's toughest explorers in high-stakes survival races.</p>
            </div>
          </li>
           <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                    <h3>Josh Gates</h3>
                    <span>Explorer, Expedition Unknown</span>
                </div>
              </div>
              <p>An archeologist and adventurer who travels the globe investigating 
                the world's most enduring legends and uncovering lost civilizations.</p>
            </div>
          </li>
           <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                    <h3>Sig Hansen</h3>
                    <span>Captain, Deadliest Catch</span>
                </div>
              </div>
              <p>The veteran captain of the Northwestern, Sig leads his crew through the brutal, 
                freezing waters of the Bering Sea in search of Alaskan King Crab.</p>
            </div>
          </li>
          {/* You can add more <li> items for user_2, user_3, etc. here */}
        </ul>
      </div>
    </div>
  )
}

export default Schedule