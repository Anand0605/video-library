import React from 'react'
import './History.css'
import { useGlobalVideos } from '../../contexts/videoContext'

const History = () => {
    const { history } = useGlobalVideos()

    return (
        <div className='main-history'>

            {
                history.map((video) =>
                    <div className="data">
                        <img src={video.image} alt="" />
                        <h1>{video.title}</h1>
                        <p>{video.description}</p>
                        <button className='delete-video'>Delete</button>
                    </div>
                )
            }
        </div>
    )
}

export default History