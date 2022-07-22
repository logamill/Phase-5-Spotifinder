import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Errors from "./Errors";
import Particles from "./Particles";

export default function Signup({ onLogin }) {
  let history = useHistory();
  const [errors, setErrors] = useState([])

  const handleSignup = async (e) => {
    e.preventDefault();
    let form = new FormData(document.querySelector(`#signup-form`));
    if (e.target['password'].value !== e.target['confirmed-password'].value) {
      setErrors(["Passwords do not match"])
    }
    let req = await fetch(`/signup`, {
      method: `POST`,
      body: form,
    });
    if (req.ok) {
      let user = await req.json();
      onLogin(user);
      history.push(`/spotify/login`)
    }else{
      req.json().then((err) => setErrors(err.errors))
    }
  };

  return (
    <div className="login">
      <Particles />
      <h2 className="modal-title"> // sign up</h2>
      <form
        className="form sign-up-form"
        id="signup-form"
        onSubmit={handleSignup}
      >
        <div className="form__group">
          <input
            type="text"
            className="form__input"
            placeholder="Username"
            id="username"
            name="username"
          />
          <label for="username" class="form__label">
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
          <input
            type="password"
            className="form__input"
            placeholder="Confirm password"
            id="confirmed-password"
            name="confirmed-password"
          />
          <label for="confirmed-password" class="form__label">
            Confirm password
          </label>
        </div>
        <div className="form__group">
          <button className="form__btn-text" id="add_new_btn">
            Sign up &rarr;
          </button>
        </div>
        {errors !== [] ? <Errors props={errors} /> : null }
      </form>
    </div>
  );
}
