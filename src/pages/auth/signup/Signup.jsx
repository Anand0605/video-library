import React from 'react'
import './Signup.css'

const Signup = () => {
    return (
        <>
            <div className="main-signup">
                <div className="signup-content">
                    <h2>Sign Up</h2>
                    <input type="text" name="fname" placeholder='Fullname' />
                    <input type="text" name="Email" placeholder="Email" />
                    <input type="text" name="UserId" placeholder='UserId' />
                    <input type="text" name="password" placeholder="Password" />
                    <div className="signup-btn"><button>Sign Up</button></div>
                    <h2>Already Registered ? login</h2>
                    <div className="social-link">
                        <button>Google Login</button>
                        <button>facebook Login</button>
                    </div>
                </div>


            </div>
        </>
    )
}
export default Signup;
