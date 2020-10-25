import React from "react";
import { connect } from "react-redux";
import Loading from "./Loading";

// components
import Send from "./Send";
function ChatPage({ channel, messeges, msgList }) {
  if (messeges.length === 0) return (
    <>
      <Loading />
      <div className="container text-center">
        <h1> no msgs or hmmm</h1>
        <h3>funny gifs or inspiring code (heba wants a qoute), maybe?</h3>
        <hr></hr>
        <img src="https://media1.tenor.com/images/8c2ba73255de7ca335412ea24838fa87/tenor.gif"></img>
      </div>
    </>
  );

  return (
    <>
      <div className="top_menu">
        <div className="title">
          {channel.name}
          <p> by: {channel.owner}</p>
        </div>
        <div className="container mb-5">{msgList}</div>
        <ul class="messages"></ul>
        <div className="container">
        </div>
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
