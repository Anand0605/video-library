import React from 'react'
import './Premium.css'
import { Link } from 'react-router-dom'
import Footer from '../../../components/footer/Footer'

const Premium = () => {
    return (
        <>
            <Link to="/premium"> <div className="main-premium">
                <h1>Premium video 😎😎</h1>
                {/* <div className="premium-content">

                </div> */}
            </div></Link>
            <Footer />
        </>

    )
}
export default Premium;
