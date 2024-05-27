import React, {useEffect, useState} from 'react';

function Effect()
{
    
    useEffect(()=>{
        console.log("useEffect updated!");
        alert("useEffect updated!");
    })
    return(
        <>
        <h1> Hello useEffect!</h1>
        </>
    );
}

export default Effect;