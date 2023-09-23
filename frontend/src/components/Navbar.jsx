import React from 'react'
import "../styles/navbar.css"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            Plagiarism Checker
        </div>
        <div className="links">
            <Link to="/" className="link">Home</Link>
            <Link to="#" className="link">About</Link>
        </div>
    </div>
  )
}

export default Navbar