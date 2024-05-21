import React, {} from 'react';
import React, {useState} from 'react';
import createContext from './CreateContext';

const ContextValue = ({children})=>
    {
        const [state, setState] = useState('Hello World!');

        return(
            <>
            <CreateContext.Provider value = {{state, setState}}>
                {children}
            </CreateContext.Provider>
            </>
        );
    };
export default ContextValue;