import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

//components
import Sidebar from "./Sidebar";
import Main from "./Main";

function Dashboard({ user, error }) {
  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div class="chat_window" id="wrapper">
      <Sidebar />
      <Main />
    </div>
  );
}

const mapStateToProps = ({ authRes }) => ({
  user: authRes.user,
  error: authRes.errorMessage,
});
export default connect(mapStateToProps)(Dashboard);
