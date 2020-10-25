import React, { useState } from "react";
import { connect } from "react-redux";

import { logout } from "../redux/actions";
import { addChannel } from "../redux/actions";
// import { ReactComponent as Logo } from '../logo.svg';
import logoImg from "../assets/logo192.png";
import ChannelList from "./ChannelList";
import ChannelIcon from "./ChannelIcon";

const Sidebar = ({ user, addChannel, logout }) => {
  const [chnlName, setChnlName] = useState("");
  const [isHidden, setHidden] = useState(true);
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const onChange = (new_chnl) => {
    setChnlName(new_chnl);
  };

  const handleClick = () => {
    addChannel(chnlName);
    setChnlName("");
  };
  const toggleView = () => {
    setHidden(!isHidden);
  };
  const hideSideBar = () => {
    setToggleSideBar(!toggleSideBar);
  };

  return (
    <ul
      className={
        toggleSideBar
          ? "navbar-nav bg-gradient-piggypink sidebar sidebar-hidden sidebar-dark accordion"
          : "navbar-nav bg-gradient-piggypink sidebar accordion"
      }
      id="accordionSidebar"
    >
      {!toggleSideBar ? (
        <>
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center mt-5"
            href="index.html"
          >
            <div className="sidebar-brand-icon">
              {/* <Logo className="w-50 img-fluid"/> */}
              <img src={logoImg} alt="Logo" className="img-fluid w-50" />
            </div>
            <div className="sidebar-brand-text ">
              Discord <sup>2</sup>
            </div>
          </a>
          <hr className="sidebar-divider my-4" />
          <li class="nav-item mx-3">
            <button class="btn btn-block btn-outline-light btn-round">
              <i class="fas fa-fw fa-chart-area"></i>
              <span>DASHBOARD</span>
            </button>
          </li>
          <hr className="sidebar-divider my-2" />
          <li class="nav-item mx-3">
            <button
              onClick={logout}
              class="btn btn-block btn-outline-danger btn-round"
            >
              <i class="fas fa-fw fa-chart-area"></i>
              <span>LOGOUT</span>
            </button>
          </li>
          <hr className="sidebar-divider my-3" />
          <li class="nav-item mx-3 text-center">
            <button
              onClick={toggleView}
              class="btn btn-light btn-circle mt-0 mb-2"
            >
              <span className="h3">+</span>
            </button>
            <div className={isHidden ? "d-none" : "input-group mb-3"}>
              <input
                type="text"
                onChange={(e) => onChange(e.target.value)}
                className="form-control"
                placeholder="new channel name"
                value={chnlName}
              />
              <div className="input-group-append">
                <button
                  value="submit"
                  onClick={() => handleClick()}
                  class="input-group-text"
                >
                  <span>Create</span>
                </button>
              </div>
            </div>
          </li>
          <ChannelList />
        </>
      ) : (
        <>
          <div className="mx-3 text-center text-white">
            <div className="sidebar-brand-icon my-5">
              <img src={logoImg} alt="Logo" className="img-fluid w-75" />
            </div>
            <div className="sidebar-brand-text ">
              Discord <sup>2</sup>
            </div>
            <li class="nav-item mx-3 my-4">
              <button class="btn btn-circle btn-outline-light btn-lg">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-house"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>
              </button>
              <p className="mt-2">home</p>
            </li>
            <li class="nav-item mx-3 my-4">
              <button class="btn btn-circle btn-outline-light btn-lg">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-box-arrow-in-left"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
                  />
                </svg>
              </button>
              <p className="mt-2">logout</p>
            </li>
            <hr className="sidebar-divider my-3" />
          </div>
          <ChannelIcon />
        </>
      )}
      <li class="nav-item mx-3 my-4 text-center">
        <button
          class="btn btn-circle btn-outline-light btn-lg"
          onClick={hideSideBar}
        >
          {toggleSideBar ? (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-chevron-left"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          ) : (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-chevron-right"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          )}
        </button>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addChannel: (val) => dispatch(addChannel(val)),
    logout: () => dispatch(logout()),
  };
};

const mapStateToProps = ({ authRes }) => ({
  user: authRes.user,
});
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
