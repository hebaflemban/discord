import React, { useState } from "react";
import { connect } from "react-redux";

import Loading from "./Loading"
import { selectChannel, fetchMesseges } from "../redux/actions";
import SearchBar from "./SearchBar";

const ChannelList = (props) => {
  const [query, setQeury] = useState("");
  const chanels = props.channels;
  // img_url, owner, name, id

  const filterChannels = () => {
    return chanels.filter((chanel) => {
      return `${chanel.name}`.toLowerCase().includes(query.toLowerCase());
    });
  };

  const handleClick = (chnl) => {
    props.selectChannel(chnl.id);
  };

  let chanelCards = filterChannels().map((chnl) => (
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

        if(props.loading) return <Loading />

  return (
    <div className="border border-warning m-5">
      <SearchBar onChange={setQeury} placeholder="Search for Channel" />
      {chanelCards}
    </div>
  );
};

const mapStateToProps = ({ channelsReducer }) => {
  return {
    channels: channelsReducer.channels,
    loading: channelsReducer.loading
    current_channel: channelsReducer.current_channel,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectChannel: (channel_id) => dispatch(selectChannel(channel_id)),
    fetchMesseges: (channel_id) => dispatch(fetchMesseges(channel_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
