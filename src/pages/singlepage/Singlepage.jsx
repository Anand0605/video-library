import React, { useEffect, useState } from 'react'
import './singlepage.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import loading from '../../images/1487.gif'
import { useGlobalVideos } from '../../contexts/videoContext';
// import play from "../../images/play-button3.svg";
import Anandk from '../../images/Anand_Gautam.jpg'
import Input from '@mui/material/Input';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AiFillHeart } from 'react-icons/ai';
import ShareIcon from '@mui/icons-material/Share';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Playlist from '../playlist/Playlist';




const Singlepage = () => {
    const { allHistory, postLikedVideo, watchLaterVideo, } = useGlobalVideos()

    const [videoData, setVideoData] = useState()
    const [isLoad, setIsLoad] = useState(false)
    const [open, setOpen] = useState(false)
    const { allVideos, likedData, deleteVideo, } = useGlobalVideos()
    const { id } = useParams()
    const navigate = useNavigate()





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
    }, [id])
    // console.log(videoData)
    // console.log(videoData?.videoLink)

    const isInLike = (id) => {
        return likedData.some((item) => item._id === videoData._id)
    }



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
                                    <iframe src={`https://www.youtube.com/embed/${videoData?.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <h1> {videoData?.title}</h1>
                                <p>{videoData?.creator}</p>

                                <div className="like-btn">
                                    <button className='btn1' onClick={(() => isInLike(videoData._id) ? deleteVideo(videoData._id) : postLikedVideo(videoData))}>
                                        {
                                            isInLike(videoData?._id) ?
                                                <><AiFillHeart className='liked-icon' /></> :
                                                <><FavoriteIcon /></>
                                        }
                                    </button>
                                    <button className='btn1'><ShareIcon /></button>
                                    <button className='btn1' onClick={() => setOpen(!open)}>


                                        <LibraryAddIcon /></button>
                                </div>
                                {
                                    open && <Playlist setOpen={() => setOpen(false)} />
                                }
                            </div>
                            <hr />
                            <div className="left-singlepage-comments">
                                <h2>Comments</h2>
                                <img src={Anandk} alt="" />
                                <Input placeholder="Add to Comments" />
                                <div className="all-comment">
                                    <div className="comment-account">
                                        <img src={Anandk} alt="" />
                                        <h3>@gautam0510</h3>
                                    </div>
                                    <p>❤️❤️❤️❤️❤️🔥🔥👌👌Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                    <div className="comment-account">
                                        <img src={Anandk} alt="" />
                                        <h3>@gautam0510</h3>
                                    </div>
                                    <p>👌👌👌👌👌Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                    <div className="comment-account">
                                        <img src={Anandk} alt="" />
                                        <h3>@gautam0510</h3>
                                    </div>
                                    <p>👍👍👍Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                    <div className="comment-account">
                                        <img src={Anandk} alt="" />
                                        <h3>@gautam0510</h3>
                                    </div>
                                    <p>🔥🔥🔥🔥Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                    <div className="comment-account">
                                        <img src={Anandk} alt="" />
                                        <h3>@gautam0510</h3>
                                    </div>
                                    <p>❤️❤️❤️Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                    <div className="comment-account">
                                        <img src={Anandk} alt="" />
                                        <h3>@gautam0510</h3>
                                    </div>
                                    <p>❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                    <div className="comment-account">
                                        <img src={Anandk} alt="" />
                                        <h3>@gautam0510</h3>
                                    </div>
                                    <p>❤️❤️❤️❤️❤️Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                    <div className="comment-account">
                                        <img src={Anandk} alt="" />
                                        <h3>@gautam0510</h3>
                                    </div>
                                    <p>❤️🔥🔥👍👍👍👍👍Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                    <div className="comment-account">
                                        <img src={Anandk} alt="" />
                                        <h3>@gautam0510</h3>
                                    </div>
                                    <p>😒😒😍😍😍😍😍Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                    <div className="comment-account">
                                        <img src={Anandk} alt="" />
                                        <h3>@gautam0510</h3>
                                    </div>
                                    <p>😃😃😃😃😃😃Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                    <div className="comment-account">
                                        <img src={Anandk} alt="" />
                                        <h3>@gautam0510</h3>
                                    </div>
                                    <p>😒😒😒😒😒😒❤️❤️❤️Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>
                                    <div className="comment-account">
                                        <img src={Anandk} alt="" />
                                        <h3>@gautam0510</h3>
                                    </div>
                                    <p>😎😎😎😎😎😎😎😎😁😁😁😁😁😁😁😁Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore maxime ipsam quod veniam perspiciatis provident odio iure officiis, earum sint.</p>

                                </div>

                            </div>
                        </div>
                        <div className="right-singlepage">
                            <h2>Suggest Video</h2>

                            <div className="suggest-video">
                                {allVideos.map((video) =>
                                    <div className="suggest-video-video-card" onClick={() => navigate(`/single/${video._id}`)}>

                                        <div className=" thumbnail">
                                            <img src={video.image} alt="" style={{ width: '100%' }} />
                                        </div>
                                        <div className="video-description">
                                            <h3>{video.title}</h3>
                                            <p>{video.creator}</p>
                                            <p>{video.description}</p>
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

