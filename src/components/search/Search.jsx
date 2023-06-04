import React from 'react'
import './Search.css'
import { CiSearch } from "react-icons/ci";

const Search = () => {
    return (
        <div className="search" ><br />
            <h1>SPORTS GALLERY</h1>
            <CiSearch style={{ position: 'relative', bottom: '12px', left: '530px' }} />
            <input className='input' type="search" id="site-search" name="search" placeholder='Search'></input>
        </div>
    )
}

export default Search