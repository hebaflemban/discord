import React from "react";
import { connect } from "react-redux";

// components

function ChatPage({ channel, msgList }) {
  return (
    <div className="border border-primary">
      <h1>{channel.name}</h1>
      <span>owner: {channel.owner}</span>
      {msgList}
    </div>
  );
}

const mapStateToProps = ({ channelsReducer }) => {
  return {
    channel: channelsReducer.current_channel,
  };
};

export default connect(mapStateToProps)(ChatPage);
