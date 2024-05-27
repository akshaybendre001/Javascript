import {useContext} from 'react';
import MyContext from './MyContext';

const MyComponent = ()=>{
    const state = useContext(MyContext);

    return(
        <div>
           
           <h1>My name is {state}</h1> 
           
        </div>
    );
};
export default MyComponent;