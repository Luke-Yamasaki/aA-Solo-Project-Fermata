import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import "./UploadForm.css";

export function UploadForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState(null);
  const [image, setImage] = useState(null);
  const [musicFile, setMusicFile] = useState(null);
  const [errors, setErrors] = useState([]);

  const userCancelBtn = document.getElementsByClassName('lgn-user-cancel-btn')[0];
  const pwrdCancelBtn = document.getElementsByClassName('lgn-pwrd-cancel-btn')[0];
  const userInput = document.getElementsByClassName('lgn-user-login-input')[0];
  const pwrdInput = document.getElementsByClassName('lgn-pwrd-login-input')[0];
  const userLabelDiv = document.getElementsByClassName('lgn-user-label-div')[0];
  const pwrdLabelDiv = document.getElementsByClassName('lgn-pwrd-label-div')[0];
  const userLabel = document.getElementsByClassName('lgn-user-label')[0];
  const pwrdLabel = document.getElementsByClassName('lgn-pwrd-label')[0];
  const loginBtn = document.getElementsByClassName('lgn-login-btn')[0];
  const eye = document.getElementsByClassName('lgn-show-pwrd-btn')[0];

  if(sessionUser) return (
    <Redirect to="/" />
  );

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

  const userKeyUp = (e) => {
    // e.preventDefault();
    userCancelBtn.style.opacity = '100%'
    userInput.value.length && pwrdInput.value.length ? loginBtn.style.opacity = "100%" : loginBtn.style.opacity = "25%";

  }

  const pwrdKeyUp = (e) => {
    // e.preventDefault();
    pwrdCancelBtn.style.opacity = '100%'
    userInput.value.length && pwrdInput.value.length ? loginBtn.style.opacity = "100%" : loginBtn.style.opacity = "25%";

  }

  const userFocus = (e) => {
    userLabelDiv.style.backgroundImage = 'linear-gradient(rgba(200, 125, 255, 1), rgba(120, 60, 220, 1))';
    userLabelDiv.style.width = '130px';
    userLabel.style.color = "white";
    userLabel.style.letterSpacing = "0.5px";
    userCancelBtn.style.marginTop = "-32px"
    userLabel.style.backgroundColor = "rgba(255, 255, 255, 0)";
    userInput.style.border = '5px solid rgba(200, 125, 255, 1)'
    userInput.style.height = "40px"
    if(userInput.value.length > 0) userCancelBtn.style.opacity = '100%'
    return
  }

  const pwrdFocus = (e) => {
    pwrdLabelDiv.style.backgroundImage = 'linear-gradient(rgba(200, 125, 255, 1), rgba(120, 60, 220, 1))';
    pwrdLabelDiv.style.width = '130px';
    pwrdLabel.style.color = "white";
    pwrdLabel.style.letterSpacing = "0.5px";
    pwrdLabel.style.backgroundColor = "rgba(255, 255, 255, 0)";
    pwrdInput.style.border = '5px solid rgba(200, 125, 255, 1)'
    pwrdInput.style.height = "40px"
    if(pwrdInput.value.length > 0) {
      pwrdCancelBtn.style.opacity = '100%'
    }
    return
  }

  const userBlur = (e) => {
    e.stopPropagation();
    userLabelDiv.style.backgroundImage = 'none';
    userLabelDiv.style.background = 'white';
    userLabel.style.color = 'black';
    userInput.style.border = '1px solid black';
    userCancelBtn.style.marginTop = "-29px"
    if(userInput.value.length === 0) userCancelBtn.style.opacity='0%';
  }

  const pwrdBlur = (e) => {
    e.stopPropagation();
    pwrdLabelDiv.style.backgroundImage = 'none';
    pwrdLabelDiv.style.background = 'white';
    pwrdLabel.style.color = 'black';
    pwrdInput.style.border = '1px solid black';
    pwrdCancelBtn.style.marginTop = "-29px"
    if(pwrdInput.value.length === 0) pwrdCancelBtn.style.opacity='0%';
  }

  const userClear = () => {
    setCredential('');
    return userCancelBtn.style.opacity = '0%';
  }

  const pwrdClear = () => {
    setPassword('');
    return pwrdCancelBtn.style.opacity = '0%';
  }

  const visible = () => {
    if(!showPassword){
      setShowPassword(true);
      eye.style.opacity = "100%";
      pwrdInput.type = "text";
    } else {
      setShowPassword(false);
      eye.style.opacity = "50%";
      pwrdInput.type = "password";
    }
    return
  }

  return (
    <>
      <form className="lgn-login-container" onSubmit={handleSubmit}>
        <h1 className="lgn-login-header">Login</h1>
        <ul className="lgn-login-error-list">
          {errors.map((error, idx) => (
            <li className="lgn-login-error-item" key={idx}>{error}</li>
          ))}
        </ul>
        <div className="lgn-input-container">
          <div className="lgn-user-input-box">
            <div className="lgn-user-label-div" onFocus={(e) => userFocus(e)}>
              <label className="lgn-user-label">Username or Email </label>
            </div>
            <input
                className="lgn-user-login-input"
                type="text"
                value={credential}
                placeholder="Enter username or email"
                autoComplete="username"
                onChange={(e) => setCredential(e.target.value)}
                onKeyUp={(e) => userKeyUp(e)}
                onFocus={(e) => userFocus(e)}
                onBlur={(e) => userBlur(e)}
                required
              />
            <div className="lgn-user-cancel-btn" onClick={() => userClear()}></div>
          </div>
          <div className="lgn-pwrd-input-box">
            <div className="lgn-pwrd-label-div">
              <label className="lgn-pwrd-label">Password</label>
            </div>
            <input
              className="lgn-pwrd-login-input"
              type="password"
              value={password}
              placeholder="Enter password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyUp={(e) => pwrdKeyUp(e)}
              onFocus={(e) => pwrdFocus(e)}
              onBlur={(e) => pwrdBlur(e)}
              required
            />
            <div className="lgn-pwrd-cancel-btn" onClick={() => pwrdClear()}></div>
            <div className="lgn-show-pwrd-btn" onClick={() => visible()}></div>
          </div>
        </div>
        <button className="lgn-login-btn" type="submit">Log In</button>
      </form>
    </>
  );
}

export default LoginForm;

<form
        className="lgn-login-container"
        onSubmit={handleSubmit}
      >
        <label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <input type="file" onChange={updateFile} />
        </label>
        {/* <label>
            Multiple Upload
            <input
              type="file"
              multiple
              onChange={updateFiles} />
          </label> */}
        <button type="submit">Create User</button>
      </form>
