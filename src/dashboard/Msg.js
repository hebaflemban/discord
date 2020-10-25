import React from "react";
import processMsgs from "./utils";

/*
id(pin):12603
username(pin):"maha"
message(pin):"Hi"
timestamp(pin):"2020-10-21T13:28:09.832676Z"
channel(pin):855
*/

const Msg = ({ key, msgObj, userImg }) => {
  const urlRegex = /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi;
  // const urlRegex = new RegExp('/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi')
  const imgRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/gi;
  let msgBody;
  processMsgs(msgObj);
  if (msgObj.message.match(imgRegex)) {
    // msgBody = <a href={msg.message} target="_blank">{msg.message}</a>
    msgBody = <img src={msgObj.message} alt="" />;
  } else if (msgObj.message.match(urlRegex)) {
    if (msgObj.message.match(urlRegex)) {
      msgBody = (
        <a href={msgObj.message} target="_blank" rel="noopener noreferrer">
          {msgObj.message}
        </a>
      );
    }
  } else {
    msgBody = <p>{msgObj.message}</p>;
  }

  // chanel_id, id, msg, timestamp, username
  return (
    <div className="container border border-primary my-3">
      <div className="container">
        <div className="container row">
          <div className="col-2">
            {" "}
            <img
              className="user-profile rounded-circle"
              src={`/profileImages/${userImg}.png`}
              alt={`${msgObj.username}'s profile image`}
            />
          </div>
          <div className="col-2">{msgObj.username}</div>
          <div className="col-8">{msgBody}</div>
          <p>{msgObj.timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default Msg;
