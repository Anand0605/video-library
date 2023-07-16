import React, { useState } from 'react'
import './Navbar.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiFillCloseCircle } from 'react-icons/ai'
// import { useGlobalVideos } from '../../contexts/videoContext';
import anand from '../../images/Anand_Gautam.jpg'
import Navlogo from '../../images/cricket_logo.png'
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useGlobalAuth } from '../../contexts/authContext';
import AccountMenu from '../account-menu/Accountmenu'
// import DehazeIcon from '@mui/icons-material/Dehaze';

function Nav() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const { loginFunction, logouthandler, userToken } = useGlobalAuth();

    return (
        <nav>
            <div className="Nav">
                <div className="leftnav">
                    <img src={Navlogo} alt="" />
                    {/* <DehazeIcon /> */}
                    <Link to='/like'><div className="like">like</div></Link>
                    {/* <Link to='/share'><div className="share">share</div></Link> */}
                    <Link to='/Videosave'><div className="save">save</div></Link>
                    <div className="history">History</div>
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
                            {userToken ? (
                                <AccountMenu />
                            ) : (
                                <NavLink to="/login">
                                    <button
                                        variant="contained"
                                        size="small"
                                        style={{
                                            backgroundColor: "white",
                                            color: "black",
                                            padding: "2px",
                                        }}
                                    >
                                        <p>login</p>
                                    </button>
                                </NavLink>
                            )}


                        </li>
                        <NavLink to="/premium"><button>Premium</button></NavLink>

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
                    {
                        userToken ?
                            <div className="gallery">
                                <img src={anand} alt="" />
                                <h1>Anand Gautam</h1>
                            </div> :
                            <button>login</button>
                    }

                    <br /><br />
                    <hr />
                    <div className="humberger-content">
                        <div className="gallery-content"><br /><br /><br /><br />
                            <Link to="/"><h2>HOME</h2></Link>
                            <br />
                            <Link to="/watchlater"><h2>WATCH LATER</h2></Link><br />
                            <Link to="history"><h2>HISTORY</h2></Link><br />
                            <Link to="likedvideo"><h2>LIKED VIDEO</h2></Link><br />
                            <Link to="trending"><h2>TRENDING</h2></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Nav