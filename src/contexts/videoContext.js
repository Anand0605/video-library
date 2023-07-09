import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const videoContext = createContext()

const VideoProvider = ({ children }) => {

    const [allVideos, setAllVidoes] = useState([])
    const [likedData, setLikedData] = useState([])
    // const [deleteData, setDeleteData] = useState([])
    // const [watchData, setWatchData] = useState([])


    const fetchVideos = async () => {
        try {
            const res = await fetch('/api/videos');
            const data = await res.json();
            setAllVidoes(data.videos);
        } catch (err) {
            console.log(err.message);
        }
    }
    /* likedVideo */

    const postLikedVideo = async (video) => {
        const encodedToken = localStorage.getItem("userToken")
        try {
            const { data } = await axios.post('/api/user/likes', { video: video }, { headers: { authorization: encodedToken }, })
            console.log(data.likes)
            setLikedData(data.likes)
            // console.log(likedData)

        } catch (err) {
            console.log(err)
        }
    }


    /*dislikedVideo*/
    // const deleteVideo = async (videoId) => {
    //     const encodedToken = localStorage.getItem("userToken")
    //     try {
    //         const { data } = await axios.delete(`/api/user/likes/:videoId`, { video: video }, { headers: { authorization: encodedToken }, })
    //         console.log(data.videoId)
    //         setLikedData(data.videoId)
    //         // console.log(deleteData)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    /*watchalter*/
    const watchLaterVideo = async (video) => {
        const encodedToken = localStorage.getItem("userToken")
        try {
            const { data } = await axios.post('/api/user/watchlater', { video: video }, { headers: { authorization: encodedToken }, })
            console.log(data.watchlater)
            setLikedData(data.watchlater)
            console.log(likedData)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchVideos()


    }, [])



    return (
        <videoContext.Provider value={{ likedData, allVideos, postLikedVideo }}>
            {children}
        </videoContext.Provider>
    )
}

const useGlobalVideos = () => useContext(videoContext)

export { VideoProvider, useGlobalVideos };