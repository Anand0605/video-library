import React from 'react'
import './Premium.css'
import { Link } from 'react-router-dom'

const Premium = () => {
    return (
        <>
            <Link to="/premium"> <div className="main-premium">
                <h1>Premium video 😎😎</h1>
                {/* <div className="premium-content">

                </div> */}
            </div></Link>
        </>

    )
}
export default Premium;
