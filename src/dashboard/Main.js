import React, { useState } from "react";
import { connect } from "react-redux";

// components
import ChatPage from "./ChatPage";
import Navbar from "./Navbar";
import Msg from "./Msg";

function Main({ msgs }) {
  const [query, setQeury] = useState("");

  const filterMsgs = () => {
    return msgs.filter((msg) => {
      return (
        `${msg.message}`.toLowerCase().includes(query.toLowerCase()) ||
        `${msg.username}`.toLowerCase().includes(query.toLowerCase())
      );
    });
  };

  let usersInChannel = filterMsgs().map((msg) => msg.username);
  usersInChannel = [...new Set(usersInChannel)];

  const msgList = filterMsgs().map((msg) => (
    <Msg
      key={msg.id + msg.username}
      msgObj={msg}
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
