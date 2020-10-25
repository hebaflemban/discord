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
      return (
        `${msg.message}`.toLowerCase().includes(query.toLowerCase()) ||
        `${msg.username}`.toLowerCase().includes(query.toLowerCase())
      );
    });
  };

  let usersInChannel = filterMsgs().map((msg) => msg.username);
  let groupedMsg = [];
  if (msgs.length != 0) {
    groupedMsg = [
      {
        id: msgs[0].id,
        username: msgs[0].username,
        message: [msgs[0].message],
        timestamp: [msgs[0].timestamp],
        channel: msgs[0].channel,
      },
    ];
  }
  usersInChannel = [...new Set(usersInChannel)];
  console.log(groupedMsg);

  for (let i = 0; i < filterMsgs().length - 1; i++) {
    console.log(filterMsgs()[i].username, filterMsgs()[i + 1].username);
    console.log("groupedMsg.slice(-1)", groupedMsg.slice(-1));
    if (filterMsgs()[i].username === filterMsgs()[i + 1].username) {
      groupedMsg.slice(-1)[0].message.push(filterMsgs()[i + 1].message);
      groupedMsg.slice(-1)[0].timestamp.push(filterMsgs()[i + 1].timestamp);
    } else {
      groupedMsg.push({
        id: filterMsgs()[i + 1].id,
        username: filterMsgs()[i + 1].username,
        message: [filterMsgs()[i + 1].message],
        timestamp: [filterMsgs()[i + 1].timestamp],
        channel: filterMsgs()[i + 1].channel,
      });
    }
  }

  console.log(groupedMsg);
  const msgList = groupedMsg.map((msg) => (
    <Msg
      key={msg.id + msg.username}
      msgObj={msg}
      userImg={`profile_${usersInChannel.indexOf(msg.username)}`}
    ></Msg>
  ));
  console.log("msgList", msgList);

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
