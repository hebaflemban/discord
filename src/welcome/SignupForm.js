import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

//action
import { signup } from "../redux/actions";

//component
import ErrorAlert from "./ErrorAlert";

const SignupForm = ({ signup, user, error }) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) =>
    setUserData({ ...userData, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(userData);
  };

  const { username, email, password } = userData;
  if (user) {
    return <Redirect to="/dashboard" />;
  }
  if (error) {
    return <ErrorAlert />;
  }
  return (
    <div className="col-6 mx-auto">
      <div className="card my-5">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                name="username"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Signup
            </button>
            <Link to="/login" className="btn btn-link my-2 my-sm-0">
              I already have an account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authRes }) => ({
  user: authRes.user,
  error: authRes.errorMessage,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
