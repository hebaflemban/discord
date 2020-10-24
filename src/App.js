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
    <div id="wrapper">
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
  );
}

const mapStateToProps = ({ user, channelsReducer, messegesReducer }) => ({
  user,
  channels: channelsReducer.channels,
  current_channel: channelsReducer.current_channel,
  messeges: messegesReducer.messeges,
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
