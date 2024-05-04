import React,{useRef} from 'react'
import './VideoPlayer.css'
import video from '../../edusity_assets/7971025-hd_1280_720_24fps.mp4'


const VideoPlayer = ({playState,setPlayState}) => {
    const player = useRef(null);

    const closePlayer=()=>{
        if(e.target === player.current){
            setPlayState(false);
        }

    }


  return (
    <div className={`video-player ${playState?'':'hide'}`} ref = {player} onClick={closePlayer} >
    <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer
