import React,{useRef} from "react";

function Button()
{
    const videoRef = useRef();
    const Playbutton= ()=>{
        videoRef.current.play();
    }

    const Pausebutton = ()=>{
        videoRef.current.pause();
    }
    return(
        <>
        <video width="520" height="240" ref={videoRef}>
            <source src="/Videos/Myvideo1.mp4"></source>
        </video>

        <div>
        <button onClick={Playbutton}>  Play  </button> 
        
        <button onClick={Pausebutton}>  Pause  </button>
        </div>
        
        </>
    )

}
export default Button;

