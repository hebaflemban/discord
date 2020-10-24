import React from "react";
import { connect } from "react-redux";
import ChatPage from "./ChatPage";
import Footer from "./Footer";
import Navbar from "./Navbar";

// components
// import MsgList from "./MsgList";

function Main(props) {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Navbar />
                <div className="container-fluid" id="chatpage">
                    <ChatPage></ChatPage>
                    <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
                </div>
                <Footer />
            </div>
        </div>
    );
}

const mapStateToProps = ({ channelsReducer }) => {
    return {
        channel: channelsReducer.current_channel,
    };
};

export default connect(mapStateToProps)(Main);
