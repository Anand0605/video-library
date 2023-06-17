import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const videoContext = createContext()

const VideoProvider = ({ children }) => {

    const [allVideos, setAllVidoes] = useState([])

    const fetchVideos = async () => {
        try {
            const res = await fetch('/api/videos');
            const data = await res.json();
            setAllVidoes(data.videos);
        } catch (err) {
            console.log(err.message);
        }
    }
    const singleVideo = async (videoId) => {
        try {
            const res = await axios.get(`/api/video/${videoId}`)
            console.log(res)
        } catch (err) {
            console.log(err)

        }
    }

    useEffect(() => {
        fetchVideos()
    }, [])

    return (
        <videoContext.Provider value={{ allVideos, singleVideo }}>
            {children}
        </videoContext.Provider>
    )
}

const useGlobalVideos = () => useContext(videoContext)

export { VideoProvider, useGlobalVideos };