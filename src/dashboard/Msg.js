import React from 'react';

function Msg() {
  let msg = {
    user: "Ali",
    body: "nskfdkf sdkfksdf fsjfksdjf kjskjdsk",
    timestamp: "2020-10-20 13:15:37"
  }
  // chanel_id, id, msg, timestamp, username
  return (
    <div className="container border border-primary my-3">
      <h3>this is a msg</h3>
      <div className="container">
        <div className="container row">
          <div className="col-2">{msg.user}</div>
          <div className="col-10">{msg.body}</div>
          <p>{msg.timestamp}</p>
        </div>
      </div>
    </div>
  );
}

export default Msg;
