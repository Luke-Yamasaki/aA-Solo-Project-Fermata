import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./Login.css";

export function Login() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <>
      <div className="wrapper">
        <div className="form-wrapper">
          <div className="illustration-container">
            <div className="glass-card">
              <h1 className="form-header">Fermata</h1>
              <h2 className="form-h2">Share and discover Creative Commons Zero music!</h2>
              <p className="form-p">As the world's largest music and audio platform, SoundCloud lets people discover and enjoy the greatest selection of music from the most diverse creator community on earth. Since launching in 2008, the platform has become renowned for its unique content and features, including the ability to share music and connect directly with artists, as well as unearth breakthrough tracks, raw demos, podcasts and more. </p>
              <div className="cc0"></div>
              <p className="form-q">Don't have an account?<a className="sign-up"href="/signup">Sign up</a> </p>
            </div>
        </div>
        <form className="login-container" onSubmit={handleSubmit}>
          <ul className="login-error-list">
            {errors.map((error, idx) => (
              <li className="login-error-item" key={idx}>{error}</li>
            ))}
          </ul>
          <h1 className="login-header">Login</h1>
          <label className="login-label">
            Username or Email
            <input
              className="login-input"
              type="text"
              value={credential}
              placeholder="Enter username or email"
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label className="login-label">
            Password
            <input
              className="login-input"
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className="login-button" type="submit">Log In</button>
        </form>
      </div>
    </div>
    <div className="ball">
      <svg width="440" height="140" xmlns="http://www.w3.org/2000/svg">
        <filter id="lightMe1">
          <feDiffuseLighting in="SourceGraphic" result="light" lighting-color="white">
          <fePointLight x="150" y="60" z="20" />
          </feDiffuseLighting>
          <feComposite in="SourceGraphic" in2="light" operator="arithmetic" k1="1" k2="0" k3="0" k4="0"/>
        </filter>
        <circle cx="170" cy="80" r="50" fill="green" filter="url(#lightMe1)" />
      </svg>
    </div>
  </>
  );
}

export default Login;
