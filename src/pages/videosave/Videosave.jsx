import React from 'react'
import './Videosave.css'
import { useGlobalVideos } from '../../contexts/videoContext';

const Videosave = () => {
    const { watchData } = useGlobalVideos();

    return (
        <>
            <div className="main-videosave-page">
                {

                    watchData.map((video) =>
                        <div className="watch-data">
                            <img src={video.image} alt="" />
                            <p>{video.description}</p>
                            <h2>{video.title}</h2>
                            <button>Remove</button>

                        </div>)

                }
            </div>
        </>
    )
}

export default Videosave