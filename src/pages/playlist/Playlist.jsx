import React from 'react'
import './Playlist.css'
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';

const Playlist = ({ setOpen }) => {
    // const [close, setClose] = useState(false)
    return (
        <>
            <div className='playlist'>
                <div className="playlist-item">
                    <h2>Save To</h2>
                    <div className="cancel-icon" onClick={() => setOpen(false)}>
                        <CancelIcon className='icon-cancel' />
                    </div>
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