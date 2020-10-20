import React from 'react';

// components
import MsgList from "./MsgList"
import Send from "./Send"

function ChatPage() {
  return (
    <div className="border border-primary">
      <h1>this is the chat page</h1>
      <MsgList></MsgList>
      <div>
        <Send></Send>
      </div>
    </div>
  );
}

export default ChatPage;
