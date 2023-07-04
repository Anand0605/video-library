import React, { useEffect, useState } from 'react'
import './singlepage.css'
import { Link, useParams } from 'react-router-dom';
// import msd from '../../images/MS-Dhoni.jpg'

const Singlepage = () => {
    const [videoData, setVideoData] = useState()

    const { id } = useParams()
    console.log(id)
    const getVideo = async () => {
        try {
            const res = await fetch(`/api/video/${id}`)
            const data = await res.json()
            setVideoData(data.video)
        } catch (err) {
            console.log(err)

        }
    }
    useEffect(() => {
        getVideo()
    }, [])
    console.log(videoData)


    return (
        <>
            <div className="mainsinglepage">
                <div className="left-singlepage">
                    <div className="left-singlepage-video">
                        <Link to={videoData?.videoLink}></Link>
                        <img src={videoData?.image} alt="" />
                        <h1> {videoData?.title}</h1>
                        <p>{videoData?.creator}</p>


                        <div className="iframe">
                            {/* <iframe width="560" height="215" src={`https://www.youtube.com/embed/${videoData._id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                        </div>
                        <div className="like-btn">
                            {/* <button className='btn1'>like</button>
                            <button className='btn1'>share</button>
                            <button className='btn1'>save</button> */}
                        </div>
                    </div>
                    <div className="left-singlepage-comments">

                    </div>
                </div>
                <div className="right-singlepage">
                    <h2>Suggest Video</h2>
                    <div className="suggest-video">

                    </div>
                    <div className="suggest-discription">

                    </div>
                </div>
            </div>

        </>

    )
}
export default Singlepage;

