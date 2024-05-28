import React,{useState} from 'react';

function Goal()
{
    const [isgoaldone, setgoal]= useState();

    const achieve = ()=>{
        setgoal(false);

    }
    
    return(
        <>
        <button onClick={achieve}>Check Goal</button>
        {isgoaldone ? <p>The goal is completed!</p> : <p>The goal is not Completed!</p>}
        </>
    );
}
export default Goal;