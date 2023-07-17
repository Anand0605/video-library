import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useGlobalAuth } from "./authContext";

const videoContext = createContext()

const VideoProvider = ({ children }) => {
    const { notifyWarn, notifySuccess } = useGlobalAuth()

    const [allVideos, setAllVidoes] = useState([])
    const [likedData, setLikedData] = useState([])
    // const [deleteData, setDeleteData] = useState([])
    const [watchData, setWatchData] = useState([])
    const [history, setHistory] = useState([])


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
    const getAllLikesData = async () => {
        const encodedToken = localStorage.getItem("userToken")
        try {
            const { data } = await axios.get('/api/user/likes', { headers: { authorization: encodedToken }, })
            setLikedData(data.likes)
            console.log(data.likes)

        } catch (err) {
            console.log(err)
        }

    }
    const postLikedVideo = async (video) => {
        const encodedToken = localStorage.getItem("userToken")
        try {
            const { data } = await axios.post('/api/user/likes', { video: video }, { headers: { authorization: encodedToken }, })
            console.log("likesd", data)
            setLikedData(data.likes)
            notifySuccess('Video Liked')
            // console.log(likedData)

        } catch (err) {
            console.log(err)
        }
    }


    /*dislikedVideo*/
    const deleteVideo = async (videoId) => {
        const encodedToken = localStorage.getItem("userToken")
        try {
            const { data } = await axios.delete(`/api/user/likes/${videoId}`, { headers: { authorization: encodedToken }, })
            console.log("dislike", data)
            setLikedData(data.likes)
            notifySuccess('Video Disliked')
        } catch (err) {
            console.log(err)
        }
    }

    /*watchalter*/
    const watchLaterVideo = async (video) => {
        const encodedToken = localStorage.getItem("userToken")
        try {
            const { data } = await axios.post('/api/user/watchlater', { video: video }, { headers: { authorization: encodedToken }, })
            console.log(data.watchlater)
            console.log(watchData)

        } catch (err) {
            console.log(err)
        }
    }
    /* Delete watchLater*/
    // const deleteWatch = async (videoId) => {
    //     const encodedToken = localStorage.getItem("userToken")
    //     try {
    //         const { data } = await axios.delete(`/api/user/watchlater/${videoId}`, { headers: { authorization: encodedToken }, })
    //         console.log("delete", data)
    //         setWatchData(data.watchlater)
    //         notifySuccess('Video Disliked')
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    const allHistory = async (video) => {
        const encodedToken = localStorage.getItem("userToken")
        try {
            const { data } = await axios.post('/api/user/history', { video: video }, { headers: { authorization: encodedToken }, })
            console.log(data.history)
            setHistory(data.history)
            // console.log(history)

        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        fetchVideos()

    }, [])



    return (
        <videoContext.Provider value={{ allHistory, history, deleteVideo, watchLaterVideo, watchData, likedData, allVideos, postLikedVideo }}>
            {children}
        </videoContext.Provider>
    )
}

const useGlobalVideos = () => useContext(videoContext)

export { VideoProvider, useGlobalVideos };