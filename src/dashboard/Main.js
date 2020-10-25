import React, { useState } from "react";
import { connect } from "react-redux";

// components
import ChatPage from "./ChatPage";
import Navbar from "./Navbar";
import Send from "./Send";
import Msg from "./Msg";
import Footer from "./Footer";

function Main({ msgs }) {
  const [query, setQeury] = useState("");
  const filterMsgs = () => {
    return msgs.filter((msg) => {
      return `${msg.message}`.toLowerCase().includes(query.toLowerCase());
    });
  };

  let usersInChannel = filterMsgs().map((msg) => msg.username);
  usersInChannel = [...new Set(usersInChannel)];
  const msgList = filterMsgs().map((msg) => (
    <Msg
      key={msg.id + msg.username}
      msgObj={msg}
      usersInChannel={usersInChannel}
      userImg={`profile_${usersInChannel.indexOf(msg.username)}`}
    ></Msg>
  ));
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Navbar onChange={setQeury} />
        <div className="container-fluid" id="chatpage">
          <ChatPage msgList={msgList} />
        </div>
        {/* <Send /> */}
      </div>
    </div>
  );
}

const mapStateToProps = ({ messegesReducer }) => {
  return {
    msgs: messegesReducer.messeges,
  };
};

export default connect(mapStateToProps)(Main);
