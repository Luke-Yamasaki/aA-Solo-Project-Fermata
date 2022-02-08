import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Signup from "./components/Signup";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Home from "./components/Home";
import Discover from "./components/Discover";
import Upload from "./components/Upload";
import Users from "./components/Users";
import Settings from "./components/Settings";
import Tracks from "./components/Tracks";
import Albums from "./components/Albums";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Navigation isLoaded={isLoaded} />
            <Home />
          </Route>
          <Route path="/welcome">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/discover">
            <Navigation isLoaded={isLoaded} />
            <Discover />
          </Route>
          <Route path="/upload">
            <Navigation isLoaded={isLoaded} />
            <Upload />
          </Route>
          <Route path="/users">
            <Navigation isLoaded={isLoaded} />
            <Users />
          </Route>
          <Route path="/albums">
            <Navigation isLoaded={isLoaded} />
            <Albums />
          </Route>
          <Route path="/tracks">
            <Navigation isLoaded={isLoaded} />
            <Tracks />
          </Route>
          <Route path="/settings">
            <Navigation isLoaded={isLoaded} />
            <Settings />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
