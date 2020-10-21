import React, { useState } from 'react';
import { connect } from 'react-redux';
import { send } from '../redux/actions';

function Send(props) {
  const [msg, setMsg] = useState("")
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
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg" onClick={onEnter}>SEND</span>
        </div>
        <input type="text" className="form-control" onChange={e => onChange(e.target.value)} onKeyDown={onEnter} value={msg} />
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
