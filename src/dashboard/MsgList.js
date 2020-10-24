import React, { useState } from "react";
import { connect } from "react-redux";

// actions
import { fetchMesseges } from "../redux/actions";

// components
import Msg from "./Msg";
import Loading from "./Loading";
import SearchBar from "./SearchBar";

const MsgList = (props) => {
  const [query, setQeury] = useState("");
  const msgs = props.msgs;

  // useEffect(() => {
  //   if (id) {
  //     props.fetchMesseges(id);
  //   }
  // }, [id]);
  const filterMsgs = () => {
    return msgs.filter((msg) => {
      return `${msg.message}`.toLowerCase().includes(query.toLowerCase());
    });
  };

  const msgList = filterMsgs().map((msg) => (
    <Msg key={msg.id + msg.username} msg={msg}></Msg>
  ));

  if (msgs.length === 0) return <Loading />;

  return (
    <div className="border border-warning m-5">
      <SearchBar onChange={setQeury} placeholder="Search for Message" />
      <h1>this is the msg list</h1>
      {msgList}
    </div>
  );
};

const mapStateToProps = ({ messegesReducer, channelsReducer }) => ({
  msgs: messegesReducer.messeges,
  channel: channelsReducer.current_channel,
  loading: messegesReducer.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMesseges: (channel_id) => dispatch(fetchMesseges(channel_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MsgList);
