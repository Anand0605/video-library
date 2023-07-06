import React, { useEffect, useState } from 'react'
import './singlepage.css'
import { useParams } from 'react-router-dom';
import loading from '../../images/1487.gif'
import { useGlobalVideos } from '../../contexts/videoContext';
import play from "../../images/play-button3.svg";

const Singlepage = () => {
    const [videoData, setVideoData] = useState()
    const [isLoad, setIsLoad] = useState(false)
    const { allVideos } = useGlobalVideos()
    const { id } = useParams()

    const getVideo = async () => {
        setIsLoad(true)
        try {
            const res = await fetch(`/api/video/${id}`)
            const data = await res.json()
            setVideoData(data.video)
        } catch (err) {
            console.log(err)

        }
        finally {
            setIsLoad(false)
        }
    }
    useEffect(() => {
        getVideo()
    }, [])
    // console.log(videoData)
    // console.log(videoData?.videoLink)


    return (
        <>
            {
                isLoad ?
                    <div className="loading">
                        <img src={loading} alt="" />
                    </div> :
                    <div className="mainsinglepage">
                        <div className="left-singlepage">
                            <div className="left-singlepage-video">
                                <iframe width="950" height="460" src={`https://www.youtube.com/embed/${videoData?.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <h1> {videoData?.title}</h1>
                                <p>{videoData?.creator}</p>

                                <div className="like-btn">
                                    <button className='btn1'>like</button>
                                    <button className='btn1'>share</button>
                                    <button className='btn1'>save</button>
                                </div>

                            </div>
                            <div className="left-singlepage-comments">


                            </div>
                        </div>
                        <div className="right-singlepage">
                            <h2>Suggest Video</h2>

                            {/* <div className="suggest-video">
                                {allVideos.map((video) =>
                                    <div className="suggest-video-video-card">
                                        <a href={video.videoLink}>
                                            <div className=" thumbnail">
                                                <img src={video.image} alt="" style={{ width: '100%' }} />
                                                <div className="thumbnail-img">
                                                    <img className="play" src={play} alt="" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="video-description">
                                            <h3>{video.title}</h3>
                                            <p>{video.creator}</p>
                                            <p>{video.description}</p>
                                            {video.videoLink && <a href={video.videoLink}></a>}
                                        </div>
                                    </div >
                                )}
                            </div> */}

                            <div className="suggest-discription">

                            </div>
                        </div>
                    </div>
            }

        </>

    )
}
export default Singlepage;

