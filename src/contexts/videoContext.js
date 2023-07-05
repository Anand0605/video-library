import { createContext, useContext, useEffect, useState } from "react";

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

    useEffect(() => {
        fetchVideos()
    }, [])

    return (
        <videoContext.Provider value={{ allVideos }}>
            {children}
        </videoContext.Provider>
    )
}

const useGlobalVideos = () => useContext(videoContext)

export { VideoProvider, useGlobalVideos };