import React, {useState} from 'react';

// function App1()
// {
//     const [count, setCount] = useState(0);
//     return (
//          <button onClick={()=>setCount(count + 1)}> {count} </button>
       
//     );



function App1(){
    let [count, setCount] = useState(10)

function Decrementbutton()
{
    setCount(prevCount => prevCount - 1)
}

function Incrementbutton()
{
    setCount(prevCount => prevCount + 1)
}


    return (
        <>
        <button onClick={Decrementbutton}> - </button>
        <span> {count} </span>
        <button onClick ={Incrementbutton}> + </button>
        </>
    );
}

export default App1;