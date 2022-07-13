import React, { useState } from 'react';
import Card from './Card';
import BarCard from './BarCard';
import '../styles/profile.scss'
import { useHistory } from 'react-router-dom'
import ProgressBar from './ProgressBar';
import TrackCarousel from './TrackCarousel';
import CompareCardArtist from '../components/CompareCardArtist'
import Particles from './Particles';

function Profile({ user }) {
    const history = useHistory(); 
    const [valenceTop, setValenceTop] = useState(true);
    const [acousticnessTop, setAcousticnessTop] = useState(true);
    const [energyTop, setEnergyTop] = useState(true);
    const [popularTop, setPopularityTop] = useState(true);
    const [livenessTop, setLivenessTop] = useState(true);
    const [danceabilityTop, setDanceabilityTop] = useState(true);

    const [tracks, setTracks] = useState(user.tracks)
    const [artists, setArtists] = useState(user.artists)
    const [acousticness, setAcousticness] = useState(user.acousticness)
    const [energy, setEnergy] = useState(user.energy)
    const [valence, setValence] = useState(user.valence)
    const [danceability, setDanceability] = useState(user.danceability)
    const [popularity, setPopularity] = useState(user.popularity)
    const [liveness, setLiveness] = useState(user.liveness)

    if (!user.spotify_id){
        history.push('/spotify/login')
    } else if (user.spotify_id && user.tracks.length < 20 || user.artists.length < 20) {
        history.push('/declined')}


    // functions to set state and render conditionally based on user input
    function allTime() {
        setTracks(user.tracks)
        setArtists(user.artists)
        setAcousticness(user.acousticness)
        setEnergy(user.energy)
        setDanceability(user.danceability)
        setPopularity(user.popularity)
        setLiveness(user.liveness)
        setValence(user.valence)

        document.getElementById('short').classList.remove('chosen')
        document.getElementById('med').classList.remove('chosen')
        document.getElementById('all').classList.add('chosen')
    }

    function medTime() {
        setTracks(user.med_tracks)
        setArtists(user.med_artists)

        setAcousticness(user.acousticness_med)
        setEnergy(user.energy_med)
        setDanceability(user.danceability_med)
        setPopularity(user.popularity_med)
        setLiveness(user.liveness_med)
        setValence(user.valence_med)

        document.getElementById('short').classList.remove('chosen')
        document.getElementById('med').classList.add('chosen')
        document.getElementById('all').classList.remove('chosen')
    }

    function shortTime() {
        setTracks(user.short_tracks)
        setArtists(user.short_artists)

        setAcousticness(user.acousticness_short)
        setEnergy(user.energy_short)
        setDanceability(user.danceability_short)
        setPopularity(user.popularity_short)
        setLiveness(user.liveness_short)
        setValence(user.valence_short)

        document.getElementById('short').classList.add('chosen')
        document.getElementById('med').classList.remove('chosen')
        document.getElementById('all').classList.remove('chosen')
    }

    const artistsToDisplay = artists.map((el, i) => {
        return (
            <CompareCardArtist key={i} index={i} artist={el} />
        )
    });
    const tracksToDisplay = tracks.map((el, i) => {
        return (
            <Card key={i} index={i} track={el} />
        )
        });


    // track details sort logic for barcard display

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


    return (
        
        <div className='profile'>
            <div>
            <div className='profile-container'>
                <h2>Your Music</h2>
                <div className='swap'>
                    <a id='all' className="chosen" onClick={allTime}>all-time</a>
                    <a id='med' onClick={medTime}>~6 months</a>
                    <a id='short' onClick={shortTime}>~4 weeks</a>
                </div>
                <h3><span>// analytics </span></h3>
            </div>
            <div className='analytics-container'>
            {/* <h1> Listening Analytics</h1> */}
            <h2>Visualize your listening habits~</h2>
            <div class="bars">
                <div>
                    <h4>Energy~ <span>  
                        {energyTop ? 
                        <a className="top-btn" onClick={() => setEnergyTop(!energyTop)}>high</a> :
                        <a className="btm-btn" onClick={() => setEnergyTop(!energyTop)}>low</a>}
                        </span>
                        </h4>
                    <p>Typically, energetic tracks feel fast, loud, and noisy.</p>
                    <ProgressBar data={Math.round(energy * 100)} />
                    <div className='top-low-container'>
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
                </div>
                <div>
                    <h4>Acousticness~ <span>
                    {acousticnessTop ? 
                        <a className="top-btn" onClick={() => setAcousticnessTop(!acousticnessTop)}>high</a> :
                        <a className="btm-btn" onClick={() => setAcousticnessTop(!acousticnessTop)}>low</a>}                        
                    </span></h4>
                    <p>How acousitc a song is.</p>
                    <ProgressBar data={Math.round(acousticness * 100)} />
                    <div className='top-low-container'>
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
                </div>
                <div>
                    <h4>Liveness~ <span>
                    {livenessTop ? 
                        <a className="top-btn" onClick={() => setLivenessTop(!livenessTop)}>high</a> :
                        <a className="btm-btn" onClick={() => setLivenessTop(!livenessTop)}>low</a>}                        
                    </span></h4>
                    <p>Detects the presence of an audience in the recording.</p>
                    <ProgressBar data={Math.round(liveness * 100)} />
                    <div className='top-low-container'>
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
                </div>
                <div>
                    <h4>Danceability~ <span>
                    {danceabilityTop ? 
                        <a className="top-btn" onClick={() => setDanceabilityTop(!danceabilityTop)}>high</a> :
                        <a className="btm-btn" onClick={() => setDanceabilityTop(!danceabilityTop)}>low</a>}
                        </span></h4>
                    <p>How suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.</p>
                    <ProgressBar data={Math.round(danceability * 100)} />
                    <div className='top-low-container'>
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
                </div>
                <div>
                    <h4>Valence~ <span>
                    {valenceTop ? 
                        <a className="top-btn" onClick={() => setValenceTop(!valenceTop)}>high</a> :
                        <a className="btm-btn" onClick={() => setValenceTop(!valenceTop)}>low</a>}
                        </span></h4>
                    <p>Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).</p>
                    <ProgressBar data={Math.round(valence * 100)} />
                    <div className='top-low-container'>
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
                </div>
                <div>
                    <h4>Popularity~ <span>
                    {popularTop ? 
                        <a className="top-btn" onClick={() => setPopularityTop(!popularTop)}>high</a> :
                        <a className="btm-btn" onClick={() => setPopularityTop(!popularTop)}>low</a>}
                        </span></h4>
                    <p>Higher popularity represents the more popular a song is.</p>
                    <ProgressBar data={popularity} />
                    <div className='top-low-container'>
                    { popularTop ? 
                        popularityTracks.slice(0,3).map((el, i) => {
                            return (
                            <div className='top'>   
                                <BarCard key={i} index={i} track={el} number={el.popularity / 100}/>
                            </div>)
                        })
                        :
                      popularityTracks.reverse().slice(0,3).map((el, i) => {
                            return (
                            <div className='low'>
                                <BarCard key={i} index={i} track={el} number={el.popularity / 100}/>
                            </div>)
                        })}
                        </div>
                </div>            
                </div>
            </div>
            </div>
            <h3 id="top-songs">// top 20 tracks</h3>

            <div className='carousel'>
                <TrackCarousel data={tracks}/>
            </div>

            {/* <h3 id="top-songs">// tracks</h3> */}
            {/* <div className='cards-container'>
                <div>{tracksToDisplay}</div>
                <div>
                    <div className='focus-image'>
                        <img className='focal-image' src={tracks[0].image} style={{paddingLeft: '2rem', transform: 'rotate(330deg)'}}></img>
                        <img className='focal-image' src={tracks[2].image} style={{paddingRight: '2rem', transform: 'rotate(20deg'}}></img>
                        <img className='focal-image' src={tracks[7].image} style={{paddingLeft: '2rem', transform: 'rotate(320deg)'}}></img>
                        <img className='focal-image' src={tracks[8].image} style={{paddingRight: '2rem', transform: 'rotate(30deg)'}}></img>
                        <img className='focal-image' src={tracks[5].image} style={{paddingLeft: '2rem', transform: 'rotate(330deg)'}}></img>
                        <img className='focal-image' src={tracks[18].image} style={{paddingRight: '2rem', transform: 'rotate(20deg)'}}></img>
                    </div>
                </div>
                
            </div> */}
            
            <div className='artist-header'>
            <h3>// top 20 artists </h3>
            </div>
                 <div className='carousel'>
                    <TrackCarousel data={artists}/>
                </div>
            {/* <div className='artist-container'>
                {artistsToDisplay}
            </div> */}
        </div>
    )
}

export default Profile;