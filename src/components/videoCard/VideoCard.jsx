import React, { useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import './VideoCard.css'
import play from '../../images/play-button-svgrepo-com.svg'

const VideoCard = ({ video }) => {
    // const [image, setImage] = useState(video.image)

    return (
        <div className="video-card">
            <div className="thumbnail"><img src={video.image} alt="" />
                <div className="thumbnail-img">
                    <img className="play" src={play} alt="" />
                </div>
            </div>
            <div className="video-description">
                <h3>{video.title}</h3>
                <p>{video.creator}</p>
                {video.videoLink && <a href={video.videoLink}>link</a>}
            </div>
        </div >
    )
}

export default VideoCard