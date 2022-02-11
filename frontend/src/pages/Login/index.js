import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "./Login.css";

export function Login() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
        });
    }

    return (
    <div className="wrapper">
        <div className="form-wrapper">
            <div className="illustration-container">
                <div className="glass-card">
                    <h1 className="form-header">Fermata</h1>
                    <h2 className="form-h2">Share and discover Creative Commons Zero music!</h2>
                    <p className="form-p">As the world's largest music and audio platform, SoundCloud lets people discover and enjoy the greatest selection of music from the most diverse creator community on earth. Since launching in 2008, the platform has become renowned for its unique content and features, including the ability to share music and connect directly with artists, as well as unearth breakthrough tracks, raw demos, podcasts and more. </p>
                    <div className="cc0"></div>
                    <p className="form-q">Don't have an account?
                        <a className="sign-up"href="/signup">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login;
