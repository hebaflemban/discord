import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { fetchMesseges } from "../redux/actions";

// components
import Msg from "./Msg";

const MsgList = (props) => {
  const [query, setQeury] = useState("");
  const msgs = props.msgs;
  let timerId;

  const filterMsgs = () => {
    return msgs.filter((msg) => {
      return `${msg.message}`.toLowerCase().includes(query.toLowerCase());
    });
  };

  const msgList = filterMsgs().map((msg) => <Msg key={msg.id} msg={msg}></Msg>);

  return (
    <div className="border border-warning m-5">
      <SearchBar onChange={setQeury} placeholder="Search for Message" />
      <h1>this is the msg list</h1>
      {msgList}
    </div>
  );
};

const mapStateToProps = ({ channelsReducer, msgs }) => {
  return {
    current_channel: channelsReducer.current_channel,
    msgs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMesseges: (channel_id) => dispatch(fetchMesseges(channel_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MsgList);
