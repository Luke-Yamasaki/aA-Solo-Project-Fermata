import React, { useState } from "react";
import * as userActions from "../../../store/user";
import { Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import "./SettingsForm.css"

export function SettingsForm({sessionUser}) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [image, setImage] = useState(null);


  const [usernameErrors, setUsernameErrors] = useState([]);
  const [emailErrors, setEmailErrors] = useState([]);
  const [pwrdErrors, setPwrdErrors] = useState([]);
  const [confirmPwrdErrors, setConfirmPwrdErrors] = useState([]);
  const [imageErrors, setImageErrors] = useState([]);

  const userCancelBtn = document.getElementsByClassName('set-user-cancel-btn')[0];
  const emailCancelBtn = document.getElementsByClassName('set-email-cancel-btn')[0];
  const pwrdCancelBtn = document.getElementsByClassName('set-pwrd-cancel-btn')[0];
  const confirmPwrdCancelBtn = document.getElementsByClassName('set-confirm-pwrd-cancel-btn')[0];

  const userInput = document.getElementsByClassName('set-user-signup-input')[0];
  const emailInput = document.getElementsByClassName('set-email-signup-input')[0];
  const pwrdInput = document.getElementsByClassName('set-pwrd-signup-input')[0];
  const confirmPwrdInput = document.getElementsByClassName('set-confirm-pwrd-signup-input')[0];

  const saveBtn = document.getElementsByClassName('set-save-btn')[0];

  if(!sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = async (e) => {
    // e.preventDefault();
    if(e.target[4].value !== e.target[7].value) {
      return setConfirmPwrdErrors("Passwords do not match.")
    }
    setUsernameErrors([]);
    setEmailErrors([]);
    setPwrdErrors([]);

    const id = sessionUser.id;

    return dispatch(userActions.update({id, username, email, password, confirmPassword}));
  };

  const clearForm = (e) => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  const userKeyUp = (e) => {
    e.preventDefault();
    userCancelBtn.style.opacity = '100%'
    userInput.value.length && emailInput.value.length && pwrdInput.value.length && confirmPwrdInput.value.length ? saveBtn.style.opacity = "100%" : saveBtn.style.opacity = "25%";
  }

  const userFocus = (e) => {
    e.preventDefault();
    setUsernameErrors([]);
    const userLabelDiv = document.getElementsByClassName('set-user-label-div')[0];
    const userLabel = document.getElementsByClassName('set-user-label')[0];
    const userCancelBtn = document.getElementsByClassName('set-user-cancel-btn')[0];
    const userInput = document.getElementsByClassName('set-user-signup-input')[0];

    userLabelDiv.style.background = 'linear-gradient(rgba(200, 125, 255, 1), rgba(120, 60, 220, 1))';
    userLabelDiv.style.width = '75px';
    userLabelDiv.style.border = "2px solid black"
    userLabel.style.color = "white";
    userLabel.style.letterSpacing = "0.5px";
    userLabel.style.backgroundColor = "rgba(255, 255, 255, 0)";
    userInput.style.border = '5px solid rgba(200, 125, 255, 1)';
    userInput.style.height = "40px";
    userCancelBtn.style.marginTop = "-32px";
    return
  }

  const userBlur = (e) => {
    e.preventDefault();
    const userLabelDiv = document.getElementsByClassName('set-user-label-div')[0];
    const userLabel = document.getElementsByClassName('set-user-label')[0];
    const userCancelBtn = document.getElementsByClassName('set-user-cancel-btn')[0];
    const userInput = document.getElementsByClassName('set-user-signup-input')[0];
    userLabelDiv.style.background = 'white';
    userLabelDiv.style.border = 'none';
    userLabelDiv.style.width = '75px';
    userLabel.style.color = "black";
    userLabel.style.letterSpacing = "0px";
    userLabel.style.backgroundColor = "white";
    userInput.style.border = '1px solid black';
    userInput.style.borderRadius = '2px';
    userInput.style.height = "40px";
    userCancelBtn.style.marginTop = "-28px";
    if(userInput.value.length === 0) userCancelBtn.style.opacity='0%';
  }

  const userClear = (e) => {
    e.preventDefault();
    if(username) {
      setUsername('');
      userCancelBtn.style.opacity = '0%';
      userBlur(e);
    } else {
      userCancelBtn.style.opacity = '100%';
    }
  }

  const emailKeyUp = (e) => {
    e.preventDefault();
    emailCancelBtn.style.opacity = '100%'
    userInput.value.length && emailInput.value.length && pwrdInput.value.length && confirmPwrdInput.value.length ? saveBtn.style.opacity = "100%" : saveBtn.style.opacity = "25%";
  }

  const emailFocus = (e) => {
    e.preventDefault();
    setEmailErrors([]);
    const emailLabelDiv = document.getElementsByClassName('set-email-label-div')[0];
    const emailLabel = document.getElementsByClassName('set-email-label')[0];
    const emailCancelBtn = document.getElementsByClassName('set-email-cancel-btn')[0];
    const emailInput = document.getElementsByClassName('set-email-signup-input')[0];

    emailLabelDiv.style.background = 'linear-gradient(rgba(200, 125, 255, 1), rgba(120, 60, 220, 1))';
    emailLabelDiv.style.width = '50px';
    emailLabelDiv.style.border = "2px solid black"
    emailLabel.style.color = "white";
    emailLabel.style.letterSpacing = "0.5px";
    emailLabel.style.backgroundColor = "rgba(255, 255, 255, 0)";
    emailInput.style.border = '5px solid rgba(200, 125, 255, 1)';
    emailInput.style.height = "40px";
    emailCancelBtn.style.marginTop = "-32px";
    return
  }

  const emailBlur = (e) => {
    e.preventDefault();
    const emailLabelDiv = document.getElementsByClassName('set-email-label-div')[0];
    const emailLabel = document.getElementsByClassName('set-email-label')[0];
    const emailCancelBtn = document.getElementsByClassName('set-email-cancel-btn')[0];
    const emailInput = document.getElementsByClassName('set-email-signup-input')[0];
    emailLabelDiv.style.background = 'white';
    emailLabelDiv.style.border = 'none';
    emailLabelDiv.style.width = '50px';
    emailLabel.style.color = "black";
    emailLabel.style.letterSpacing = "0px";
    emailLabel.style.backgroundColor = "white";
    emailInput.style.border = '1px solid black';
    emailInput.style.borderRadius = '2px';
    emailInput.style.height = "40px";
    emailCancelBtn.style.marginTop = "-28px";
    if(emailInput.value.length === 0) emailCancelBtn.style.opacity='0%';
  }

  const emailClear = (e) => {
    e.preventDefault();
    if(email) {
      setEmail('');
      emailCancelBtn.style.opacity = '0%';
      emailBlur(e);
    } else {
      emailCancelBtn.style.opacity = '100%';
    }
  }

  const pwrdKeyUp = (e) => {
    e.preventDefault();
    pwrdCancelBtn.style.opacity = '100%'
    userInput.value.length && emailInput.value.length && pwrdInput.value.length && confirmPwrdInput.value.length ? saveBtn.style.opacity = "100%" : saveBtn.style.opacity = "25%";
  }

  const pwrdFocus = (e) => {
    e.preventDefault();
    setPwrdErrors([]);
    const pwrdLabelDiv = document.getElementsByClassName('set-pwrd-label-div')[0];
    const pwrdLabel = document.getElementsByClassName('set-pwrd-label')[0];
    const pwrdCancelBtn = document.getElementsByClassName('set-pwrd-cancel-btn')[0];
    const pwrdInput = document.getElementsByClassName('set-pwrd-signup-input')[0];

    pwrdLabelDiv.style.background = 'linear-gradient(rgba(200, 125, 255, 1), rgba(120, 60, 220, 1))';
    pwrdLabelDiv.style.width = '75px';
    pwrdLabelDiv.style.border = "2px solid black"
    pwrdLabel.style.color = "white";
    pwrdLabel.style.letterSpacing = "0.5px";
    pwrdLabel.style.backgroundColor = "rgba(255, 255, 255, 0)";
    pwrdInput.style.border = '5px solid rgba(200, 125, 255, 1)';
    pwrdInput.style.height = "40px";
    pwrdCancelBtn.style.marginTop = "-32px";
    return
  }

  const pwrdBlur = (e) => {
    e.preventDefault();
    const pwrdLabelDiv = document.getElementsByClassName('set-pwrd-label-div')[0];
    const pwrdLabel = document.getElementsByClassName('set-pwrd-label')[0];
    const pwrdCancelBtn = document.getElementsByClassName('set-pwrd-cancel-btn')[0];
    const pwrdInput = document.getElementsByClassName('set-pwrd-signup-input')[0];
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
    if(pwrdInput.value.length === 0) pwrdCancelBtn.style.opacity='0%';
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

  const confirmPwrdKeyUp = (e) => {
    e.preventDefault();
    confirmPwrdCancelBtn.style.opacity = '100%'
    userInput.value.length && emailInput.value.length && pwrdInput.value.length && confirmPwrdInput.value.length ? saveBtn.style.opacity = "100%" : saveBtn.style.opacity = "25%";
  }

  const confirmPwrdFocus = (e) => {
    e.preventDefault();
    setConfirmPwrdErrors([]);
    const confirmPwrdLabelDiv = document.getElementsByClassName('set-confirm-pwrd-label-div')[0];
    const confirmPwrdLabel = document.getElementsByClassName('set-confirm-pwrd-label')[0];
    const confirmPwrdCancelBtn = document.getElementsByClassName('set-confirm-pwrd-cancel-btn')[0];
    const confirmPwrdInput = document.getElementsByClassName('set-confirm-pwrd-signup-input')[0];

    confirmPwrdLabelDiv.style.background = 'linear-gradient(rgba(200, 125, 255, 1), rgba(120, 60, 220, 1))';
    confirmPwrdLabelDiv.style.width = '130px';
    confirmPwrdLabelDiv.style.border = "2px solid black"
    confirmPwrdLabel.style.color = "white";
    confirmPwrdLabel.style.letterSpacing = "0.5px";
    confirmPwrdLabel.style.backgroundColor = "rgba(255, 255, 255, 0)";
    confirmPwrdInput.style.border = '5px solid rgba(200, 125, 255, 1)';
    confirmPwrdInput.style.height = "40px";
    confirmPwrdCancelBtn.style.marginTop = "-32px";
    return
  }

  const confirmPwrdBlur = (e) => {
    e.preventDefault();
    const confirmPwrdLabelDiv = document.getElementsByClassName('set-confirm-pwrd-label-div')[0];
    const confirmPwrdLabel = document.getElementsByClassName('set-confirm-pwrd-label')[0];
    const confirmPwrdCancelBtn = document.getElementsByClassName('set-confirm-pwrd-cancel-btn')[0];
    const confirmPwrdInput = document.getElementsByClassName('set-confirm-pwrd-signup-input')[0];
    confirmPwrdLabelDiv.style.background = 'white';
    confirmPwrdLabelDiv.style.border = 'none';
    confirmPwrdLabelDiv.style.width = '120px';
    confirmPwrdLabel.style.color = "black";
    confirmPwrdLabel.style.letterSpacing = "0px";
    confirmPwrdLabel.style.backgroundColor = "white";
    confirmPwrdInput.style.border = '1px solid black';
    confirmPwrdInput.style.borderRadius = '2px';
    confirmPwrdInput.style.height = "40px";
    confirmPwrdCancelBtn.style.marginTop = "-28px";
    if(confirmPwrdInput.value.length === 0) confirmPwrdCancelBtn.style.opacity='0%';
  }

  const confirmPwrdClear = (e) => {
    e.preventDefault();
    if(confirmPassword) {
      setConfirmPassword('');
      confirmPwrdCancelBtn.style.opacity = '0%';
      confirmPwrdBlur(e);
    } else {
      confirmPwrdCancelBtn.style.opacity = '100%';
    }
  }

  const pwrdVisible = (e) => {
    const pwrdCancelBtn = document.getElementsByClassName('set-pwrd-cancel-btn')[0];
    const pwrdEye = document.getElementsByClassName('set-show-pwrd-btn')[0];
    const pwrdInput = document.getElementsByClassName('set-pwrd-signup-input')[0];
    const pwrdLabelDiv = document.getElementsByClassName('set-pwrd-label-div')[0];
    const pwrdLabel = document.getElementsByClassName('set-pwrd-label')[0];

    e.preventDefault();
    if(!showPassword){
      setShowPassword(true);
      pwrdEye.style.opacity = "100%";
      pwrdInput.type = "text";
      pwrdInput.style.border = "5px solid purple";
      pwrdInput.style.borderRadius = "5px";
      pwrdCancelBtn.style.marginTop = "-32px";
      // pwrdLabelDiv.style.background = "white";
      // pwrdLabelDiv.style.border = "none";
      // pwrdLabel.style.color = "black";
    } else {
      setShowPassword(false);
      pwrdInput.style.border = '5px solid rgba(200, 125, 255, 1)';
      pwrdInput.style.borderRadius = "5px";
      pwrdCancelBtn.style.marginTop = "-32px";
      pwrdEye.style.opacity = "25%";
      pwrdInput.type = "password";
    }
    return
  }

  const confirmPwrdVisible = (e) => {
    const confirmPwrdCancelBtn = document.getElementsByClassName('set-confirm-pwrd-cancel-btn')[0];
    const confirmPwrdEye = document.getElementsByClassName('set-show-confirm-pwrd-btn')[0];
    const confirmPwrdInput = document.getElementsByClassName('set-confirm-pwrd-signup-input')[0];
    const confirmPwrdLabelDiv = document.getElementsByClassName('set-confirm-pwrd-label-div')[0];
    const confirmPwrdLabel = document.getElementsByClassName('set-confirm-pwrd-label')[0];

    e.preventDefault();
    if(!showConfirmPassword){
      setShowConfirmPassword(true);
      confirmPwrdEye.style.opacity = "100%";
      confirmPwrdInput.type = "text";
      confirmPwrdInput.style.border = "5px solid purple";
      confirmPwrdInput.style.borderRadius = "5px";
      confirmPwrdCancelBtn.style.marginTop = "-32px";
    } else {
      setShowConfirmPassword(false);
      confirmPwrdInput.style.border = '5px solid rgba(200, 125, 255, 1)';
      confirmPwrdInput.style.borderRadius = "5px";
      confirmPwrdCancelBtn.style.marginTop = "-32px";
      confirmPwrdEye.style.opacity = "25%";
      confirmPwrdInput.type = "password";
    }
    return
  }

  return (
    <>
      <form className="set-signup-container" onSubmit={handleSubmit}>
        <h1 className="set-signup-header">Settings</h1>
        {/* <ul className="set-signup-error-list">
          {errors.map((error, idx) => (
            <li className="set-signup-error-item" key={idx}>{error}</li>
          ))}
        </ul> */}
        <div className="set-input-container">
          {usernameErrors.length > 0 && (
            <li className="set-username-error">{usernameErrors}</li>
          )}
          <div className="set-user-input-box" onFocus={(e) => userFocus(e)}>
            <div className="set-user-label-div">
              <label className="set-user-label">Username</label>
            </div>
            <input
                className="set-user-signup-input"
                type="text"
                value={username}
                placeholder="Change username"
                autoComplete="username"
                onChange={(e) => setUsername(e.target.value)}
                onKeyUp={(e) => userKeyUp(e)}
                onBlur={(e) => userBlur(e)}
                required
              />
            <button className="set-user-cancel-btn" onClick={(e) => userClear(e)}></button>
          </div>
          {emailErrors.length > 0 && (
            <li className="set-email-error">{emailErrors}</li>
          )}
          <div className="set-email-input-box" onFocus={(e) => emailFocus(e)}>
            <div className="set-email-label-div">
              <label className="set-email-label">Email</label>
            </div>
            <input
                className="set-email-signup-input"
                type="text"
                value={email}
                placeholder="Change Email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                onKeyUp={(e) => emailKeyUp(e)}
                onBlur={(e) => emailBlur(e)}
                required
              />
            <button className="set-email-cancel-btn" onClick={(e) => emailClear(e)}></button>
          </div>
          {pwrdErrors.length > 0 && (
            <li className="set-pwrd-error">{pwrdErrors}</li>
          )}
          <div className="set-pwrd-input-box" onFocus={(e) => pwrdFocus(e)}>
            <div className="set-pwrd-label-div">
              <label className="set-pwrd-label">Password</label>
            </div>
            <input
              className="set-pwrd-signup-input"
              type="password"
              value={password}
              placeholder="Change password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyUp={(e) => pwrdKeyUp(e)}
              onBlur={(e) => pwrdBlur(e)}
              required
            />
            <button className="set-pwrd-cancel-btn" onClick={(e) => pwrdClear(e)}></button>
            <button className="set-show-pwrd-btn" onClick={(e) => pwrdVisible(e)}></button>
          </div>
          {confirmPwrdErrors.length > 0 && (
            <li className="set-confirm-pwrd-error">{confirmPwrdErrors}</li>
          )}
          <div className="set-confirm-pwrd-input-box" onFocus={(e) => confirmPwrdFocus(e)}>
            <div className="set-confirm-pwrd-label-div">
              <label className="set-confirm-pwrd-label">Confirm password</label>
            </div>
            <input
              className="set-confirm-pwrd-signup-input"
              type="password"
              value={confirmPassword}
              placeholder="Confirm password"
              autoComplete="current-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              onKeyUp={(e) => confirmPwrdKeyUp(e)}
              onBlur={(e) => confirmPwrdBlur(e)}
              required
            />
            <button className="set-confirm-pwrd-cancel-btn" onClick={(e) => confirmPwrdClear(e)}></button>
            <button className="set-show-confirm-pwrd-btn" onClick={(e) => confirmPwrdVisible(e)}></button>
          </div>
        </div>
        <div className="set-submit-container">
          <button className="set-cancel-btn" type="button" onClick={(e) => clearForm(e)}>Cancel</button>
          <button className="set-save-btn" type="submit" onClick={(e) => handleSubmit(e)}>Save</button>

        </div>
      </form>
    </>
  );
}

export default SettingsForm;
