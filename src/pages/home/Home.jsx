import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <>
            <div className="main-gallery">
                <div className="main-page"
                >   <div className="go-to-video"><Link to='/gallary'><button>Go To Video Gallery</button></Link>
                    </div>
                </div>
            </div>
            <div className="heading"> <h2>Indian Cricket player Life Journey (Male & Female)</h2>
            </div>
            <div className="player-deatils">
                <div className="gallery1"><a href="https://en.wikipedia.org/wiki/MS_Dhoni#:~:text=13%20External%20links-,Early%20life%20and%20background,the%20Almora%20District%20of%20Uttarakhand."><button className='btn' type="button">M S Dhoni</button></a></div>
                <div className="gallery2"><a href="https://en.wikipedia.org/wiki/Virat_Kohli"><button className='btn' type="button">Virat Kohli</button></a></div>
                <div className="gallery3"><a href="https://en.wikipedia.org/wiki/K._L._Rahul"><button className='btn' type="button">Kl Rahul</button></a></div>
                <div className="gallery4"><a href="https://en.wikipedia.org/wiki/Rohit_Sharma"><button className='btn' type="button">Rohit Sharma</button></a></div>
                <div className="gallery5"><a href="https://en.wikipedia.org/wiki/Mithali_Raj"><button className='btn' type="button">Mithali Raj</button></a></div>
                <div className="gallery6"><a href="https://en.wikipedia.org/wiki/Smriti_Mandhana"><button className='btn' type="button">Smriti Mandhana</button></a></div>
                <div className="gallery7"><a href="https://en.wikipedia.org/wiki/Harmanpreet_Kaur"><button className='btn' type="button">Harman Preet Kaur</button></a></div>
                <div className="gallery8"><a href="https://en.wikipedia.org/wiki/Harleen_Deol"><button className='btn' type="button">Harleen Deol</button></a></div>


            </div>


            <Footer />
        </>
    )
}

export default Home