import React from 'react'
import './Login.css'
import anand from '../../../images/Anand_Gautam.jpg'
import { FaRegUserCircle } from "react-icons/fa";
import { RiKey2Fill } from "react-icons/ri";

const Login = () => {
  return (
    <>
      <div className="main-login">
        <div className="login">
          <div className="login-page-icon"><img src={anand} alt="" /></div>
          <h1>Log In</h1>
          <p>login here using username and password</p>
          <div className="input-username">
            <input iconstart={FaRegUserCircle} type="text" id='username' name='uname' placeholder='@username' />
            <input iconend={RiKey2Fill} type="text" id='password' placeholder='password' />
            <div className="login-btn">
              <button>Log In</button>
            </div>
          </div>
          <div className="signup">
            <button className='password-forget-btn'>Forget<br /> Password</button>
            <button className='signup-btn'>Sign Up</button>
          </div>
        </div>

      </div>
    </>
  )
}
export default Login;
