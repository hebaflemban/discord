import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { connect } from 'react-redux';
import { addChannel } from '../redux/actions';

// components
import ChannelList from "./ChannelList";

function Sidebar(props) {
  const [chnlName, setChnlName] = useState("");
  const onChange = (new_chnl) => {
    setChnlName(new_chnl);
  }
  addChannel(" we love coded ");

  return (
    <div className="border border-danger">
        <h1>this is the side bar</h1>
        <input className="" type="text" onChange={e => onChange(e.target.value)} value={chnlName}/>
        <input className="btn btn-primary" type="button" value="submit" onClick={() => props.addChannel(chnlName)} />
          
        <hr></hr>
        <ChannelList></ChannelList>
      //logout

    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchMesseges: (channel_id) => dispatch(fetchMesseges(channel_id))
    // 
    addChannel: (val) => dispatch(addChannel(val))
  }
}

export default connect(null,mapDispatchToProps)(Sidebar);
