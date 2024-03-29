import React, { useState } from 'react'
// import { AiFillPlayCircle } from 'react-icons/ai'
import './VideoCard.css'
import play from '../../images/play-button3.svg'
import { useGlobalVideos } from '../../contexts/videoContext'
import { useNavigate } from 'react-router-dom'
// import { Audio } from 'react-loader-spinner'

const VideoCard = ({ video }) => {
    const { allHistory } = useGlobalVideos()
    const navigate = useNavigate()
    const videoHandler = (video) => {
        navigate(`/single/${video._id}`)
        allHistory(video)
    }
    // const [image, setImage] = useState(video.image)/

    return (
        <div className="video-card" onClick={() => videoHandler(video)}>
            <a href={video.videoLink}>
                <div className="thumbnail">
                    <img src={video.image} alt="" />
                    <div className="thumbnail-img">
                        <img className="play" src={play} alt="" />
                    </div>
                </div>
            </a>
            <div className="video-description">
                <h3>{video.title}</h3>
                <p>{video.creator}</p>
                {video.videoLink && <a href={video.videoLink}></a>}
            </div>
        </div >
    )
}

export default VideoCard;