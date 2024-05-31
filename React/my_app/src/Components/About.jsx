import React from 'react';
import {Link} from 'react-router-dom';

function About() {
  return (
    <div>
        <h1 style={{color:"blue"}}>This is a About page</h1>
        
        <Link to="/users/anil">Anil</Link><br></br>
        <Link to="/users/peter">Peter</Link><br></br>
        <br></br>
        <Link to="/">Go to Homepage</Link><br></br>
        <br></br>
    </div>
  )
}

export default About;