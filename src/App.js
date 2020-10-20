import React from "react";
import "./App.css";
import { connect } from "react-redux";

/*yarn adds:
redux
redux-thunk
react-redux
react-router-dom
jwt-decode
js-cookie
*/

function App({ user, channels, messeges }) {
  console.log("user", user);
  console.log("channels", channels);
  console.log("messeges", messeges);

  return (
    <>{/* <p>{user}</p>
      <p>{channels}</p>
      <p>{messeges}</p> */}</>
  );
}

const mapStateToProps = ({ user, channels, messeges }) => ({
  user,
  channels,
  messeges,
});

export default connect(mapStateToProps)(App);
