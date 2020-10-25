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
  const urlRegex = /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi;
  // // const urlRegex = new RegExp('/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi')
  const imgRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/gi;
  let msgBody;

  processMsgs(msgObj);
  if (msgObj.message.match(imgRegex)) {
    // msgBody = <a href={msg.message} target="_blank">{msg.message}</a>
    msgBody = <img src={msgObj.message} className="img-fluid rounded" alt="" />;
  } else if (msgObj.message.match(urlRegex)) {
    if (msgObj.message.match(urlRegex)) {
      msgBody = (
        <a
          className="img-In-chat"
          href={msgObj.message}
          target="_blank"
          rel="noopener noreferrer"
        >
          {msgObj.message}
        </a>
      );
    }
  } else {
    msgBody = <p>{msgObj.message}</p>;
  }

  let side = msgObj.username === user.username ? "right" : "left";

  return (
    <>
      <div className="" className={`row container text-${side}`}>
        {side === "right" ?
          <>
            <div className="col-md-11 text-right float-right">
              <div className="container">
                <p className="h5"> <small>time</small> </p>
              </div>
              <div className="container text-right">
                <span class="btn btn-pill btn-light active shadow  text-truncate">
                  {msgBody}
                </span>
              </div>
            </div>
            <div className="col-md-1">
              <img
                className="img-fluid rounded-circle"
                src={`/profileImages/${userImg}.png`}
                alt={`${msgObj.username}'s profile`}
              />
            </div>

          </>
          :
          <>
            <div className="col-md-1">

              <img
                className="img-fluid rounded-circle"
                src={`/profileImages/${userImg}.png`}
                alt={`${msgObj.username}'s profile`}
              />
            </div>
            <div className="col-md-11">
              <div className="row">
                <p className="h5"> {msgObj.username} - <small>time</small> </p>
              </div>
              <div className="row">
                <span class="btn btn-pill btn-light active shadow  text-truncate">
                  {msgBody}
                </span>
              </div>
            </div>
          </>
        }
      </div>
      {/* copy from me */}

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
