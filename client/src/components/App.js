import React, { useEffect, useState } from 'react';
import '../styles/app.scss';
import Home from './Home';
import NavBar from './NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SpotifyLogin from './SpotifyLogin';
import Signup from './SignUp';
import Login from './Login';
import Profile from './Profile';
import Compare from './Compare';
import ScrollToTop from './ScrollToTop';
import Declined from './Declined';
import Browse from './Browse';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState([])


  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(!loading);
    }, 2500);
  }, []);

  function onLogin(user) {
    setUser(user);
    setTracks(user.tracks)
  };

  console.log(user)

  return (
    <>
    { loading ? 
      <span class="loader"></span>
      :
    <BrowserRouter>
    <NavBar user={user} setUser={setUser} />
    <ScrollToTop />
    <Switch>
      <Route exact path='/login'>
        <Login onLogin={onLogin}/>
      </Route>
      <Route exact path="/spotify/login">
        <SpotifyLogin user={user} setUser={setUser}/>
      </Route>
      <Route exact path="/profile">
        <Profile user={user} tracks={tracks} setTracks={setTracks} />
      </Route>
      <Route exact path="/compare/:id">
        <Compare user={user} tracks={tracks} />
      </Route>
      <Route exact path="/browse">
        <Browse user={user} />
      </Route>
      {/* <Route exact path="/auth/spotify/callback">
        <Profile user={user} tracks={tracks} setTracks={setTracks} />
      </Route> */}
      <Route exact path="/signup">
        <Signup onLogin={onLogin} />
      </Route>
      <Route exact path="/auth/spotify">
        <Profile user={user} tracks={tracks} setTracks={setTracks} />
      </Route>
      <Route exact path="/declined">
        <Declined user={user} />
      </Route>
      <Route exact path="/">
        <Home user={user}/>
      </Route>
    </Switch>
    </BrowserRouter>
    }
    </>
  );
}

export default App;
