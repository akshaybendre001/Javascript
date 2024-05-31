import React from 'react'
import {Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
    <h1 style= {{color:"red"}}>This is a Contact Page</h1>
    <Link to="/">Go to Homepage</Link><br></br>
    <h3>Anil's contact:</h3>
    
    <li>Mobile:9842463526</li>
    <li>Email:Anil@p99soft.com</li>
    
    
    </div>
  )
}

export default Contact;