import React, { useState } from 'react';
import './LoginSignUp.css';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';


const LoginSignUp = () => {
    const [action, setAction] = useState("Form"); {/*This is where we perform action. It's currently on Sign UP which means Login btn is grayy */}
    return (
        <div className="container">

            <div className="header">
                <div className="text"> {action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
            {/*If action is Login, we hide the name input by creating empty div, else show everything */}
            {action === "Login"? <div></div> :
                <div className="input">
                    <FaUser className='icon' />
                    <input type="text" placeholder='Name'/>
                </div>
            }

                <div className="input">
                    <FaEnvelope className='icon' />
                    <input type="email" placeholder='Email'/>
                </div>

                <div className="input">
                    <FaLock className='icon' />
                    <input type="password" placeholder='Password'/>
                </div> 

            </div>
            
            <div className='submit-container'>
            {/*Dynamic btn change: if action is Login, change Sign Up btn to gray, else do nothing */}
            {/*Dynamic btn change: if action is Sign Up, change Login btn to gray, else do nothing */}

                <button className={action === "Login"? "submit gray": "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
                <button className={action === "Sign Up"? "submit gray":"submit"} onClick={() => {setAction("Login")}}>Login </button>
            </div>

            {action === "Sign Up"?<div></div>:<div className='forgot-password'>Lost Password? <span>Click Here</span></div>}
        </div>

    )
}
export default LoginSignUp; 