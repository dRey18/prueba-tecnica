import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
      
      <nav className = "navbar">
        <nav className="logo-nav ">
        <img src={logo} width="150" height="50"alt="company"/>
        </nav>
        <header className="nav">
          <div className="navbar-container">
            <h2>Nemo enim ipsam volutatem quia </h2> 
            <h2 > <span> 75,000 voluptas </span> sit aspernatur</h2>
          </div>
        </header>
      </nav>
  )
}

export default Navbar;