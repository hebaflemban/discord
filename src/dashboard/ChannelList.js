import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchMesseges, selectChannel } from "../redux/actions";
import SearchBar from "./SearchBar"
import Loading from "./Loading"

const ChannelList = (props) => {
  const [query, setQeury] = useState("");
  const [loading, setLoading] = useState(true);
  let chanels = props.channels;
  // img_url, owner, name, id

  const filterChannels = () => {
    return chanels.filter((chanel) => {
      return `${chanel.name}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
  };

  

  const handleClick = (chnl) => {
    console.log(chnl);
    props.fetchMesseges(chnl.id);
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


  useEffect(()=> {
    setLoading(false);
  }, [...chanels])

  if (!chanelCards) return <Loading/>

  return <div className="border border-warning m-5">
    <SearchBar onChange={setQeury} placeholder="Search for Channel"/>
    {chanelCards}
    </div>;
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
