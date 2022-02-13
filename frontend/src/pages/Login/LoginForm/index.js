import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import "./LoginForm.css";

export function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const userCancelBtn = document.getElementsByClassName('lgn-user-cancel-btn')[0];
  const pwrdCancelBtn = document.getElementsByClassName('lgn-pwrd-cancel-btn')[0];
  const userInput = document.getElementsByClassName('lgn-user-login-input')[0];
  const pwrdInput = document.getElementsByClassName('lgn-pwrd-login-input')[0];

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

  const handleDemoUser = (e) => {
    const credential = "Demo-lition";
    const password = "password";
    e.preventDefault();
    return dispatch(sessionActions.login({ credential, password})).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  }

  const userKeyUp = (e) => {
    e.preventDefault();
    userCancelBtn.style.opacity = '100%'
    userInput.value.length && pwrdInput.value.length ? loginBtn.style.opacity = "100%" : loginBtn.style.opacity = "25%";
  }

  const userFocus = (e) => {
    e.preventDefault();

    const userLabelDiv = document.getElementsByClassName('lgn-user-label-div')[0];
    const userLabel = document.getElementsByClassName('lgn-user-label')[0];
    const userCancelBtn = document.getElementsByClassName('lgn-user-cancel-btn')[0];
    const userInput = document.getElementsByClassName('lgn-user-login-input')[0];

    userLabelDiv.style.background = 'linear-gradient(rgba(200, 125, 255, 1), rgba(120, 60, 220, 1))';
    userLabelDiv.style.width = '130px';
    userLabelDiv.style.border = "2px solid black"
    userLabel.style.color = "white";
    userLabel.style.letterSpacing = "0.5px";
    userLabel.style.backgroundColor = "rgba(255, 255, 255, 0)";
    userInput.style.border = '5px solid rgba(200, 125, 255, 1)';
    userInput.style.height = "40px";
    userCancelBtn.style.marginTop = "-32px";
    return
  }

  const pwrdKeyUp = (e) => {
      e.preventDefault();
      pwrdCancelBtn.style.opacity = '100%'
      userInput.value.length && pwrdInput.value.length ? loginBtn.style.opacity = "100%" : loginBtn.style.opacity = "25%";

  }

  const pwrdFocus = (e) => {
    e.preventDefault();

    const pwrdLabelDiv = document.getElementsByClassName('lgn-pwrd-label-div')[0];
    const pwrdLabel = document.getElementsByClassName('lgn-pwrd-label')[0];
    const pwrdCancelBtn = document.getElementsByClassName('lgn-pwrd-cancel-btn')[0];
    const pwrdInput = document.getElementsByClassName('lgn-pwrd-login-input')[0];
    const eye = document.getElementsByClassName('lgn-show-pwrd-btn')[0];

    pwrdLabelDiv.style.backgroundImage = 'linear-gradient(rgba(200, 125, 255, 1), rgba(120, 60, 220, 1))';
    pwrdLabelDiv.style.width = '75px';
    pwrdLabelDiv.style.border = "2px solid black";
    pwrdLabel.style.color = "white";
    pwrdLabel.style.letterSpacing = "0.5px";
    pwrdLabel.style.backgroundColor = "rgba(255, 255, 255, 0)";
    pwrdInput.style.border = '5px solid rgba(200, 125, 255, 1)'
    pwrdInput.style.height = "40px"
    pwrdCancelBtn.style.marginTop = "-32px";
    eye.style.marginTop = "-16px";
    return
  }

  const userBlur = (e) => {
    e.preventDefault();
    const userLabelDiv = document.getElementsByClassName('lgn-user-label-div')[0];
    const userLabel = document.getElementsByClassName('lgn-user-label')[0];
    const userCancelBtn = document.getElementsByClassName('lgn-user-cancel-btn')[0];
    const userInput = document.getElementsByClassName('lgn-user-login-input')[0];
    userLabelDiv.style.background = 'white';
    userLabelDiv.style.border = 'none';
    userLabelDiv.style.width = '120px';
    userLabel.style.color = "black";
    userLabel.style.letterSpacing = "0px";
    userLabel.style.backgroundColor = "white";
    userInput.style.border = '1px solid black';
    userInput.style.borderRadius = '2px';
    userInput.style.height = "40px";
    userCancelBtn.style.marginTop = "-28px";
    if(userInput.value.length === 0) userCancelBtn.style.opacity='0%';
  }

  const pwrdBlur = (e) => {
    e.preventDefault();
    const pwrdLabelDiv = document.getElementsByClassName('lgn-pwrd-label-div')[0];
    const pwrdLabel = document.getElementsByClassName('lgn-pwrd-label')[0];
    const pwrdCancelBtn = document.getElementsByClassName('lgn-pwrd-cancel-btn')[0];
    const pwrdInput = document.getElementsByClassName('lgn-pwrd-login-input')[0];
    const eye = document.getElementsByClassName('lgn-show-pwrd-btn')[0];

    pwrdLabelDiv.style.background = 'white';
    pwrdLabelDiv.style.border = 'none';
    pwrdLabelDiv.style.width = '75px';
    pwrdLabel.style.color = "black";
    pwrdLabel.style.letterSpacing = "0px";
    pwrdLabel.style.backgroundColor = "white";
    pwrdInput.style.border = '1px solid black';
    pwrdInput.style.borderRadius = '2px';
    pwrdInput.style.height = "40px";
    pwrdCancelBtn.style.marginTop = "-28px";
    eye.style.opacity = "25%";
    eye.style.marginTop= "-15px";
    if(pwrdInput.value.length === 0) pwrdCancelBtn.style.opacity='0%';
  }

  const userClear = (e) => {
    e.preventDefault();
    if(credential) {
      setCredential('');
      userCancelBtn.style.opacity = '0%';
      userBlur(e);
    } else {
      userCancelBtn.style.opacity = '100%';
    }
  }

  const pwrdClear = (e) => {
    e.preventDefault();
    if(password) {
      setPassword('');
      pwrdCancelBtn.style.opacity = '0%';
      pwrdBlur(e);
    } else {
      pwrdCancelBtn.style.opacity = '100%';
    }
  }

  const visible = (e) => {
    e.preventDefault();
    if(!showPassword){
      setShowPassword(true);
      eye.style.opacity = "100%";
      pwrdInput.type = "text";
    } else {
      setShowPassword(false);
      eye.style.opacity = "25%";
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
          <div className="lgn-user-input-box" onFocus={(e) => userFocus(e)}>
            <div className="lgn-user-label-div">
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
                onBlur={(e) => userBlur(e)}
                required
              />
            <button className="lgn-user-cancel-btn" onClick={(e) => userClear(e)}></button>
          </div>
          <div className="lgn-pwrd-input-box" onFocus={(e) => pwrdFocus(e)}>
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
              onBlur={(e) => pwrdBlur(e)}
              required
            />
            <button className="lgn-pwrd-cancel-btn" onClick={(e) => pwrdClear(e)}></button>
            <button className="lgn-show-pwrd-btn" onClick={(e) => visible(e)}></button>
          </div>
        </div>
        <div className="lgn-login-demo-container">
          <button className="lgn-login-btn" type="submit">Log In</button>
          <button className="lgn-demo-btn" type="button" onClick={(e) => handleDemoUser(e)}>Demo</button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
