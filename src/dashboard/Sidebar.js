import React, { useState } from "react";
import { connect } from "react-redux";

import { logout } from "../redux/actions";
import { addChannel } from "../redux/actions";
import { ReactComponent as Logo } from '../logo.svg';
import ChannelList from "./ChannelList";

const Sidebar = ({ user, addChannel, logout }) => {
    const [chnlName, setChnlName] = useState("");

    const onChange = (new_chnl) => {
        setChnlName(new_chnl);
    };

    const handleClick = () => {
        addChannel(chnlName);
        setChnlName("");
    };

    return (
        <ul className="navbar-nav bg-gradient-piggypink sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon">
                    {/* <Logo className="w-50 img-fluid"/> */}
                </div>
                <div className="sidebar-brand-text ">Discord <sup>2</sup></div>
            </a>
            <hr className="sidebar-divider my-4" />
            <li class="nav-item mx-3">
                <button class="btn btn-block btn-outline-light btn-round">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>DASHBOARD</span></button>
            </li>
            <hr className="sidebar-divider my-2" />
            <li class="nav-item mx-3">
                <button onClick={logout} class="btn btn-block btn-outline-danger btn-round">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>LOGOUT</span></button>
            </li>
            <hr className="sidebar-divider my-3" />
            <li class="nav-item mx-3">
                <input type="text" onChange={(e) => onChange(e.target.value)} class="form-control bg-light border-0 small" placeholder="new channel name..." value={chnlName} />
                <button value="submit" onClick={() => handleClick()} class="btn btn-block btn-outline-light btn-round">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>create new channel</span>
                </button>
            </li>
            <hr className="sidebar-divider my-3" />
            <ChannelList />
        </ul>
    );
}

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
