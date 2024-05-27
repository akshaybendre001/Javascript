import React,{useState} from 'react';
import {useRef} from 'react';

const Ref = () =>
    {
        const [alteredText, changedText] = useState("State 1");
        
        const textChange = ()=>{
            
            setTimeout(()=>{
            alteredText("State 3");
            }, 3000)
            changedText("State 2");
        }

        return(
            <div>
            <h1>Hii there This is useRef!!</h1>
            <h2>{alteredText}</h2>
            <button onClick = {textChange}> Change State </button>
            </div>
        );
    }
    export default Ref;