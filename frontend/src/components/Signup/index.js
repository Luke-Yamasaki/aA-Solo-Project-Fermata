import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./Signup.css";

export function Signup() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];
    dispatch(sessionActions.signup({ username, email, password, image }))
      .then(() => {
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword('');
        setImage(null);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
      });
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  return(
    <div className="wrapper">
      <div className="form-wrapper">
        <div className="illustration-container">
          <div className="glass-card">
            <h1 className="form-header">Fermata</h1>
            <h2 className="form-h2">Share and discover Creative Commons Zero music!</h2>
            <p className="form-p">As the world's largest music and audio platform, SoundCloud lets people discover and enjoy the greatest selection of music from the most diverse creator community on earth. Since launching in 2008, the platform has become renowned for its unique content and features, including the ability to share music and connect directly with artists, as well as unearth breakthrough tracks, raw demos, podcasts and more. </p>
            <div className="cc0"></div>
            <p className="form-q">Already have an account?<a className="login"href="/signup">Login</a> </p>
          </div>
        </div>
        <form className="login-container" onSubmit={handleSubmit}>
          <ul className="login-error-list">
            {errors.map((error, idx) => (
              <li className="login-error-item" key={idx}>{error}</li>
            ))}
          </ul>
          <h1 className="login-header">Sign up</h1>
          <label className="login-label">
            Username
            <input
              className="login-input"
              type="text"
              value={username}
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <label className="login-label">
            Email
            <input
              className="login-input"
              type="text"
              value={username}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
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
          <label className="login-label">
            Confirm password
            <input
              className="login-input"
              type="password"
              value={confirmPassword}
              placeholder="Enter password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <label className="login-label">
            Upload photo
            <input
              className="login-input"
              type="file"
              placeholder="Select a profile image"
              onChange={updateFile}
            />
          </label>
          <a className="signup-button" href="/">Sign up</a>
        </form>
      </div>
      {sessionUser && (
          <div>
            <h1>{sessionUser.username}</h1>
            <img
              style={{ width: "150px" }}
              src={user.profileImageUrl}
              alt="profile"
            />
          </div>
        )}
    </div>
  );
}

export default Signup;
