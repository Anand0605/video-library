import React from 'react'
import './Forgetpassword.css'

const forgetPassword = () => {
    return (
        <>
            <div className="main-forgetpassword">
                <div className='forget-password-content'> <h2>Password Recover</h2>
                    <input type="text" name="email" placeholder="Email" />
                    <h2>Not Registered ? Sign Up</h2>
                    <h2>Back to Login </h2>
                </div>
            </div>

        </>
    )
}

export default forgetPassword