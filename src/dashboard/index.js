import React from "react";

// due to the complexity of the dashboard
// this file is to be the base file of the dashboard so other file can fit in one place only

// components
import ChatPage from "./ChatPage";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9">
          <ChatPage></ChatPage>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
