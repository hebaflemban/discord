import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

//actions

// Components
import Dashborad from "./dashboard/";
import Signup from "./welcome/SignupForm";
import Login from "./welcome/LoginForm";
import Welcome from "./welcome/";

//

function App({}) {
  return (
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashborad />
      </Route>
      <Route path="/">
        <Welcome />
      </Route>
    </Switch>
  );
}

export default App;
