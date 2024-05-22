import React, {useState, useEffect, useRef} from "react";
import ReactDOM from  'react-dom';

function Ref1()
{
    const [inputValue, setInputValue] = useState("");
    // let [count,setCount] = useState(0)
    const count = useRef(0);
    console.log(count);

    useEffect(()=>{
        count.current = count.current + 1;
    });

    return(
        <>
        <input type="text" value = {inputValue} onChange={(e)=> setInputValue(e.target.value)}></input>

        <h1>Render Count: {count.current}</h1>
        </>
    );

}
export default Ref1;