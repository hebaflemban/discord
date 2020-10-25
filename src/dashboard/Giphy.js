import React from "react";
import Picker from "react-giphy-picker";
import { connect } from "react-redux";
import { send } from "../redux/actions";

const Giphy = (props) => {
  const sendGif = (gif) => {
    let gifToSend = gif.original.url;
    props.send(props.channel.id, gifToSend);
  };
  return <Picker onSelected={sendGif.bind(this)} />;
};
const mapStatToProps = ({ channelsReducer }) => {
  return {
    channel: channelsReducer.current_channel,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    send: (chnl_id, gif) => {
      dispatch(send(chnl_id, gif));
    },
  };
};

export default connect(mapStatToProps, mapDispatchToProps)(Giphy);
