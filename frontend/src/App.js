import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Upload from "./pages/Upload";
import Users from "./sub-pages/Users";
import Settings from "./pages/Settings";
import Tracks from "./sub-pages/Tracks";
import Albums from "./sub-pages/Albums";
import Player from "./pages/Player";
import Stream from "./pages/Stream";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <Switch>
      <Route exact path="/">
        <Navbar isLoaded={isLoaded} />
        <Home />
      </Route>
      <Route path="/welcome">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/discover">
        <Navbar isLoaded={isLoaded} />
        <Discover />
      </Route>
      <Route path="/upload">
        <Navbar isLoaded={isLoaded} />
        <Upload />
      </Route>
      <Route path="/users">
        <Navbar isLoaded={isLoaded} />
        <Users />
      </Route>
      <Route path="/albums">
        <Navbar isLoaded={isLoaded} />
        <Albums />
      </Route>
      <Route path="/tracks">
        <Navbar isLoaded={isLoaded} />
        <Tracks />
      </Route>
      <Route path="/settings">
        <Navbar isLoaded={isLoaded} />
        <Settings />
      </Route>
      <Route path='/stream'>
        <Navbar isLoaded={isLoaded} />
        <Stream />
      </Route>
    </Switch>
  )
};

export default App;
