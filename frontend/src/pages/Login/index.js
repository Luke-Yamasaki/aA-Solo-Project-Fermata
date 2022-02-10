import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";

export function Login() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const userCancelBtn = document.getElementsByClassName('lgn-user-cancel-btn')[0];
  const pwrdCancelBtn = document.getElementsByClassName('lgn-pwrd-cancel-btn')[0];
  const userInput = document.getElementsByClassName('lgn-user-login-input')[0];
  const pwrdInput = document.getElementsByClassName('lgn-pwrd-login-input')[0];
  const userLabelDiv = document.getElementsByClassName('lgn-user-label-div')[0];
  const pwrdLabelDiv = document.getElementsByClassName('lgn-pwrd-label-div')[0];
  const userLabel = document.getElementsByClassName('lgn-user-label')[0];
  const pwrdLabel = document.getElementsByClassName('lgn-pwrd-label')[0];

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
    if(userInput.value.length > 0) {
      userCancelBtn.style.opacity = '100%'
    }
  }

  const pwrdKeyUp = (e) => {
    // e.preventDefault();
    if(pwrdInput.value.length > 0) {
      return pwrdCancelBtn.style.opacity = '100%'
    }
  }

  const userFocus = (e) => {
    if(userInput.value.length > 0) {
      userCancelBtn.style.opacity = '100%'
    }
    userLabelDiv.style.backgroundImage = 'linear-gradient(rgba(200, 125, 255, 1), rgba(120, 60, 220, 1));'
    userLabel.style.color = "white";
    return
  }

  const pwrdFocus = (e) => {
    if(pwrdInput.value.length > 0) {
      return pwrdCancelBtn.style.opacity = '100%'
    }
  }

  const userBlur = (e) => {
    e.stopPropagation();
    userCancelBtn.style.opacity='0%';
    userInput.style.border = '1px solid black';
  }

  const pwrdBlur = (e) => {
    pwrdCancelBtn.style.opacity='0%';
    pwrdInput.style.border = '1px solid black';
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
    pwrdInput.type = 'text';
  }

  const hide = () => {
    pwrdInput.type = 'password';
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
          <div className="lgn-input-box">
            <div className="lgn-label-div">
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
          <div className="lgn-input-box">
            <div className="lgn-label-div">
              <label className="lgn-pwrd-label">Password</label>
            </div>
            <input
              className="lgn-pwrd-login-input"
              type="password"
              value={password}
              placeholder="Enter password"
              autocomplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyUp={(e) => pwrdKeyUp(e)}
              onfocus={(e) => pwrdFocus(e)}
              onblur={(e) => pwrdBlur(e)}
              required
            />
            <div className="lgn-pwrd-cancel-btn" onClick={() => pwrdClear()}></div>
            <div className="lgn-show-pwrd-btn" onClick={() => visible()}></div>
            <div className="lgn-hide-pwrd-btn" onClick={() => hide()}></div>
          </div>
        </div>
        <button className="lgn-login-button" type="submit">Log In</button>
      </form>
    </>
  );
}

export default Login;
