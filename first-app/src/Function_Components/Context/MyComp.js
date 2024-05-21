import React,{useState} from 'react';
import ContextValue from './ContextValue';

function MyComp()
{
    const [state, setState] = useContext(ContextValue);

    return (
        <>
        <p>state</p>
        <button onClick = {()=>setState('New State')}>Change State</button>
        </>
    );
};
export default MyComp;