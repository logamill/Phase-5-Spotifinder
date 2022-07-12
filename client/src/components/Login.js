import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import '../styles/signup.scss';
import Errors from "./Errors";

export default function Login({ onLogin }) {
  const history = useHistory();
  const [errors, setErrors] = useState([]);

  // const [errors, setErrors] = useState([]);
  const handleLogin = async (e) => {
    e.preventDefault();
    let form = new FormData(document.querySelector(`#signup-form`));
    let response = await fetch(`/login`, {
      method: `POST`,
      body: form,
    });
    if (response.ok) {
      let user = await response.json();
      if(!user.spotify_id) {
        history.push('/spotify/login')}
      history.push(`/profile`);
      onLogin(user);
    } else {
      response.json().then((err) => setErrors(err.errors));
    }
  };

  return (
    <div className="login">
      <form className="form" id="signup-form" onSubmit={handleLogin}>
        <h2 className="modal-title"></h2>
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Username"
            required
            id="name"
            name="username"
          />
          <label for="name" class="form__label">
            Username
          </label>
        </div>
        <div className="form__group">
          <input
            type="password"
            className="form__input"
            placeholder="Password"
            id="password"
            name="password"
          />
          <label for="password" class="form__label">
            Password
          </label>
        </div>

        <div className="form__group">
          <button className="form__btn-text">Log in &rarr;</button>
        </div>
        {errors !== [] ? <Errors props={errors} /> : null }
      </form>
    </div>
  );
}
