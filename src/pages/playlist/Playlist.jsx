import React from 'react'
import './Playlist.css'
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';

const Playlist = () => {
    const [close, setClose] = useState(false)
    return (
        <>
            <div className='playlist'>
                <div className="playlist-item" onClick={() => setClose((prev) => !prev)}>
                    <h2>Save To</h2>
                    <CancelIcon className='icon-cancel' />
                    <div className="check">
                        <label htmlFor="">WatchLater</label>
                        <input className='checkbox' type="checkbox" id='watchlater' name='watchlater' value='watchlater' />

                    </div>
                    <button className='add-playlist'>Add new Playlist</button>


                </div>
            </div>
        </>
    )


}

export default Playlist