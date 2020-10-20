import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components

import Signup from "./welcome/SignupForm";
import Login from "./welcome/LoginForm";

const App = () => (
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

export default App;
