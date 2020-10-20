import React from 'react';

// components
import Msg from "./Msg";

function MsgList() {
  // here sould be a msg loop
  const msgs = [1, 2, 3]

  const msgList = msgs.map(msg => (
    <Msg key={msg}></Msg>
  ));

  return (
    <div className="border border-warning m-5">
      <h1>this is the msg list</h1>
      {msgList}
    </div>
  );
}

export default MsgList;
