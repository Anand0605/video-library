import React, { useEffect } from 'react'
import './Login.css'
import anand from '../../../images/Anand_Gautam.jpg'
import Footer from '../../../components/footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
// import { FaUserAlt } from "react-icons/fa";
import { useGlobalAuth } from '../../../contexts/authContext';

const Login = () => {
  const { loginFunction, logouthandler, userToken, dummyLogin, setLoginInput } = useGlobalAuth();
  const navigate = useNavigate()

  useEffect(() => {
    if (userToken) {
      navigate(-1)
    }
  }, [userToken])

  const loginFormhandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setLoginInput((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <div className="main-login">
        <div className="login">
          <div className="login-page-icon"><img src={anand} alt="" /></div>
          <h1>Log In</h1>
          <p>login here using username and password</p>
          <div className="input-username">

            <input type="text" id='username' name='email' placeholder='@Username' onChange={loginFormhandler} />

            <input type="text" name='password' placeholder='Password' onChange={loginFormhandler} />
            <div className="login-btn">
              <button onClick={loginFunction}>Log In</button>
              <br /><br />
              <button onClick={dummyLogin} className='login-dummy-user'>Login as Dummy User</button>
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
      <Footer />
    </>
  )
}
export default Login;
