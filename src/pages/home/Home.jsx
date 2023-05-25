import React from 'react'
import { useGlobalVideos } from '../../contexts/videoContext'
import Search from '../../components/search/Search'
import VideoCard from '../../components/videoCard/VideoCard'

const Home = () => {

    const { allVideos } = useGlobalVideos()

    return (
        <>
            <Search />
            <div className="main">
                {
                    allVideos.map((video) => (
                        <VideoCard video={video} />
                    ))
                }
            </div>
        </>
    )
}

export default Home