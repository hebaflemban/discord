import React from "react";
import processMsgs from "./utils";

/*
id(pin):12603
username(pin):"maha"
message(pin):"Hi"
timestamp(pin):"2020-10-21T13:28:09.832676Z"
channel(pin):855
*/

const Msg = ({ msg, usersInChannel, userImg }) => {
  /**************** New Code ****************** */
  console.log(usersInChannel);

  /********************************** */

  const urlRegex = /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi;
  // const urlRegex = new RegExp('/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi')
  const imgRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/gi;
  let msgBody;
  processMsgs(msg);
  if (msg.message.match(imgRegex)) {
    // msgBody = <a href={msg.message} target="_blank">{msg.message}</a>
    msgBody = <img src={msg.message} alt="" />;
  } else if (msg.message.match(urlRegex)) {
    if (msg.message.match(urlRegex)) {
      msgBody = (
        <a href={msg.message} target="_blank" rel="noopener noreferrer">
          {msg.message}
        </a>
      );
    }
  } else {
    msgBody = <p>{msg.message}</p>;
  }

  // chanel_id, id, msg, timestamp, username
  return (
    <div className="container border border-primary my-3">
      {/* <h3>this is a msg</h3> */}
      <div className="container">
        <div className="container row">
          <div className="col-2">{msg.username}</div>
          <div className="col-10">{msgBody}</div>
          <p>{msg.timestamp}</p>
          {/* {console.log(typeof (msg.timestamp))} */}
        </div>
      </div>
    </div>
  );
};

export default Msg;
