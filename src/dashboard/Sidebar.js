import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { connect } from 'react-redux';
import { addChannel } from '../redux/actions';

// action
import { logout } from "../redux/actions";

// components
import Button from "react-bootstrap/Button";
import ChannelList from "./ChannelList";

function Sidebar({ user, logout }) {
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
      <Button variant="danger" onClick={logout}>
        Log out
      </Button>

    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addChannel: (val) => dispatch(addChannel(val))
    logout: () => dispatch(logout()),
  };
};

const mapStateToProps = ({ authRes }) => ({
  user: authRes.user,
});
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
