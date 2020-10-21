import React from 'react';
import { connect } from "react-redux";
import { fetchMesseges, selectChannel } from '../redux/actions';

const ChannelList = (props) => {
    const chanels = props.channels;
    // img_url, owner, name, id

    const handleClick = (chnl) => {
        console.log(chnl)
        props.fetchMesseges(chnl.id)
        props.selectChannel(chnl.id)

    }

    let chanelCards = chanels.map(chnl => (
        <div key={chnl.name + chnl.id}>
            <p className="btn btn-block btn-lg btn-dark" onClick={() => handleClick(chnl)}>{chnl.name}</p>
            <span>{chnl.owner}</span>
        </div>
    ))
    return (
        <div className="border border-warning m-5">
            {chanelCards}
        </div>
    );
}

const mapStateToProps = ({channelsReducer}) => ({
    // channels: state.channels
    channels: channelsReducer.channels,

})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMesseges: (channel_id) => dispatch(fetchMesseges(channel_id)),
        selectChannel: (channel_id) => dispatch(selectChannel(channel_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
