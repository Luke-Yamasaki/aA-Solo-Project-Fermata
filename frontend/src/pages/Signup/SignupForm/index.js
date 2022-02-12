import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import "./SignupForm.css";

export function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const userCancelBtn = document.getElementsByClassName('sgn-user-cancel-btn')[0];
  const emailCancelBtn = document.getElementsByClassName('sgn-email-cancel-btn')[0];
  const pwrdCancelBtn = document.getElementsByClassName('sgn-pwrd-cancel-btn')[0];
  const confirmPwrdCancelBtn = document.getElementsByClassName('sgn-confirm-pwrd-cancel-btn')[0];

  const userInput = document.getElementsByClassName('sgn-user-signup-input')[0];
  const emailInput = document.getElementsByClassName('sgn-email-signup-input')[0];
  const pwrdInput = document.getElementsByClassName('sgn-pwrd-signup-input')[0];
  const confirmPwrdInput = document.getElementsByClassName('sgn-confirm-pwrd-signup-input')[0];

  const userLabelDiv = document.getElementsByClassName('sgn-user-label-div')[0];
  const emailLabelDiv = document.getElementsByClassName('sgn-email-label-div')[0];
  const pwrdLabelDiv = document.getElementsByClassName('sgn-pwrd-label-div')[0];
  const confirmPwrdLabelDiv = document.getElementsByClassName('sgn-confirm-pwrd-label-div')[0];

  const userLabel = document.getElementsByClassName('sgn-user-label')[0];
  const emailLabel = document.getElementsByClassName('sgn-email-label')[0];
  const pwrdLabel = document.getElementsByClassName('sgn-pwrd-label')[0];
  const confirmPwrdLabel = document.getElementsByClassName('sgn-confirm-pwrd-label')[0];

  const pwrdEye = document.getElementsByClassName('sgn-show-pwrd-btn')[0];
  const confirmEye = document.getElementsByClassName('sgn-show-confirm-pwrd-btn')[0];
  const signupBtn = document.getElementsByClassName('sgn-signup-btn')[0];

  if(sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.signup({ username, email, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const userKeyUp = (e) => {
    e.preventDefault();
    userLabelDiv.style.backgroundImage = 'linear-gradient(rgba(200, 125, 255, 1), rgba(120, 60, 220, 1))';
    userLabelDiv.style.width = '130px';
    userLabel.style.color = "white";
    userLabel.style.letterSpacing = "0.5px";
    userCancelBtn.style.marginTop = "-32px"
    userLabel.style.backgroundColor = "rgba(255, 255, 255, 0)";
    userInput.style.border = '5px solid rgba(200, 125, 255, 1)'
    userInput.style.height = "40px"
    userCancelBtn.style.opacity = '100%'
    userInput.value.length && pwrdInput.value.length ? signupBtn.style.opacity = "100%" : signupBtn.style.opacity = "25%";
    return;
  }

  const emailKeyUp = (e) => {
    e.preventDefault();
    emailLabelDiv.style.backgroundImage = 'linear-gradient(rgba(200, 125, 255, 1), rgba(120, 60, 220, 1))';
    emailLabelDiv.style.width = '130px';
    emailLabel.style.color = "white";
    emailLabel.style.letterSpacing = "0.5px";
    emailCancelBtn.style.marginTop = "-32px"
    emailLabel.style.backgroundColor = "rgba(255, 255, 255, 0)";
    emailInput.style.border = '5px solid rgba(200, 125, 255, 1)'
    emailInput.style.height = "40px"
    emailCancelBtn.style.opacity = '100%'
    emailInput.value.length && pwrdInput.value.length ? signupBtn.style.opacity = "100%" : signupBtn.style.opacity = "25%";
    return
  }

  const pwrdKeyUp = (e) => {
    e.preventDefault();
    pwrdLabelDiv.style.backgroundImage = 'linear-gradient(rgba(200, 125, 255, 1), rgba(120, 60, 220, 1))';
    pwrdLabelDiv.style.width = '130px';
    pwrdLabel.style.color = "white";
    pwrdLabel.style.letterSpacing = "0.5px";
    pwrdCancelBtn.style.marginTop = "-32px"
    pwrdLabel.style.backgroundColor = "rgba(255, 255, 255, 0)";
    pwrdInput.style.border = '5px solid rgba(200, 125, 255, 1)'
    pwrdInput.style.height = "40px"
    pwrdCancelBtn.style.opacity = '100%'
    pwrdInput.value.length && pwrdInput.value.length ? signupBtn.style.opacity = "100%" : signupBtn.style.opacity = "25%";
    return;
  }

  const confirmPwrdKeyUp = (e) => {
    e.preventDefault();
    confirmPwrdLabelDiv.style.backgroundImage = 'linear-gradient(rgba(200, 125, 255, 1), rgba(120, 60, 220, 1))';
    confirmPwrdLabelDiv.style.width = '130px';
    confirmPwrdLabel.style.color = "white";
    confirmPwrdLabel.style.letterSpacing = "0.5px";
    confirmPwrdCancelBtn.style.marginTop = "-32px"
    confirmPwrdLabel.style.backgroundColor = "rgba(255, 255, 255, 0)";
    confirmPwrdInput.style.border = '5px solid rgba(200, 125, 255, 1)'
    confirmPwrdInput.style.height = "40px"
    confirmPwrdCancelBtn.style.opacity = '100%'
    confirmPwrdInput.value.length && pwrdInput.value.length ? signupBtn.style.opacity = "100%" : signupBtn.style.opacity = "25%";
    return;
  }

  const userBlur = (e) => {
    e.stopPropagation();
    userLabelDiv.style.backgroundImage = 'none';
    userLabelDiv.style.background = 'white';
    userLabel.style.color = 'black';
    userInput.style.border = '1px solid black';
    userCancelBtn.style.marginTop = "-29px"
    if(userInput.value.length === 0) userCancelBtn.style.opacity='0%';
    return
  }

  const emailBlur = (e) => {
    e.stopPropagation();
    emailLabelDiv.style.backgroundImage = 'none';
    emailLabelDiv.style.background = 'white';
    emailLabel.style.color = 'black';
    emailInput.style.border = '1px solid black';
    emailCancelBtn.style.marginTop = "-29px"
    if(emailInput.value.length === 0) emailCancelBtn.style.opacity='0%';
    return
  }

  const pwrdBlur = (e) => {
    e.stopPropagation();
    pwrdLabelDiv.style.backgroundImage = 'none';
    pwrdLabelDiv.style.background = 'white';
    pwrdLabel.style.color = 'black';
    pwrdInput.style.border = '1px solid black';
    pwrdCancelBtn.style.marginTop = "-29px"
    if(pwrdInput.value.length === 0) pwrdCancelBtn.style.opacity='0%';
    return
  }

  const confirmPwrdBlur = (e) => {
    e.stopPropagation();
    confirmPwrdLabelDiv.style.backgroundImage = 'none';
    confirmPwrdLabelDiv.style.background = 'white';
    confirmPwrdLabel.style.color = 'black';
    confirmPwrdInput.style.border = '1px solid black';
    confirmPwrdCancelBtn.style.marginTop = "-29px"
    if(confirmPwrdInput.value.length === 0) confirmPwrdCancelBtn.style.opacity='0%';
    return
  }

  const userClear = () => {
    setUsername('');
    return userCancelBtn.style.opacity = '0%';
  }

  const emailClear = () => {
    setEmail('');
    return emailCancelBtn.style.opacity = '0%';
  }

  const pwrdClear = () => {
    setPassword('');
    return pwrdCancelBtn.style.opacity = '0%';
  }

  const confirmPwrdClear = () => {
    setConfirmPassword('');
    return confirmPwrdCancelBtn.style.opacity = '0%';
  }

  const pwrdVisible = () => {
    if(!showPassword){
      setShowPassword(true);
      pwrdEye.style.opacity = "100%";
      pwrdInput.type = "text";
    } else {
      setShowPassword(false);
      pwrdEye.style.opacity = "50%";
      pwrdInput.type = "password";
    }
    return
  }

  const confirmPwrdVisible = () => {
    if(!showConfirmPassword){
      setShowConfirmPassword(true);
      confirmEye.style.opacity = "100%";
      confirmPwrdInput.type = "text";
    } else {
      setShowConfirmPassword(false);
      confirmEye.style.opacity = "50%";
      pwrdInput.type = "password";
    }
    return
  }


  return (
    <>
      <form className="sgn-signup-container" onSubmit={handleSubmit}>
        <h1 className="sgn-signup-header">Signup</h1>
        <ul className="sgn-signup-error-list">
          {errors.map((error, idx) => (
            <li className="sgn-signup-error-item" key={idx}>{error}</li>
          ))}
        </ul>
        <div className="sgn-input-container">
          <div className="sgn-user-input-box">
            <div className="sgn-user-label-div">
              <label className="sgn-user-label">Username</label>
            </div>
            <input
                className="sgn-user-login-input"
                type="text"
                value={username}
                placeholder="Enter username"
                autoComplete="username"
                onChange={(e) => setUsername(e.target.value)}
                onKeyUp={(e) => userKeyUp(e)}
                onBlur={(e) => userBlur(e)}
                required
              />
            <div className="sgn-user-cancel-btn" onClick={() => userClear()}></div>
          </div>
          <div className="sgn-email-input-box">
            <div className="sgn-email-label-div">
              <label className="sgn-email-label">Email</label>
            </div>
            <input
                className="sgn-email-login-input"
                type="text"
                value={email}
                placeholder="Enter Email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                onKeyUp={(e) => emailKeyUp(e)}
                onBlur={(e) => emailBlur(e)}
                required
              />
            <div className="sgn-email-cancel-btn" onClick={() => emailClear()}></div>
          </div>
          <div className="sgn-pwrd-input-box">
            <div className="sgn-pwrd-label-div">
              <label className="sgn-pwrd-label">Password</label>
            </div>
            <input
              className="sgn-pwrd-login-input"
              type="password"
              value={password}
              placeholder="Enter password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyUp={(e) => pwrdKeyUp(e)}
              onBlur={(e) => pwrdBlur(e)}
              required
            />
            <div className="sgn-pwrd-cancel-btn" onClick={() => pwrdClear()}></div>
            <div className="sgn-show-pwrd-btn" onClick={() => pwrdVisible()}></div>
          </div>
          <div className="sgn-confirm-pwrd-input-box">
            <div className="sgn-confirm-pwrd-label-div">
              <label className="sgn-confirm-pwrd-label">Confirm password</label>
            </div>
            <input
              className="sgn-confirm-pwrd-login-input"
              type="password"
              value={confirmPassword}
              placeholder="Confirm password"
              autoComplete="current-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              onKeyUp={(e) => confirmPwrdKeyUp(e)}
              onBlur={(e) => confirmPwrdBlur(e)}
              required
            />
            <div className="sgn-confirm-pwrd-cancel-btn" onClick={() => confirmPwrdClear()}></div>
            <div className="sgn-show-confirm-pwrd-btn" onClick={() => confirmPwrdVisible()}></div>
          </div>
        </div>
        <button className="sgn-signup-btn" type="submit">Signup</button>
      </form>
    </>
  );
}

export default SignupForm;
