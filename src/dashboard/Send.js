import React, { useState } from 'react';
import { connect } from 'react-redux';
import { send } from '../redux/actions';
import Picker from 'emoji-picker-react';

function Send(props) {
  const [msg, setMsg] = useState("")
  const [chosenEmoji, setChosenEmoji] = useState("😉");
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setMsg(`${msg} ${emojiObject.emoji}`)
  };
  const onChange = (new_msg) => {
    setMsg(new_msg);
  }
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      console.log("**********************");
      console.log(props.channel.id);
      console.log("**********************");

      try {
        // send api request to send the msg
        props.send(props.channel.id, msg)
        // clear input field after sending a msg
        setMsg("");
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="container border border-info py-5">
      <h1>this is the send bar</h1>
      <div className="input-group input-group-lg">
        <div className="input-group-apend">
          <span className="input-group-text" id="inputGroup-sizing-lg" onClick={onEnter}>SEND</span>
        </div>
        <input type="text" className="form-control" onChange={e => onChange(e.target.value)} onKeyDown={onEnter} value={msg} />
      </div>
      <div>
        <div>
          {chosenEmoji ? (
            <span>You chose: {chosenEmoji.emoji}</span>
          ) : (
              <span>No emoji Chosen</span>
            )}
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      </div>
    </div>
  );
}

const mapStatToProps = ({ channelsReducer }) => {
  return {
    channel: channelsReducer.current_channel
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    send: (chnl_id, val) => { dispatch(send(chnl_id, val)) }
  }
}

export default connect(mapStatToProps, mapDispatchToProps)(Send);
