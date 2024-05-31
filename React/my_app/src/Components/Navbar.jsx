import {Link} from 'react-router-dom';

import React from 'react'

function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link><br></br>

        <Link to="/about">About</Link><br></br>

        <Link to="/contact">Contact</Link><br></br>

        

    </div>
  )
}

export default Navbar;