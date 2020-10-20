import React, { useState } from 'react';

function Send() {
  const [msg, setMsg] = useState("")
  const onChange = (new_msg) => {
    setMsg(new_msg);
  }
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      console.log(msg);
      try {
        // send api request to send the msg
        // send(msg)
        // clear input field after sending a msg
        setMsg("");
      } catch (error) {
        
      }
    }
  }

  return (
    <div className="container border border-info py-5">
      <h1>this is the send bar</h1>
      <div className="input-group input-group-lg">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">SEND</span>
        </div>
        <input type="text" className="form-control" onChange={e => onChange(e.target.value)} onKeyDown={onEnter} value={msg} />
      </div>
    </div>
  );
}

export default Send;
