import React from "react";
import { connect } from "react-redux";
import { fetchMesseges, selectChannel } from "../redux/actions";

const ChannelList = (props) => {
  const chanels = props.channels;
  // img_url, owner, name, id
  let change = true;
  let timerId;
  const handleClick = (chnl) => {
    change = !change;
    console.log(change);
    timerId = setInterval(() => props.fetchMesseges(chnl.id), 2000);
    props.selectChannel(chnl.id);
  };

  // after 5 seconds stop
  // if (change) {
  //   console.log("we're not fetching anymore");
  //   setTimeout(() => {
  //     clearInterval(timerId);
  //   }, 500);
  // }

  let chanelCards = chanels.map((chnl) => (
    <div key={chnl.name + chnl.id}>
      <p
        className="btn btn-block btn-lg btn-dark"
        onClick={() => handleClick(chnl)}
      >
        {chnl.name}
      </p>
      <span>{chnl.owner}</span>
    </div>
  ));
  return <div className="border border-warning m-5">{chanelCards}</div>;
};

const mapStateToProps = ({ channelsReducer }) => {
  return {
    channels: channelsReducer.channels,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMesseges: (channel_id) => dispatch(fetchMesseges(channel_id)),
    selectChannel: (channel_id) => dispatch(selectChannel(channel_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
