import React,{useCallback, useState} from 'react';

function Callback()
{
    const [count, setCount] = useState(0);

    const increment = useCallback(()=>{
        setCount(prevCount => prevCount + 1)}, [count])

        const IncrementButton = React.memo(({ onIncrement }) => {   //if props changes than only it will re-render
            console.log('Increment Button is rendered')
        
        return(
            <button onClick={onIncrement}>Increment</button>

        )});


    return(
         <>
        <div>
            <h1>Count : {count} </h1>
            <IncrementButton onIncrement={increment} />
        </div>
        </>
    );
}
export default Callback;