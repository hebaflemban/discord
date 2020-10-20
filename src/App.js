import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

// Components

import Signup from "./welcome/SignupForm";
import Login from "./welcome/LoginForm";
import "./App.css";
import { connect } from "react-redux";


function App({ user, channels, messeges }) {
  console.log("user", user);
  console.log("channels", channels);
  console.log("messeges", messeges);
return(
  <div id="app" className="container-fluid">
    <div className="row">
      <div className="col-2">
      </div>
      <div className="content col-10">
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Redirect to="/login"/>
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
