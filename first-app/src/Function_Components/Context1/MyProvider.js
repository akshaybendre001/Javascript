import React, { createContext } from 'react';
import {useState} from 'react';
import MyContext from './MyContext';
import MyComponent from './MyComponent';

const MyProvider = ()=>{
    const [name, setName] = useState("ReactApp");

    // const MyContext = createContext()

    return(
        <>
        <MyContext.Provider value = {name}>
            <MyComponent/>
        </MyContext.Provider>
        </>
    );
};
export default MyProvider;