import React from "react";
import processMsgs from "./utils";
import { connect } from "react-redux";

/*
id(pin):12603
username(pin):"maha"
message(pin):"Hi"
timestamp(pin):"2020-10-21T13:28:09.832676Z"
channel(pin):855
*/

const Msg = ({ msgObj, userImg, user }) => {
  // const urlRegex = /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi;
  // // // const urlRegex = new RegExp('/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi')
  // const imgRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/gi;
  // let msgBody;
  // console.log(msgObj.message);
  // const msgBubble = msgObj.message.map((msg) => {
  //   console.log("inside map", msg);

  //   processMsgs(msg, msgObj.timestamp[msgObj.message.indexOf(msg)]);
  //   if (msg.match(imgRegex)) {
  //     // msgBody = <a href={msg.message} target="_blank">{msg.message}</a>
  //     msgBody = <img src={msg} alt="" />;
  //   } else if (msg.match(urlRegex)) {
  //     if (msg.match(urlRegex)) {
  //       msgBody = (
  //         <a
  //           className="img-In-chat"
  //           href={msg}
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           {msg}
  //         </a>
  //       );
  //     }
  //   } else {
  //     msgBody = <p>{msg}</p>;
  //   }
  //   console.log("inside map msgBody[0]", msgBody);
  // });

  let side = msgObj.username === user.username ? "right" : "left";
  const msgBubble = msgObj.message.map((msg) => <p>{msg}</p>);

  return (
    <>
      <div className={`text-${side}`}>
        <img
          className="user-profile rounded-circle"
          src={`/profileImages/${userImg}.png`}
          alt={`${msgObj.username}'s profile image`}
        />
        {msgObj.username}
        <span class="badge badge-pill badge-light text-truncate">
          {msgBubble}
        </span>

        {/* <div className="speech-bubble speech-bubble:after img-In-chat"> */}
        {/* {msgObj.timestamp} */}
      </div>
    </>
  );
};

const mapStateToProps = ({ authRes }) => ({
  user: authRes.user,
});

export default connect(mapStateToProps)(Msg);

// <div classNameName="container border border-primary my-3">
//   <div className="container">
//     <div className="container row">
//       <div className="col-2">
//         {" "}
//         <img
//           className="user-profile rounded-circle"
//           src={`/profileImages/${userImg}.png`}
//           alt={`${msgObj.username}'s profile image`}
//         />
//       </div>
//       <div className="col-2">{msgObj.username}</div>
//       <div className="col-8">{msgBody}</div>
//       <p>{msgObj.timestamp}</p>
//     </div>
//   </div>
// </div>;
