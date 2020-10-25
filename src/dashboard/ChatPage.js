import React from "react";
import { connect } from "react-redux";
import Loading from "./Loading";

// components
import Send from "./Send";
function ChatPage({ channel, messeges, msgList }) {
  if (messeges.length === 0) return <Loading />;

  return (
    <>
      <div className="top_menu">
        <div className="title">
          {channel.name}
          <p> by: {channel.owner}</p>
        </div>
        {msgList}
        <ul class="messages"></ul>
        <Send />
      </div>
    </>
  );
}

const mapStateToProps = ({ channelsReducer, messegesReducer }) => {
  return {
    channel: channelsReducer.current_channel,
    messeges: messegesReducer.messeges,
  };
};

export default connect(mapStateToProps)(ChatPage);
