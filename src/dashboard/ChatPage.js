import React from 'react';
import { connect } from 'react-redux';

// components
import MsgList from "./MsgList"
import Send from "./Send"

function ChatPage(props) {
  console.log("*******************")
  console.log(props.channel)
  console.log("*******************")
  return (
    <div className="border border-primary">
      <h1>{props.channel.name}</h1>
      <span>owner: {props.channel.owner}</span>
      <MsgList></MsgList>
      <div>
        <Send></Send>
      </div>
    </div>
  );
}

const mapStateToProps = ({ channelsReducer }) => {
  return {
    channel: channelsReducer.current_channel
  }
}


export default connect(mapStateToProps)(ChatPage);
