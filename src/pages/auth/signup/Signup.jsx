import React, { useEffect } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../../components/footer/Footer'
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useGlobalAuth } from "../../../contexts/authContext";

const Signup = () => {

    const { signupFunction, signuplogin, setSignupInput, userToken, signuplogouthandler } = useGlobalAuth();

    const navigate = useNavigate()

    useEffect(() => {
        if (userToken) {
            navigate(-1)
        }
    }, [userToken])

    const signupFormHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setSignupInput((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <>
            <div className="main-signup">
                <div className="signup-content">
                    <h2>Sign Up</h2>
                    <div className="fname">
                        <FaUserAlt className='fname-icon' />
                        <input type="text" name="fname" placeholder='Fullname' onChange={signupFormHandler} />
                    </div>
                    <div className="last">
                        <input type="text" name="Lname" placeholder='Lastname' onChange={signupFormHandler} />
                    </div>
                    <div className="email">
                        <HiOutlineMail className='email-icon' />
                        <input type="text" name="Email" placeholder="Email" onChange={signupFormHandler} />
                    </div>
                    <div className="sign-password">
                        <RiLockPasswordLine className='sign-password-icon' />
                        <input type="text" name="password" placeholder="Password" onChange={signupFormHandler} />
                    </div>
                    <div className="signup-btn-1"><button onClick={signupFunction}>Register</button></div>
                    <h2>Already Registered ? <Link to="/login">Login</Link> </h2>
                    {/* <div className="social-link">
                        <button>Google Login</button>
                        <button>facebook Login</button>
                    </div> */}
                </div>


            </div>
            <Footer />
        </>
    )
}
export default Signup;
