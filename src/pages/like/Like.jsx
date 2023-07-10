import React from 'react'
import './Like.css'
import { useState } from 'react'
import { useEffect } from 'react';
import { useGlobalVideos } from '../../contexts/videoContext';



const Like = () => {
    const { likedData } = useGlobalVideos();
    // console.log(likedData)


    return (
        <>
            <div className="main-like-page">
                <div className="liked-video">
                    {
                        likedData?.map((video) =>
                            <div className="liked-data">
                                <img src={video.image} alt="" />
                                <p>{video.description}</p>
                                <h2>{video.title}</h2>
                                <button>Remove</button>
                            </div>)
                    }


                </div>
            </div>
        </>
    )
}

export default Like