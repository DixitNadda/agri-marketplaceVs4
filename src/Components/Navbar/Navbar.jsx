import React from 'react'
import './Navbar.css'
import  logo from '../assets/wheatLogo.png';


const Navbar= (navbarObj)=> {
  return (
    <>
    <div class="navbar">
      <img id="abc" alt="logo image" src={logo} />
      <div id="links">
        <a class="navItem" href={navbarObj.home}>
          <h4>Home</h4>
        </a>
        <a class="navItem" href={navbarObj.buyers}>
          <h4>Buyers</h4>
        </a>
        <a class="navItem" href={navbarObj.signInLogin}>
          <h4>SignUp/LogIn</h4>
        </a>
      </div>
    </div>
  </>
  )
}

export default Navbar