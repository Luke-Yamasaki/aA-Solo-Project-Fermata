import React, { useState } from "react";
import * as sessionActions from "../../../store/session";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import "./Input.css";

export function LoginInput() {
    const [credential, setCredential] = useState("");
}
