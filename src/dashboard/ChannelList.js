import React, { useState } from "react";
import { connect } from "react-redux";

import Loading from "./Loading";
import { selectChannel, fetchMesseges } from "../redux/actions";
import SearchBar from "./SearchBar";

const ChannelList = (props) => {
  const [query, setQeury] = useState("");
  const chanels = props.channels;

  const filterChannels = () => {
    return chanels.filter((chanel) => {
      return `${chanel.name}`.toLowerCase().includes(query.toLowerCase());
    });
  };

  const handleClick = (chnl) => {
    const draft = localStorage.getItem(`msgInLocalStorage_${chnl.id}`);
    props.selectChannel(chnl.id, draft);
  };

  let chanelCards = filterChannels().map((chnl) => (
    <div key={chnl.name + chnl.id} className={props.current_channel.id === chnl.id ? "btn-block my-4 btn-outline-light active btn-round shadow": "btn-block my-4 btn-outline-light btn-round shadow"}>
      <p
        className="h5"
        onClick={() => handleClick(chnl)}
      >
        {chnl.name}
        <small className="text-muted"> by {chnl.owner}</small>
      </p>
    </div>
  ));

  if (props.loadingChannels) return <Loading />;

  return (
    <div className="scrollable">
      <hr className="sidebar-divider my-3" />
      <div className="sidebar-heading text-white">channels</div>
      <SearchBar
        onChange={setQeury}
        className=""
        placeholder="Search for Channel"
      />
      <div className="mx-3">{chanelCards}</div>
    </div>
  );
};

const mapStateToProps = ({ channelsReducer, messegesReducer }) => {
  return {
    channels: channelsReducer.channels,
    loadingChannels: channelsReducer.loading,
    loadingMessages: messegesReducer.loading,
    current_channel: channelsReducer.current_channel,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectChannel: (channel_id, draft) =>
      dispatch(selectChannel(channel_id, draft)),
    fetchMesseges: (channel_id) => dispatch(fetchMesseges(channel_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
