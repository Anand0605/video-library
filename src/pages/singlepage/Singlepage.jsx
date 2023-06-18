import React from 'react'
import './singlepage.css'
import anand from '../../images/Anand_Gautam.jpg'
// import Input from '@mui/material/Input';
// import { ariaLabel } from "../";.
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import msd from '../../images/MS-Dhoni.jpg'

const Singlepage = () => {
    return (
        <>
            <div className="mainsinglepage">
                <div className="left-singlepage">
                    <div className="left-singlepage-video">

                        <button className='btn1'>like</button>
                        <button className='btn1'>share</button>
                        <button className='btn1'>save</button>

                    </div>
                    <div className="left-singlepage-comments">

                    </div>
                </div>
                <div className="right-singlepage">
                    {/* <h2>Suggest Video</h2> */}
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

