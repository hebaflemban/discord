import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchMesseges, selectChannel } from "../redux/actions";
import SearchBar from "./SearchBar"
import Loading from "./Loading"

const ChannelList = (props) => {
  const [query, setQeury] = useState("");
  const chanels = props.channels;
  // img_url, owner, name, id
  let change = true;
  let timerId;

  const filterChannels = () => {
    return chanels.filter((chanel) => {
      return `${chanel.name}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
  };

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
  
  return <div className="border border-warning m-5">
    <SearchBar onChange={setQeury} placeholder="Search for Channel"/>
    {chanelCards}
    </div>;
};

const mapStateToProps = ({ channelsReducer }) => {
  return {
    channels: channelsReducer.channels,
    loading: channelsReducer.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMesseges: (channel_id) => dispatch(fetchMesseges(channel_id)),
    selectChannel: (channel_id) => dispatch(selectChannel(channel_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
