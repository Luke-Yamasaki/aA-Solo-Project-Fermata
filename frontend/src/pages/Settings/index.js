import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import SettingsForm from "./SettingsForm";

import "./Settings.css";

export function Settings() {
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) return (
        <Redirect to="/login" />
    );

    return (
    <div className="set-wrapper">
        <div className="settings-form-container">
            <SettingsForm sessionUser={sessionUser}/>
        </div>
    </div>
    )
}

export default Settings;
