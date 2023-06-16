import React from 'react'
import './singlepage.css'
import anand from '../../images/Anand_Gautam.jpg'
// import Input from '@mui/material/Input';
// import { ariaLabel } from "../";.
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import msd from '../../images/MS-Dhoni.jpg'

const Singlepage = () => {
    return (
        <>
            <div className='mainsinglepage'>
                <div className="mainsinglepage-left">
                    <div className="mainsinglepage-left-video">
                        <div className="mainsinglepage-left-video-icon">
                            <div className="iframe">
                                {/* <iframe width="900" height="465" src={`https://www.youtube.com/embed/${}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                            </div>
                            {/* <img src={anand} alt="" />
                            <p>Sports central<p>3.8M Subscribers</p></p>
                            <button>Subscribers</button> */}
                        </div>
                        <br />
                        {/* <div className="like-share-download">
                            <button>👍| 👎</button>
                            <button>Share</button>
                            <button>Clip✂️</button>
                        </div> */}
                    </div>
                    <div className="mainsinglepage-left-comment">
                        <h2>Comments</h2>
                        <img src={anand} alt="" />

                        <TextField
                            id="standard-textarea"
                            placeholder="Add comments"
                            multiline
                            variant="standard"
                            style={{ width: "800px", marginLeft: "20px", borderBottom: "1px solid white", color: "white" }}
                        />

                        <div className="comments">
                            <div className="user">
                                <img src={anand} alt="" /><br />
                                <img src={anand} alt="" /><br />
                                <img src={anand} alt="" /><br />
                            </div>
                            <div className="comment-content">
                                <h4>@anandgautam05</h4>
                                <h3>❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️</h3>
                                <h4>@anandgautam05</h4>
                                <h3>❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️</h3>
                                <br />
                                <h4>@anandgautam05</h4>
                                <h3>❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️</h3>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mainsinglepage-right">
                    <div className="msd">
                        {/* <img src={msd} alt="" />
                        <img src={msd} alt="" /> */}
                    </div>
                    <div className="discription">
                        {/* <p>Lorem, ipsum dolor sit amet consectetur</p>
                        <p>Lorem, ipsum dolor sit amet consectetur</p> */}
                    </div>


                </div>
            </div >
        </>

    )
}
export default Singlepage;

