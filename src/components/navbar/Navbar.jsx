import React, { useState } from 'react'
import './Navbar.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useGlobalVideos } from '../../contexts/videoContext';
import anand from '../../images/Anand_Gautam.jpg'
import Navlogo from '../../images/cricket_logo.png'
import { NavLink } from "react-router-dom";

function Nav() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <nav>
            <div className="Nav">
                <div className="leftnav">
                    <img src={Navlogo} alt="" />
                </div>
                <div className="rightnav">
                    <ul>

                        <li>
                            <NavLink to="/">HOME</NavLink>

                        </li>
                        <li>
                            <NavLink to="/gallary">GALLARY</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login"><img src={anand} alt="" /></NavLink>

                        </li>
                        <NavLink to="/gallary"><button>Premium</button></NavLink>

                    </ul>
                    <div className="hamburger" onClick={() => setIsMenuVisible((prev) => !prev)}>
                        <RxHamburgerMenu className='icon' />
                    </div>
                </div>
            </div>
            <div className={`main-manu ${isMenuVisible ? 'menu-visible' : null}`}>
                <div className="left-menu" onClick={() => setIsMenuVisible((prev) => !prev)}></div>
                <div className={`right-menu`}>
                    <span onClick={() => setIsMenuVisible((prev) => !prev)}>
                        <AiFillCloseCircle className='cross-icon' />
                    </span>
                    <div className="gallery">
                        <img src={anand} alt="" />
                        <h1>Anand Gautam</h1>
                    </div>
                    <br /><br />
                    <hr />
                    <div className="humberger-content">
                        <div className="gallery-content"><br /><br /><br /><br />
                            <h2>HOME</h2>
                            <br />
                            <h2>WATCH LATER</h2><br />
                            <h2>HISTORY</h2><br />
                            <h2>LIKED VIDEO</h2><br />
                            <h2>TRENDING</h2>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Nav