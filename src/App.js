import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

//actions
import {
  addChannel,
  fetchChannels,
  fetchMesseges,
  send,
} from "./redux/actions";

// Components
import Dashborad from "./dashboard/";
import Signup from "./welcome/SignupForm";
import Login from "./welcome/LoginForm";
import Welcome from "./welcome/";

function App({
  channels,
  current_channel,
  messeges,
  addChannel,
  fetchChannels,
  fetchMesseges,
  send,
}) {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-auto"></div>
        <div className="content col-10">
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
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ user, channelsReducer, messeges }) => ({
  user,
  channels: channelsReducer.channels,
  current_channel: channelsReducer.current_channel,
  messeges,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addChannel: (channelName) => dispatch(addChannel(channelName)),
    fetchChannels: () => dispatch(fetchChannels),
    fetchMesseges: () => dispatch(fetchMesseges),
    send: (CHANNEL_ID, messege) => dispatch(send(CHANNEL_ID, messege)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
