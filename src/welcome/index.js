//import login ,sign up
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// due to the complexity of the dashboard
// this file is to be the base file of the dashboard so other file can fit in one place only

// components
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Welcome() {
  return (
    <Jumbotron className="mt-5">
      <h1>Hello, stranger!</h1>
      <p>Welcome to our Not Discord messeging platform.</p>
      <p>
        <Link to={"/login"}>
          <Button variant="success">Login</Button>
        </Link>
        <Link to={"/signup"}>
          <Button variant="warning">Sign up</Button>
        </Link>
      </p>
    </Jumbotron>
  );
}

export default Welcome;
