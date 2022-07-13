import React, { useState } from 'react';
import logo from '../logo.png';
import styled from "styled-components";
import '../styles/home.scss'
// import spotify from '../spotify.gif'
import spotifinder from '../logo.gif'
import Particles from './Particles';

function Home({user}) {
    const [tracks, setTracks] = useState([])

        return (
        <div className='home-container'>
            <Particles />
        <Container style={{height: '75vh'}}> 
            <div className='image-container'>
                <img 
                    src={spotifinder}
                    alt='spotify'
                    id='spotify-gif'/>
                <h5>Find what sparks you.</h5>
            </div>
        </Container>
        </div>
  );
}

export default Home;


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: black;
  gap: 3rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: #1db954;
    color: black;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;