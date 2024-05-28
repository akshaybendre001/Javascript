import React,{useState} from 'react';

function Ternary()
{
    const[isLoggedIn, setLogin] = useState(false);
    const[userName, setUserName] = useState('');

    const handleLogout = ()=>{
        setLogin(false);
        setUserName('');
    }

    const handleLogin = ()=>{

        setLogin(true);
        setUserName('Akshay');
    }
  
    return(
        <>
        {isLoggedIn ? (
        <>
          <h1>Welcome, {userName} To The Website!</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
        </>
    );
}


export default Ternary;

//Create a React component that displays a "Login" button if the user is not logged in and a "Logout" button 
//if the user is logged in. Additionally, show a welcome message with the user's name when they are logged in.