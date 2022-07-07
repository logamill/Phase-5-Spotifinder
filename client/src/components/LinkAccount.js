// import React, { useState } from 'react';
// import logo from '../spotifinderlogo.png';
// import styled from "styled-components";

// function LinkAccount({user, setUser}) {
//     const [tracks, setTracks] = useState([])

//     function handleClick(){ 
//         fetch('/auth/spotify/callback')
//             .then((res) => {
//                 if(!res.ok) {
//                     throw new Error(res.status);
//                 }
//                 return res.json();
//             })
//             .then((data) => {
//                 console.log(data)
//             })
//             .catch((error) => {
//                 console.log(error)
//             });
//     }
//     return (
//         <Container>
//         <img
//             src={logo}
//             alt="spotify"
//         />
//         <span style={{ color: "white"}}>
//             Thanks for connecting your Spotify® account!
//             </span>
//             <span style={{ color: "white"}}>In order to get your advanced music data - Spotifinder™ needs to load a lot of data. Please connect with the button below!</span>
//         <button onClick={handleClick}>GET DATA </button>
//         </Container>
//   );
// }

// export default LinkAccount;


// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   height: 100vh;
//   width: 100vw;
//   background-color: black;
//   gap: 3rem;
//   img {
//     height: 20vh;
//   }
//   button {
//     padding: 1rem 5rem;
//     border-radius: 5rem;
//     background-color: #1db954;
//     color: black;
//     border: none;
//     font-size: 1.4rem;
//     cursor: pointer;
//   }
// `;