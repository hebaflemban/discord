import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

//components
import ChatPage from "./ChatPage";
// import Sidebar from "./Sidebar";
// import Jumbotron from "react-bootstrap/Jumbotron";
import Send from "./Send";
import Sidebar from "./Sidebar";
import Main from "./Main"

// due to the complexity of the dashboard
// this file is to be the base file of the dashboard so other file can fit in one place only

function Dashboard({ user, error }) {
  console.log("!!user", !!user, user, error);

  if (!user) {
    return <Redirect to="/" />;
  }

  //   <div className="row">
  //   <div className="col-sm-9">
  //     Level 1: .col-sm-9
  //     <div className="row">
  //       <div className="col-8 col-sm-6">
  //         Level 2: .col-8 .col-sm-6
  //       </div>
  //       <div className="col-4 col-sm-6">
  //         Level 2: .col-4 .col-sm-6
  //       </div>
  //     </div>
  //   </div>
  // </div>

  return (
    <div id="wrapper">
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
