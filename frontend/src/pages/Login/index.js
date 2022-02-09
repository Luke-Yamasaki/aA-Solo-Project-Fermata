import React, { useState } from "react";
import * as sessionActions from "../../store/session";
console.log(sessionActions)
import { useDispatch, useDispatch } from "react-redux";
import "./Login.css";

export function Login() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

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

  return (
    <>
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
  </>
  );
}

export default Login;
