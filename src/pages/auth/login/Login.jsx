import React from 'react'
import './Login.css'
import anand from '../../../images/Anand_Gautam.jpg'
import { Link } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <div className="main-login">
        <div className="login">
          <div className="login-page-icon"><img src={anand} alt="" /></div>
          <h1>Log In</h1>
          <p>login here using username and password</p>
          <div className="input-username">
            <div className="login-username">
              <input type="text" id='username' name='uname' placeholder='@Username' />
              <div className="login-username-icon">
                <FaUserAlt className='username-icon' />
              </div>
            </div>
            <input type="text" id='password' placeholder='Password' />
            <div className="login-btn">
              <button>Log In</button>
              <br /><br />
              <button className='login-dummy-user'>Login as Dummy User</button>
            </div>
          </div>
          <div className="signup">
            <Link to="/forgetPassword"> <button className='password-forget-btn'>Forget<br /> Password</button></Link>


            <Link to="/signup">
              <button className='signup-btn'>Sign Up</button>
            </Link>



          </div>
        </div>

      </div >
    </>
  )
}
export default Login;
