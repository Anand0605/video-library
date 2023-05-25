import React, { useState } from 'react'
import './Navbar.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useGlobalVideos } from '../../contexts/videoContext';

function Nav() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <nav>
            <div className="Nav">
                <div className="leftnav">
                    CRICKET
                </div>
                <div className="rightnav">
                    <ul>
                        <li>
                            <a href="">HOME</a>
                        </li>
                        <li>
                            <a href="">GALLERY</a>
                        </li>
                        <li>
                            <a href="">LOG IN</a>
                        </li>
                        <li>
                            <a href="">SIGN UP</a>
                        </li>
                        <button>Premium</button>
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
                        <AiFillCloseCircle />
                    </span>
                    <div className="gallery">
                        <h1>Gallery</h1>
                    </div>
                    <br /><br />
                    <hr />
                    <div className="humberger-content">
                        <div className="gallery-content"><br /><br /><br /><br />
                            <h2>HOME</h2>
                            <br />
                            <h2>GALLERY</h2><br />
                            <h2>LOG IN</h2><br />
                            <h2>SIGN UP</h2>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Nav