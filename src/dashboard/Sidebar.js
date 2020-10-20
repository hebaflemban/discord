import React from "react";
import { connect } from "react-redux";

// action
import { logout } from "../redux/actions";

// components
import Button from "react-bootstrap/Button";
import ChannelList from "./ChannelList";

function Sidebar({ user, logout }) {
  return (
    <div className="border border-danger">
      <h1>this is the side bar</h1>
      <ChannelList></ChannelList>
      <Button variant="danger" onClick={logout}>
        Log out
      </Button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

const mapStateToProps = ({ authRes }) => ({
  user: authRes.user,
});
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
