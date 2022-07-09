import React from 'react';
import '../styles/declined.scss'
import spotify from '../spotifylogo.png'

function Declined({ user }) {

    console.log(user)
    return (

        <div className='declined-container'>
            <h3>
                Unfortunately you do not have enough Spotify® data at the moment to use Spotifinder™ :(
            </h3>
            <h5>You can retry to link your account or you can continue your Spotify® journey below and get back to us!</h5>         
            <a href='spotify.com' id='spot-logo'>
                <img src={spotify} id='spot-logo'></img>
            </a>
        </div>
    )

}
export default Declined;