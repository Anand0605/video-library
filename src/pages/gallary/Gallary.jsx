import React from 'react'
// import { Gallary } from 'react-router-dom'
// import VideoCard from '../../components/videoCard/VideoCard;
import './Gallary.css'

const Gallary = () => {
    return (
        <>
            <div className="main-gallery">
                <div className="gallery1"></div>
                <div className="gallery2">
                    <div className="go-to-video"><button>Go To Video Gallery</button></div>
                </div>
                <div className="gallery3"></div>
            </div>
        </>
    )
}

export default Gallary