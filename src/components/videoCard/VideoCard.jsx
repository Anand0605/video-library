import React, { useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import './VideoCard.css'
// import play from '../../images/play-button.png'

const VideoCard = ({ video }) => {
    const [image, setImage] = useState(video.image)

    return (
        <div className="video-card">
            <div className="thumbnail" onMouseOver={() => setImage(<AiFillPlayCircle />)} onMouseOut={() => setImage(video.image)} >
                {video.image && <img src={image} alt="" />}
            </div>
            <div className="video-description">
                <h3>{video.title}</h3>
                <p>{video.creator}</p>
                {video.videoLink && <a href={video.videoLink}>link</a>}
            </div>
        </div>
    )
}

export default VideoCard