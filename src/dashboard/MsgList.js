import React from 'react';
import { connect } from 'react-redux';

// components
import Msg from "./Msg";

const MsgList = (props) => {
  // here sould be a msg loop
  const msgs = props.msgs

  const msgList = msgs.map(msg => (
    <Msg key={msg.id} msg={msg}></Msg>
  ));

  return (
    <div className="border border-warning m-5">
      <h1>this is the msg list</h1>
      {msgList}
    </div>
  );
}

const mapStateToProps = (state) => ({

  msgs: state.messeges
})


export default connect(mapStateToProps)(MsgList);
