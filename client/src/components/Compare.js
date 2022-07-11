import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CompareCard from './CompareCard';
import CompareCardArtist from './CompareCardArtist';
import '../styles/compare.scss'
import ProgressBar from './ProgressBar';
import MatchBar from './MatchBar';
import spotify from '../spotifylogo.png';
import logo from '../logo.png';

function Compare ( props ) {
    const [loading, setLoading] = useState(true)
    const [compare, setCompare] = useState([])
    const id = +useParams().id
    const { user, tracks } = props

    useEffect(() => {
        fetch(`/users/${id}`)
        .then(res => res.json())
        .then(data => {
            setCompare(data)
            setLoading(false)
        })
    },[])

    let compareData = Math.round(100 - ((Math.max(user.taste, compare.taste) - Math.min(user.taste, compare.taste)) * 5))
    // let compareData = 100 - Math.round(((user.taste + compare.taste) / 2))
    return (
        <>
        {
            loading ? 
            <div>loading...</div>
        :
    <div className='compare-header'>
        <div className='header-text'>
        <h2>{compare.name}'s Top Music</h2>
        <h3 className='compare-sub-header'>// + you</h3></div>
        {/* <span>{props.user.name}</span>
        <span>{compare.name}</span> */}
        <div className='match-conatiner'>
            <div className='compare-container'>
                <div className='self-compare'>
                    <h6>// {compare.name}</h6>
                    <img className="compare-image" src={compare.image} />
                </div>
                <div className='compare-bar'>
                    <MatchBar data={compareData} />
                </div>
                <div className='user-compare'>
                    <h6>// {user.name}</h6>
                    <img className="compare-image" src={user.image} />
                </div>
            </div>
            <h5>Based off your advanced listening analytics, you and {compare.name} are a {compareData}% match!</h5>
        </div>
        <div>
        <div className='compare-artist-list'>
        <h3 id='artist-header'> // artists</h3>
            <div className='compare-artist'>{
                compare.artists.slice(0, 10).map((el, i) => {
                    return (
                        <CompareCardArtist key={i} index={i} artist={el} />
                    )
                    })
            }</div>
        </div>
        </div>
        <div className='compare-track-list'>
            <h3 id="tracks-header"> // tracks </h3>
            <div className='compare-track'> {
                compare.tracks.slice(0, 10).map((el, i) => {
                    return (
                        <CompareCard key={i} index={i} track={el} />
                    )
                })}
            </div>
        </div>
        </div>
        }
        
        <h3 id="analytics-header">// analytics</h3>
        <div className='analytics-container'>
            <h1>{compare.name}'s Analytics</h1>
            <div class="bars">
                <div>
                    <h4>Energy~</h4>
                    <p>Typically, energetic tracks feel fast, loud, and noisy.</p>
                    <ProgressBar data={Math.round(compare.energy * 100)} />
                </div>
                <div>
                    <h4>Acousticness~</h4>
                    <p>How acousitc a song is.</p>
                    <ProgressBar data={Math.round(compare.acousticness * 100)} />
                </div>
                <div>
                    <h4>Liveness~</h4>
                    <p>Detects the presence of an audience in the recording.</p>
                    <ProgressBar data={Math.round(compare.liveness * 100)} />
                </div>
                <div>
                    <h4>Danceability~</h4>
                    <p>How suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.</p>
                    <ProgressBar data={Math.round(compare.danceability * 100)} />
                </div>
                <div>
                    <h4>Valence~</h4>
                    <p>Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).</p>
                    <ProgressBar data={Math.round(compare.valence * 100)} />
                </div>
                <div>
                    <h4>Popularity~</h4>
                    <p>Higher popularity represents the more popular a song is.</p>
                    <ProgressBar data={compare.popularity} />
                </div>            
                </div>
            </div>
        <div className='follow'>
            <h4>Like what you see? Follow {compare.name} on ...</h4>
                <a href={compare.url} id='spot-logo'>
                    <img src={spotify} id='spot-logo'></img>
                </a>
            </div>
        </>
    )
};

export default Compare;