import React from 'react'
import './Search.css'
import { CiSearch } from "react-icons/ci";
// import { useState } from 'react';

const Search = ({ setSearchInput }) => {



    return (
        <div className="search" ><br />
            <h1>SPORTS VIDEO GALLERY</h1>
            <div className="search-placeholder">
                <CiSearch className='search-icon' />
                <input type="search" id="site-search" name="search" placeholder='Search' style={{ paddingLeft: '30px' }} onChange={(e) => setSearchInput(e.target.value)}></input>
            </div>
        </div>
    )
}

export default Search