import React from 'react'
import { useGlobalVideos } from '../../contexts/videoContext'
import Search from '../../components/search/Search'
import VideoCard from '../../components/videoCard/VideoCard'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'

const Gallary = () => {

    const { allVideos, singleVideo } = useGlobalVideos()

    return (
        <>
            <Search />
            <div className="main">
                {
                    allVideos.map((video) => (
                        <VideoCard video={video} onClick={() => singleVideo(
                            video._id
                        )} />
                    ))
                }
            </div>
            <Footer />

        </>
    )
}

export default Gallary