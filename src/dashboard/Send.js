import React, { useState } from "react";
import { connect } from "react-redux";
import { send } from "../redux/actions";
import Picker from "emoji-picker-react";
import Giphy from "./Giphy";
import Dropdown from "react-bootstrap/Dropdown";

function Send(props) {
  console.log("******************SEND IS RERENDED***************************");
  console.log(props.localStorage);

  let draft = "" + props.localStorage;

  console.log(draft);
  const [msg, setMsg] = useState("");
  console.log(msg);

  const handleChange = (event) => {
    setMsg(event.target.value);
    localStorage.setItem(
      `msgInLocalStorage_${props.channel.id}`,
      event.target.value
    );
  };

  const [chosenEmoji, setChosenEmoji] = useState("😉");
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setMsg(`${msg} ${emojiObject.emoji}`);
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      console.log("**********************");
      console.log(props.channel.id);
      console.log("**********************");

      try {
        // send api request to send the msg
        props.send(props.channel.id, msg);
        // clear input field after sending a msg
        setMsg(" ");
        props.localStorage = " ";
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="input-group input-group-lg mb-2">
      <div className="bottom_wrapper clearfix">
        <div className="message_input_wrapper">
          <input
            type="text"
            className="message_input"
            placeholder="Type your message here..."
            onChange={(event) => handleChange(event)}
            onKeyDown={onEnter}
            value={msg == "" ? props.localStorage : msg}
          />
        </div>

        <div className="send_message">
          <div className="icon"></div>
          <div className="text" onClick={onEnter}>
            Send
          </div>
          <Dropdown className="btn btn-block ">
            <Dropdown.Toggle
              className="btn btn-block rounded-pill "
              variant="success"
              id="dropdown-basic"
            >
              😀
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Picker onEmojiClick={onEmojiClick} />
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              className="btn btn-block rounded-pill "
              variant="success"
              id="dropdown-basic"
            >
              GIFs
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Giphy />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

const mapStatToProps = ({ channelsReducer }) => {
  return {
    channel: channelsReducer.current_channel,
    localStorage: channelsReducer.localStorage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    send: (chnl_id, val) => {
      dispatch(send(chnl_id, val));
    },
  };
};

export default connect(mapStatToProps, mapDispatchToProps)(Send);

/*

<div className="container border border-info py-5">
      <h1>this is the send bar</h1>
      <div className="input-group input-group-lg">
        <div className="input-group-apend">
          <span
            className="input-group-text"
            id="inputGroup-sizing-lg"
            onClick={onEnter}
          >
            SEND
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          onChange={(event) => handleChange(event)}
          onKeyDown={onEnter}
          placeholder={"Press Enter to send"}
          value={msg === "" ? props.localStorage : msg}
        />
      </div>
      <div>
        <div>
          {chosenEmoji ? (
            <span>You chose: {chosenEmoji.emoji}</span>
          ) : (
            <span>No emoji Chosen</span>
          )}
          <Picker onEmojiClick={onEmojiClick} />
<Giphy />
          </div>
          </div>
        </div>
*/
