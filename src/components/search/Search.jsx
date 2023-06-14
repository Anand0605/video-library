import React from 'react'
import './Search.css'
import { CiSearch } from "react-icons/ci";

const Search = () => {
    return (
        <div className="search" ><br />
            <h1>SPORTS VIDEO GALLERY</h1>
            <div className="search-placeholder">
                <CiSearch className='search-icon' />
                <input type="search" id="site-search" name="search" placeholder='Search'></input>
            </div>
        </div>
    )
}

export default Search