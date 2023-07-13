import React from 'react'
import { useGlobalVideos } from '../../contexts/videoContext'
import Search from '../../components/search/Search'
import VideoCard from '../../components/videoCard/VideoCard'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Gallary = () => {

    const { allVideos, singleVideo } = useGlobalVideos()

    const [searchInput, setSearchInput] = useState('');

    let searchData = allVideos?.filter(({ title }) =>
        title?.includes(searchInput)
    );

    return (
        <>
            <Search searchInput={searchInput} setSearchInput={setSearchInput} />
            <div className="main">
                {
                    searchData.map((video) => (
                        <Link to={`/single/${video._id}`}><VideoCard video={video} /></Link>
                    ))
                }
            </div>
            <Footer />

        </>
    )
}

export default Gallary