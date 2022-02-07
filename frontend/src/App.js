import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

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
            <WelcomePage />
          </Route>
          <Route path="/login">
              <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/discover">
            <Discover />
          </Route>
          <Route path="/upload">
            <UploadFormPage />
          </Route>
          <Route path="/users">
            <ProfilePage />
          </Route>
          <Route path="/albums">
            <Albums />
          </Route>
          <Route path="/tracks">
            <Tracks />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
