import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../styles/profile.scss'
import { useHistory } from 'react-router-dom'
import ProgressBar from './ProgressBar';
import CompareCardArtist from '../components/CompareCardArtist'

function Profile({ user }) {
    const history = useHistory(); 

    if (!user.spotify_id){
        history.push('/spotify/login')
    } else if (user.spotify_id && user.tracks.length < 20 || user.artists.length < 20) {
        history.push('/declined')}

        
    const artistsToDisplay = user.artists.map((el, i) => {
        return (
                <CompareCardArtist key={i} index={i} artist={el} />
        )
    });
    const tracksToDisplay = user.tracks.map((el, i) => {
        return (
            <Card key={i} index={i} track={el} />
        )
        });
    return (
        
        <div className='profile'>
            <div>
            <div className='profile-container'>
                <h2>Your Music</h2>
                <h3><span>// Analytics </span></h3>
            </div>
            <div className='analytics-container'>
            <h1>Track Analytics</h1>
            <h2>Visualize your listening habits~</h2>

            <div class="bars">
                <div>
                    <h4>Energy~</h4>
                    <p>Typically, energetic tracks feel fast, loud, and noisy.</p>
                    <ProgressBar data={Math.round(user.energy * 100)} />
                </div>
                <div>
                    <h4>Acousticness~</h4>
                    <p>How acousitc a song is.</p>
                    <ProgressBar data={Math.round(user.acousticness * 100)} />
                </div>
                <div>
                    <h4>Liveness~</h4>
                    <p>Detects the presence of an audience in the recording.</p>
                    <ProgressBar data={Math.round(user.liveness * 100)} />
                </div>
                <div>
                    <h4>Danceability~</h4>
                    <p>How suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.</p>
                    <ProgressBar data={Math.round(user.danceability * 100)} />
                </div>
                <div>
                    <h4>Valence~</h4>
                    <p>Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).</p>
                    <ProgressBar data={Math.round(user.valence * 100)} />
                </div>
                <div>
                    <h4>Popularity~</h4>
                    <p>Higher popularity represents the more popular a song is.</p>
                    <ProgressBar data={user.popularity} />
                </div>            
                </div>
            </div>
            </div>
            <h3>//Top Songs All Time</h3>
            <div className='cards-container'>
                <div>{tracksToDisplay}</div>
                <div>
                    <div className='focus-image'>
                        <img className='focal-image' src={user.tracks[0].image} style={{paddingLeft: '2rem', transform: 'rotate(330deg)'}}></img>
                        <img className='focal-image' src={user.tracks[2].image} style={{paddingRight: '2rem', transform: 'rotate(20deg'}}></img>
                        <img className='focal-image' src={user.tracks[7].image} style={{paddingLeft: '2rem', transform: 'rotate(320deg)'}}></img>
                        <img className='focal-image' src={user.tracks[8].image} style={{paddingRight: '2rem', transform: 'rotate(30deg)'}}></img>
                        <img className='focal-image' src={user.tracks[5].image} style={{paddingLeft: '2rem', transform: 'rotate(330deg)'}}></img>
                        <img className='focal-image' src={user.tracks[18].image} style={{paddingRight: '2rem', transform: 'rotate(20deg)'}}></img>
                    </div>
                </div>
                
            </div>
            
            <div className='artist-header'>
            <h3>// artists </h3>
            </div>
            <div className='artist-container'>
                {artistsToDisplay}
            </div>
        </div>
    )
}

export default Profile;