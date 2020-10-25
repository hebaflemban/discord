import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'
import Loading from "./Loading";
import { selectChannel, fetchMesseges } from "../redux/actions";
import SearchBar from "./SearchBar";
import { ReactComponent as Logo } from "../logo.svg";

const Profile = (props) => {
  
  const chanels = props.channels;
  const user = props.user;

  const filterChannels = () => {
    return chanels.filter((chanel) => {
      return chanel.owner==user.username;
    });
  };

  const handleClick = (chnl) => {
    const draft = localStorage.getItem(`msgInLocalStorage_${chnl.id}`);
    props.selectChannel(chnl.id, draft);
  };



  let chanelCards = filterChannels().map((chnl) => (
    <div key={chnl.name + chnl.id}>
        
      <p className="h5 rounded-pill chnl-menu btn-outline-secondary text-black"
        onClick={() => handleClick(chnl)}
      >

        {chnl.name}
        
      </p>
    </div>
  ));

  if (props.loadingChannels) return <Loading />;

  return (

    <div className="auth-body">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  {/* image - you can cahnge the image from the css */}
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <Logo className="img-fluid mx-4 my-4 " />
  <h2 className="h2 text-gray-900 mb-4">Welcome  {user.username}</h2>
                      </div>
                      <hr />
                      <div className="text-center">
                      <div className="sidebar-heading text-white">
        Your channels
      </div>
      <div className="mx-3">
        {chanelCards}
      </div>
                      </div>
                     

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

const mapStateToProps = ({ channelsReducer, messegesReducer, authRes }) => {
  return {
    channels: channelsReducer.channels,
    user: authRes.user,
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);