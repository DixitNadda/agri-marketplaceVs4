import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Categories from './Components/Categories/Categories'
import LoginSignup from './Components/LoginSignup/LoginSignup'
import Buyers from './Components/Buyers/Buyers';

function App() {

  return (
    <>
      <div id="home">
        <Navbar home="#home" buyers="#buyers" signInLogin="#signUp" />
      </div>
      <Hero />
      <Categories crops="#crops" pesticides="#pesticides" fertilizers="#fertilizers" seeds="#seeds" /> 
      <div id="signUp">
        <LoginSignup/>
      </div>
      <Buyers />
    </>
  )
}

export default App
