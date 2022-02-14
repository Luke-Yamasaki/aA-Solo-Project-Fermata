import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Upload from "./pages/Upload";
import Settings from "./pages/Settings";
import Tracks from "./pages/Tracks";

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
      <Route path="/tracks">
        <Navbar isLoaded={isLoaded} />
        <Tracks />
      </Route>
      <Route path="/users/:id">
        <Navbar isLoaded={isLoaded} />
        <Settings />
      </Route>
    </Switch>
  )
};

export default App;
