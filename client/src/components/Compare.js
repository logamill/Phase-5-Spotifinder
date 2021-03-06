import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CompareCard from './CompareCard';
import CompareCardArtist from './CompareCardArtist';
import '../styles/compare.scss'
import ProgressBar from './ProgressBar';
import MatchBar from './MatchBar';
import spotify from '../spotifylogo.png';
import logo from '../logo.png';
import TrackCarousel from './TrackCarousel';
import BarCard from './BarCard';


function Compare ( props ) {
    const { user } = props
    const id = +useParams().id

    const [loading, setLoading] = useState(true)
    const [compare, setCompare] = useState([])
    const [valenceTop, setValenceTop] = useState(true);
    const [acousticnessTop, setAcousticnessTop] = useState(true);
    const [energyTop, setEnergyTop] = useState(true);
    const [popularTop, setPopularityTop] = useState(true);
    const [livenessTop, setLivenessTop] = useState(true);
    const [danceabilityTop, setDanceabilityTop] = useState(true);

    const [match, setMatch] = useState(compare.taste)
    const [userMatch, setUserMatch] = useState(user.taste)

    const [tracks, setTracks] = useState([])
    const [artists, setArtists] = useState([])
    const [acousticness, setAcousticness] = useState([])
    const [energy, setEnergy] = useState([])
    const [valence, setValence] = useState([])
    const [danceability, setDanceability] = useState([])
    const [popularity, setPopularity] = useState([])
    const [liveness, setLiveness] = useState([])

    useEffect(() => {
        fetch(`/users/${id}`)
        .then(res => res.json())
        .then(data => {
            setCompare(data);
            setLoading(false);
            setTracks(data.tracks);
            setArtists(data.artists);
            setAcousticness(data.acousticness);
            setEnergy(data.energy);
            setValence(data.valence);
            setDanceability(data.danceability);
            setPopularity(data.popularity);
            setLiveness(data.liveness);
            setMatch(data.taste)
        })
    },[])

    function allTime() {
        setTracks(compare.tracks)
        setArtists(compare.artists)
        setAcousticness(compare.acousticness)
        setEnergy(compare.energy)
        setDanceability(compare.danceability)
        setPopularity(compare.popularity)
        setLiveness(compare.liveness)
        setValence(compare.valence)
        setMatch(compare.taste)
        setUserMatch(user.taste)

        document.getElementById('short').classList.remove('chosen')
        document.getElementById('med').classList.remove('chosen')
        document.getElementById('all').classList.add('chosen')
    }

    function medTime() {
        setTracks(compare.med_tracks)
        setArtists(compare.med_artists)
        setMatch(compare.med_taste)
        setUserMatch(user.med_taste)

        setAcousticness(compare.acousticness_med)
        setEnergy(compare.energy_med)
        setDanceability(compare.danceability_med)
        setPopularity(compare.popularity_med)
        setLiveness(compare.liveness_med)
        setValence(compare.valence_med)

        document.getElementById('short').classList.remove('chosen')
        document.getElementById('med').classList.add('chosen')
        document.getElementById('all').classList.remove('chosen')
    }

    function shortTime() {
        setTracks(compare.short_tracks);
        setArtists(compare.short_artists);
        setMatch(compare.short_taste);
        setUserMatch(user.short_taste);

        setAcousticness(compare.acousticness_short)
        setEnergy(compare.energy_short)
        setDanceability(compare.danceability_short)
        setPopularity(compare.popularity_short)
        setLiveness(compare.liveness_short)
        setValence(compare.valence_short)

        document.getElementById('short').classList.add('chosen')
        document.getElementById('med').classList.remove('chosen')
        document.getElementById('all').classList.remove('chosen')
    }

    // const artistsToDisplay = artists.map((el, i) => {
    //     return (
    //         <CompareCardArtist key={i} index={i} artist={el} />
    //     )
    // });
    // const tracksToDisplay = tracks.map((el, i) => {
    //     return (
    //         <Card key={i} index={i} track={el} />
    //     )
    //     });

    const energyTracks = [...tracks].sort((a, b) => {
        return (a.energy < b.energy) ? 1 :(b.energy < a.energy) ? -1 : 0})

    const livenessTracks = [...tracks].sort((a, b) => {
        return (a.liveness < b.liveness) ? 1 :(b.liveness < a.liveness) ? -1 : 0})

    const danceabilityTracks = [...tracks].sort((a, b) => {
        return (a.danceability < b.danceability) ? 1 :(b.danceability < a.danceability) ? -1 : 0})

    const valenceTracks = [...tracks].sort((a, b) => {
        return (a.valence < b.valence) ? 1 :(b.valence < a.valence) ? -1 : 0})

    const popularityTracks = [...tracks].sort((a, b) => {
        return (a.popularity < b.popularity) ? 1 :(b.popularity < a.popularity) ? -1 : 0})

    const acousticnessTracks = [...tracks].sort((a, b) => {
        return (a.acousticness < b.acousticness) ? 1 :(b.acousticness < a.acousticness) ? -1 : 0})


    let compareData = Math.abs(Math.round(100 - ((Math.max(match, userMatch) - Math.min(match, userMatch)) * 3)))
    // let compareData = 100 - Math.round(((user.taste + compare.taste) / 2))
    return (
        <>
        {
            loading ? 
            <div>loading...</div>
        :
    <div className='compare-header'>
        <div className='header-text'>
        <h2>{compare.name}</h2>
        {/* <h3 className='compare-sub-header'>// + you</h3> */}
        </div>
        <div className='swap'>
                <a id='all' className="chosen" onClick={allTime}>all-time</a>
                <a id='med' onClick={medTime}>~6 months</a>
                <a id='short' onClick={shortTime}>~4 weeks</a>
                </div>
        {/* <span>{props.user.name}</span>
        <span>{compare.name}</span> */}
        <div className='match-conatiner'>
            <div className='compare-container'>
                <div className='self-compare'>
                    <h6>{compare.name}</h6>
                    <img className="compare-image" src={compare.image} />
                </div>
                <div className='compare-bar'>
                    <MatchBar data={compareData} />
                </div>
                <div className='user-compare'>
                    <h6>{user.name}</h6>
                    <img className="compare-image" src={user.image} />
                </div>
            </div>
            <h5>Based off your advanced listening analytics, you and {compare.name} are a {compareData}% match!</h5>
        </div>
        <div>
        <div className='compare-artist-list'>
        <h3 id='artist-header'> // artists</h3>
            <div className='carousel'>
                <TrackCarousel data={artists}/>
            </div>
        </div>
        </div>
        <div className='compare-track-list'>
            <h3 id="tracks-header"> // tracks </h3>
            <div className='carousel'>
                <TrackCarousel data={tracks}/>
            </div>
        </div>
        </div>
        }
        
        <h3 id="analytics-header">// {compare.name}'s analytics</h3>
        <div className='analytics-container'>
            {/* <h1>{compare.name}'s Analytics</h1> */}
            <div class="bars">
                <div>
                    <h4>Energy~<span>
                    {energyTop ? 
                        <a className="top-btn" onClick={() => setEnergyTop(!energyTop)}>high</a> :
                        <a className="btm-btn" onClick={() => setEnergyTop(!energyTop)}>low</a>}
                        </span></h4>
                    <p>Typically, energetic tracks feel fast, loud, and noisy.</p>
                    <ProgressBar data={Math.round(compare.energy * 100)} />
                    { energyTop ? 
                        energyTracks.slice(0,3).map((el, i) => {
                            return (
                            <div className='top'>   
                                <BarCard key={i} index={i} track={el} number={el.energy}/>
                            </div>)
                        })
                        :
                      energyTracks.reverse().slice(0,3).map((el, i) => {
                            return (
                            <div className='low'>
                                <BarCard key={i} index={i} track={el} number={el.energy}/>
                            </div>)
                        })}
                </div>
                <div>
                    <h4>Acousticness~<span>
                    {acousticnessTop ? 
                        <a className="top-btn" onClick={() => setAcousticnessTop(!acousticnessTop)}>high</a> :
                        <a className="btm-btn" onClick={() => setAcousticnessTop(!acousticnessTop)}>low</a>}
                        </span></h4>
                    <p>How acousitc a song is.</p>
                    <ProgressBar data={Math.round(compare.acousticness * 100)} />
                    { acousticnessTop ? 
                        acousticnessTracks.slice(0,3).map((el, i) => {
                            return (
                            <div className='top'>   
                                <BarCard key={i} index={i} track={el} number={el.acousticness}/>
                            </div>)
                        })
                        :
                      acousticnessTracks.reverse().slice(0,3).map((el, i) => {
                            return (
                            <div className='low'>
                                <BarCard key={i} index={i} track={el} number={el.acousticness}/>
                            </div>)
                        })}
                </div>
                <div>
                    <h4>Liveness~ <span>
                    {livenessTop ? 
                        <a className="top-btn" onClick={() => setLivenessTop(!livenessTop)}>high</a> :
                        <a className="btm-btn" onClick={() => setLivenessTop(!livenessTop)}>low</a>}
                        </span></h4>
                    <p>Detects the presence of an audience in the recording.</p>
                    <ProgressBar data={Math.round(compare.liveness * 100)} />
                    { livenessTop ? 
                        livenessTracks.slice(0,3).map((el, i) => {
                            return (
                            <div className='top'>   
                                <BarCard key={i} index={i} track={el} number={el.liveness}/>
                            </div>)
                        })
                        :
                      livenessTracks.reverse().slice(0,3).map((el, i) => {
                            return (
                            <div className='low'>
                                <BarCard key={i} index={i} track={el} number={el.liveness}/>
                            </div>)
                        })}
                </div>
                <div>
                    <h4>Danceability~ <span>
                    {danceabilityTop ? 
                        <a className="top-btn" onClick={() => setDanceabilityTop(!danceabilityTop)}>high</a> :
                        <a className="btm-btn" onClick={() => setDanceabilityTop(!danceabilityTop)}>low</a>}
                        </span></h4>
                    <p>How suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.</p>
                    <ProgressBar data={Math.round(compare.danceability * 100)} />
                    { danceabilityTop ? 
                        danceabilityTracks.slice(0,3).map((el, i) => {
                            return (
                            <div className='top'>   
                                <BarCard key={i} index={i} track={el} number={el.danceability}/>
                            </div>)
                        })
                        :
                      danceabilityTracks.reverse().slice(0,3).map((el, i) => {
                            return (
                            <div className='low'>
                                <BarCard key={i} index={i} track={el} number={el.danceability}/>
                            </div>)
                        })}
                </div>
                <div>
                    <h4>Valence~<span>
                    {valenceTop ? 
                        <a className="top-btn" onClick={() => setValenceTop(!valenceTop)}>high</a> :
                        <a className="btm-btn" onClick={() => setValenceTop(!valenceTop)}>low</a>}
                        </span></h4>
                    <p>Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).</p>
                    <ProgressBar data={Math.round(compare.valence * 100)} />
                    { valenceTop ? 
                        valenceTracks.slice(0,3).map((el, i) => {
                            return (
                            <div className='top'>   
                                <BarCard key={i} index={i} track={el} number={el.valence}/>
                            </div>)
                        })
                        :
                      valenceTracks.reverse().slice(0,3).map((el, i) => {
                            return (
                            <div className='low'>
                                <BarCard key={i} index={i} track={el} number={el.valence}/>
                            </div>)
                        })}
                </div>
                <div>
                    <h4>Popularity~<span>
                    {popularTop ? 
                        <a className="top-btn" onClick={() => setPopularityTop(!popularTop)}>high</a> :
                        <a className="btm-btn" onClick={() => setPopularityTop(!popularTop)}>low</a>}
                        </span></h4>
                    <p>Higher popularity represents the more popular a song is.</p>
                    <ProgressBar data={compare.popularity} />
                    {
                        popularityTracks.slice(0,3).map((el, i) => {
                            return (
                            <BarCard key={i} index={i} track={el} number={el.popularity / 100}/>)
                        })
                    }
                </div>            
                </div>
            </div>
        <div className='follow'>
            <h4>Follow {compare.name} on</h4>
                <a href={compare.url} id='spot-logo'>
                    <img src={spotify} id='spot-logo'></img>
                </a>
            </div>
        </>
    )
};

export default Compare;