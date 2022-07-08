import React from "react";
import styled from "styled-components";
// import "../styles/spotify_login.scss"
import "../styles/spotify_login.scss"
import { useHistory, Link } from "react-router-dom";
import logo from '../logo.png';

export default function SpotifyLogin({ user }) {
  const history = useHistory()

  // function handleAuth() {
  //   window.location.reload()
  // }
  if( user.spotify_id ){
    history.push('/profile')
  }
  return (
    <Container>
      <div className="link-container">
    <img
        src={logo}
        alt="spotify"
    />
    <span style={{ color: "white"}}>
        Thanks for connecting your Spotify® account!
        </span>
        <span style={{ color: "white"}}>In order to get your advanced music data - Spotifinder™ needs to load a lot of data. Please connect with the button below!</span>
        <form className="auth-form" method="post">
          <a className="auth-link" href="http://localhost:3000/auth/spotify">Sign in with Spotify</a>
        </form>
        </div>
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: black;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: #1db954;
    color: black;
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }
`;