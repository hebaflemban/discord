import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { send } from "../redux/actions";
import Picker from "emoji-picker-react";
import Giphy from "./Giphy";

function Send(props) {
  console.log("******************SEND IS RERENDED***************************");
  console.log(props.localStorage);

  let draft = "" + props.localStorage;

  console.log(draft);
  const [msg, setMsg] = useState("");
  console.log(msg);

  /*
  
  console.log("!!drive", !!drive, key);

  const [msg, setMsg] = useState(drive ? localStorage.getItem(key) : " ");
  console.log("msg", msg);

  useEffect(() => {
    setMsg(drive ? localStorage.getItem(key) : " ");
    console.log("inside useeffect", msg);
  }, [props.channel.id]);

  useEffect(() => {
    console.log("inside useeffect using msg", msg);

    localStorage.setItem(`msgInLocalStorage_${props.channel.id}`, msg);
  }, [msg]);

    */
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
          value={msg == "" ? props.localStorage : msg}
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
