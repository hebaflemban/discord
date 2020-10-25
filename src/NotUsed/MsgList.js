import React, { useState } from "react";
import { connect } from "react-redux";

// actions

// components
import Msg from "../dashboard/Msg";
import Loading from "../dashboard/Loading";
// import SearchBar from "./SearchBar";

const MsgList = ({ msgs }) => {
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
      msg={msg}
      usersInChannel={usersInChannel}
      userImg={`profile_${usersInChannel.indexOf(msg.username)}`}
    ></Msg>
  ));

  if (msgs.length === 0) return <Loading />;

  return (
    <div className="border border-warning m-5">
      {/* <SearchBar onChange={setQeury} placeholder="Search for Message" /> */}
      <h1>this is the msg list</h1>
      {msgList}
    </div>
  );
};

const mapStateToProps = ({ messegesReducer, channelsReducer }) => ({
  msgs: messegesReducer.messeges,
});

export default connect(mapStateToProps)(MsgList);
