import React from 'react'
import { useGlobalVideos } from '../../contexts/videoContext'
import Search from '../../components/search/Search'
import VideoCard from '../../components/videoCard/VideoCard'
import Footer from '../../components/footer/Footer'

const Gallary = () => {

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
            <Footer />

        </>
    )
}

export default Gallary