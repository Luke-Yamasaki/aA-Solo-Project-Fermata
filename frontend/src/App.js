import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Signup from "./components/Signup";
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Home from "./components/Home";
import Discover from "./components/Discover";
import Upload from "./components/Upload";
import Users from "./components/Users";
import Settings from "./components/Settings";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/discover">
            <Discover />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/albums">
            <Albums />
          </Route>
          <Route path="/tracks">
            <Tracks />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
