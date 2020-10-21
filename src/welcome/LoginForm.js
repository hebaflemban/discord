import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

//action
import { login } from "../redux/actions";

//component
import ErrorAlert from "./ErrorAlert";

const LoginForm = ({ login, user, error }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUserData({ ...userData, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    console.log("testtttttt");
    event.preventDefault();
    login(userData);
    console.log(user);
  };

  const { username, password } = userData;

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
              Login
            </button>
            <Link to="/signup" className="btn btn-link my-2 my-sm-0">
              Signup for an account
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
    login: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
