import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

//components
import ChatPage from "./ChatPage";
import Sidebar from "./Sidebar";
import Jumbotron from "react-bootstrap/Jumbotron";
import Send from "./Send";

// due to the complexity of the dashboard
// this file is to be the base file of the dashboard so other file can fit in one place only

function Dashboard({ user, error }) {
  console.log("!!user", !!user, user, error);

  if (!user) {
    return <Redirect to="/" />;
  }

  //   <div class="row">
  //   <div class="col-sm-9">
  //     Level 1: .col-sm-9
  //     <div class="row">
  //       <div class="col-8 col-sm-6">
  //         Level 2: .col-8 .col-sm-6
  //       </div>
  //       <div class="col-4 col-sm-6">
  //         Level 2: .col-4 .col-sm-6
  //       </div>
  //     </div>
  //   </div>
  // </div>

  return (
    <Jumbotron className="mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-md-3 jb">
                <Sidebar></Sidebar>
              </div>
              <div className="col-md-9 jb">
                <ChatPage></ChatPage>
              </div>
            </div>
            <div className="row">
              <div className="col-md-9 divleft">
                <Send></Send>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
}

const mapStateToProps = ({ authRes }) => ({
  user: authRes.user,
  error: authRes.errorMessage,
});
export default connect(mapStateToProps)(Dashboard);
