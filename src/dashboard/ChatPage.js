import React from "react";
import { connect } from "react-redux";

// components
import MsgList from "./MsgList";

function ChatPage(props) {
  return (
    <div className="border border-primary">
      <h1>{props.channel.name}</h1>
      <span>owner: {props.channel.owner}</span>
      <MsgList></MsgList>
    </div>
  );
}

const mapStateToProps = ({ channelsReducer }) => {
  return {
    channel: channelsReducer.current_channel,
  };
};

export default connect(mapStateToProps)(ChatPage);
