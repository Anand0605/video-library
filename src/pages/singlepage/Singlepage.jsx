import React, { useEffect, useState } from 'react'
import './singlepage.css'
import { Link, useParams } from 'react-router-dom';
import loading from '../../images/1487.gif'
import { useGlobalVideos } from '../../contexts/videoContext';
import play from "../../images/play-button3.svg";
import Anandk from '../../images/Anand_Gautam.jpg'
import Input from '@mui/material/Input';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';



const Singlepage = () => {
    const { postLikedVideo, watchLaterVideo } = useGlobalVideos()

    const [videoData, setVideoData] = useState()
    const [isLoad, setIsLoad] = useState(false)
    const { allVideos, likedData, deleteVideo } = useGlobalVideos()
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
                                <div className="iframe">
                                    <iframe width="980px" height="460" src={`https://www.youtube.com/embed/${videoData?.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <h1> {videoData?.title}</h1>
                                <p>{videoData?.creator}</p>

                                <div className="like-btn">
                                    <button className='btn1' onClick={(() => likedData.find((item) => item._id === videoData._id) ? deleteVideo(videoData.videoId) : postLikedVideo(videoData))}><FavoriteIcon />Like</button>
                                    <button className='btn1'><ShareIcon />share</button>
                                    <Link to='/Videosave' onClick={(() => watchLaterVideo(videoData))}><button className='btn1'><LibraryAddIcon />save</button></Link>
                                </div>

                            </div>
                            <hr />
                            <div className="left-singlepage-comments">
                                <h2>Comments</h2>
                                <img src={Anandk} alt="" />
                                <Input placeholder="Add to Comments" />
                                <div className="another">
                                    <img src={Anandk} alt="" />
                                    <h3>@gautam0510</h3>
                                </div>
                                <p>❤️❤️❤️❤️❤️🔥🔥👌👌Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                <div className="another">
                                    <img src={Anandk} alt="" />
                                    <h3>@gautam0510</h3>
                                </div>
                                <p>👌👌👌👌👌Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                <div className="another">
                                    <img src={Anandk} alt="" />
                                    <h3>@gautam0510</h3>
                                </div>
                                <p>👍👍👍Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                <div className="another">
                                    <img src={Anandk} alt="" />
                                    <h3>@gautam0510</h3>
                                </div>
                                <p>🔥🔥🔥🔥Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                <div className="another">
                                    <img src={Anandk} alt="" />
                                    <h3>@gautam0510</h3>
                                </div>
                                <p>❤️❤️❤️Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                <div className="another">
                                    <img src={Anandk} alt="" />
                                    <h3>@gautam0510</h3>
                                </div>
                                <p>❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                <div className="another">
                                    <img src={Anandk} alt="" />
                                    <h3>@gautam0510</h3>
                                </div>
                                <p>❤️❤️❤️❤️❤️Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                <div className="another">
                                    <img src={Anandk} alt="" />
                                    <h3>@gautam0510</h3>
                                </div>
                                <p>❤️🔥🔥👍👍👍👍👍Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                <div className="another">
                                    <img src={Anandk} alt="" />
                                    <h3>@gautam0510</h3>
                                </div>
                                <p>😒😒😍😍😍😍😍Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                <div className="another">
                                    <img src={Anandk} alt="" />
                                    <h3>@gautam0510</h3>
                                </div>
                                <p>😃😃😃😃😃😃Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                <div className="another">
                                    <img src={Anandk} alt="" />
                                    <h3>@gautam0510</h3>
                                </div>
                                <p>😒😒😒😒😒😒❤️❤️❤️Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                <div className="another">
                                    <img src={Anandk} alt="" />
                                    <h3>@gautam0510</h3>
                                </div>
                                <p>😎😎😎😎😎😎😎😎😁😁😁😁😁😁😁😁Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>






                            </div>
                        </div>
                        <div className="right-singlepage">
                            <h2>Suggest Video</h2>

                            <div className="suggest-video">
                                {allVideos.map((video) =>
                                    <div className="suggest-video-video-card">
                                        <a href={video.videoLink}>
                                            <div className=" thumbnail">
                                                <img src={video.image} alt="" style={{ width: '100%' }} />
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
                            </div>

                            <div className="suggest-discription">

                            </div>
                        </div>
                    </div >
            }

        </>

    )
}
export default Singlepage;

