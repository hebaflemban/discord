import React from "react";
import { connect } from "react-redux";

// components
import MsgList from "./MsgList";

function ChatPage({ channel }) {
  return (
    <div className="border border-primary">
      <h1>{channel.name}</h1>
      <span>owner: {channel.owner}</span>
      {channel && <MsgList />}
    </div>
  );
}

const mapStateToProps = ({ channelsReducer }) => {
  return {
    channel: channelsReducer.current_channel,
  };
};

export default connect(mapStateToProps)(ChatPage);
