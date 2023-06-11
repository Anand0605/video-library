import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="main-gallery">
                <div className="main-page"
                >   <div className="go-to-video"><Link to='/gallary'><button>Go To Video Gallery</button></Link>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <hr />
            <br />
            <h2>Indian Cricket player Details (Male & Female)</h2>
            <br />
            <div className="player-deatils">
                <div className="gallery1"><button className='btn' type="button">M S Dhoni</button></div>
                <div className="gallery2"><button className='btn' type="button">Virat Kohli</button></div>
                <div className="gallery3"><button className='btn' type="button">Kl Rahul</button></div>
                <div className="gallery4"><button className='btn' type="button">Rohit Sharma</button></div>
                <div className="gallery5"><button className='btn' type="button">Mithali Raj</button></div>
                <div className="gallery6"><button className='btn' type="button">Smriti Mandhana</button></div>
                <div className="gallery7"><button className='btn' type="button">Harman Preet Kaur</button></div>
                <div className="gallery8"><button className='btn' type="button">Harleen Deol</button></div>


            </div>


        </>
    )
}

export default Home