import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Dashborad from "./dashboard/";
import Signup from "./welcome/SignupForm";
import Login from "./welcome/LoginForm";
import "./App.css";
import { connect } from "react-redux";
import Welcome from "./welcome/";

function App({ user, channels, messeges }) {
  console.log("user", user);
  console.log("channels", channels);
  console.log("messeges", messeges);
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-auto"></div>
        <div className="content col-10">
          <Switch>
            <Route path="/signup">
              <Signup />
              <Redirect to="/login" />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/dashboard">
              <Dashborad />
            </Route>
            <Route path="/notdiscord">
              <Welcome />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ user, channels, messeges }) => ({
  user,
  channels,
  messeges,
});

export default connect(mapStateToProps)(App);
