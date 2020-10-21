import React from 'react';

function Msg({msg}) {
  
  // chanel_id, id, msg, timestamp, username
  return (
    <div className="container border border-primary my-3">
      {/* <h3>this is a msg</h3> */}
      <div className="container">
        <div className="container row">
          <div className="col-2">{msg.username}</div>
          <div className="col-10">{msg.message}</div>
          <p>{msg.timestamp}</p>
        </div>
      </div>
    </div>
  );
}

export default Msg;
