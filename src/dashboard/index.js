import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

//components
import ChatPage from "./ChatPage";
import Sidebar from "./Sidebar";

// due to the complexity of the dashboard
// this file is to be the base file of the dashboard so other file can fit in one place only

function Dashboard({ user, error }) {
  console.log("!!user", !!user, user, error);

  if (!user) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9">
          <ChatPage></ChatPage>
        </div>
        <div></div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ authRes }) => ({
  user: authRes.user,
  error: authRes.errorMessage,
});
export default connect(mapStateToProps)(Dashboard);
