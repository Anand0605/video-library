import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="main-gallery">
                <div className="gallery1"></div>
                <div className="gallery2">
                    <div className="go-to-video"><Link to='/gallary'><button>Go To Video Gallery</button></Link></div>
                </div>
                <div className="gallery3"></div>
            </div>
        </>
    )
}

export default Home