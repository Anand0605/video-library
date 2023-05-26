import React from 'react'
import './Search.css'

const Search = () => {
    return (
        <div className="search"><br />
            <h1>SPORTS GALLERY</h1>
            <input className='input' type="search" id="site-search" name="search" placeholder='Search'></input>
        </div>
    )
}

export default Search