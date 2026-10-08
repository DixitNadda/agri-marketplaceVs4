import React, { useState } from 'react'
import { FaUser, FaPhone, FaLock } from "react-icons/fa";
import  './LoginSignup.css'

const LoginSignup = () => {

  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [psd, setPassword] = useState("");

  return (
    <>
        <div className="container">
          <h1 className="hero">{action}</h1>
          <form>
          <div className="inputs">
            {action === "Login"? <div></div>: <div className="input">
              <FaUser/>
              <input type="text" placeholder='Name' value={name}
                onChange={(e) => setName(e.target.value)}/><br />
            </div>}
            
            <div className="input">
              <FaPhone />
              <input type="number" placeholder='Phone no.' value={phone}
                onChange={(e) => setPhone(e.target.value)}/><br />
            </div>
            <div className="input">
              <FaLock />
              <input type="password" placeholder='Password' value={psd}
                onChange={(e) => setPassword(e.target.value)}/><br />
            </div>
          </div>
          <div className="submit-container">
            <div className={action === "Login" ? "submit gray" : "submit"} onClick= {()=> {setAction("Sign Up");
              if (name?.trim() && phone?.trim() && psd?.trim()) {
                alert(name +" signed up")
              } else if(action === "Login") {
                alert("Directing to Sign Up.")
              } else {
                alert("Fill all the fields.")
              }
            }}>Sign Up</div>
            <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick= {()=> {setAction("Login");
              if (phone?.trim() && psd?.trim()) {
                alert(phone +" Logged in")
              } else if(action === "Sign Up") {
                alert("Directing to Login.")
              } else {
                alert("Fill all the fields.")
              }
            }}>Login</div>
          </div>
          </form>
        </div>
    </>
  )
}

export default LoginSignup
