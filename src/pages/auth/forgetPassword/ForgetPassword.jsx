import React from 'react'
import './ForgetPassword.css'
import { Link } from 'react-router-dom'
import Footer from '../../../components/footer/Footer'
import { AiOutlineMail } from "react-icons/ai";

const forgetPassword = () => {
    return (
        <>
            <div className="main-forgetpassword">
                <div className='forget-password-content'> <h2>Password Recover</h2>
                    <div className="forget">
                        <AiOutlineMail className='forget-icon' />
                        <input type="text" name="email" placeholder="Email" />
                    </div>
                    <button>Submit</button>
                    <h2>Not Registered ? <Link to="/signup">Sign Up</Link></h2>
                    <h2>Back to <Link to="/login">Login</Link> </h2>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default forgetPassword