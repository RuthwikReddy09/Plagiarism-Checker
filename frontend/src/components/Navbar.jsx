import React from 'react'
import "../styles/navbar.css"
function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            Plagiarism Checker
        </div>
        <div className="links">
            <a href="#" className="link">Home</a>
            <a href="#" className="link">About</a>
            <a href="#" className="link">Contact</a>
        </div>
    </div>
  )
}

export default Navbar