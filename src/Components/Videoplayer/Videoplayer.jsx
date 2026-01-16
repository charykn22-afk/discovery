import React, { useRef } from 'react'
import './Videoplayer.css'
import video from '../../assets/video_bg.mp4'


const Videoplayer = ({ playState, setPlayState }) => {

  const player = useRef(null);

  const closePlayer = (e) => {
    // This checks if the user clicked the dark overlay specifically
    if (e.target === player.current) {
      setPlayState(false);
    }
  }

  return (
    <div 
      className={`video-player ${playState ? '' : 'hide'}`} 
      ref={player} 
      onClick={closePlayer}
    >
      {/* Clicking the video itself will NOT close it because of stopPropagation */}
      <video 
        src={video} 
        autoPlay 
        muted 
        controls 
        onClick={(e) => e.stopPropagation()} 
      ></video>
    </div>
  )
}

export default Videoplayer