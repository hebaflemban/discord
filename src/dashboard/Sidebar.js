import React from 'react';

// components
import ChannelList from "./ChannelList";

function Sidebar() {
  return (
    <div className="border border-danger">
        <h1>this is the side bar</h1>
        <ChannelList></ChannelList>
      //logout

    </div>
  );
}

export default Sidebar;
