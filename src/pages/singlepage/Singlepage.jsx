import React from 'react'
import './singlepage.css'
import anand from '../../images/Anand_Gautam.jpg'
// import Input from '@mui/material/Input';
// import { ariaLabel } from "../";.
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Singlepage = () => {
    return (
        <>
            <div className='mainsinglepage'>
                <div className="mainsinglepage-left">
                    <div className="mainsinglepage-left-video">
                        <div className="mainsinglepage-left-video-icon">
                            <img src={anand} alt="" />
                            <h3>Sports central</h3>
                            <p>3.8M Subscribers</p>
                            <button>Subscribers</button>
                        </div>
                        <div className="like-share-download">
                            <button>👍| 👎</button>
                            <button>Share</button>
                            <button>Clip✂️</button>
                        </div>
                    </div>
                    <div className="mainsinglepage-left-comment">
                        <h2>Comments</h2>
                        <img src={anand} alt="" />
                        {/* <Input placeholder="Placeholder" inputProps={ariaLabel} /> */}
                        {/* <ariaLabel /> */}
                        <TextField className='comment-box' id="standard-basic" label="Standard" variant="standard" placeholder='Add comment' width={1000} />
                        <div className="comments">
                            <img src={anand} alt="" />
                            <p>@anandgautam05 11 day ago <br /> Top class bowling performance❤️❤️❤️❤️❤️</p>

                            {/* <h4>Top class bowling performance❤️❤️❤️❤️❤️</h4> */}
                            {/* <h4>👍 👎</h4> */}
                            {/* <p>Reply</p> */}
                        </div>
                    </div>
                </div>
                <div className="mainsinglepage-right">

                </div>
            </div >
        </>

    )
}
export default Singlepage;

