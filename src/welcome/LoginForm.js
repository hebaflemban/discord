import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Swal from 'sweetalert2'

//action
import { login } from "../redux/actions";
import { reset } from "../redux/actions";

//component
// import ErrorAlert from "./ErrorAlert";
import { ReactComponent as Logo } from '../logo.svg';

const LoginForm = ({ login, user, error, reset }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUserData({ ...userData, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    // console.log("testtttttt");
    event.preventDefault();
    login(userData);
    // console.log(user);
  };
  const errorAlert = (error) => {
    console.log(typeof (error));
    let x = JSON.parse(error);
    let errorMsg = x.non_field_errors[0]
    console.log(typeof (x));
    console.log(x.non_field_errors[0]);

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      // text: 'Something went wrong!',
      text: `
      ${errorMsg}
      `,
    });
    reset();

  }

  const { username, password } = userData;

  if (user) {
    return <Redirect to="/dashboard" />;
  }

  if (error) {
    errorAlert(error)
  }

  return (
    <div className="auth-body">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  {/* image - you can cahnge the image from the css */}
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <Logo className="img-fluid mx-4 my-4 " />
                        <h2 className="h2 text-gray-900 mb-4">Welcome back, buddy!</h2>
                      </div>
                      <hr />
                      <div className="text-center">
                        {/* form  */}
                        <form onSubmit={handleSubmit} className="user">
                          <div className="form-group">
                            <input className="form-control form-control-user"
                              type="text"
                              id="username"
                              value={username}
                              name="username"
                              placeholder="Username" required="required"
                              onChange={handleChange} />
                          </div>
                          <div className="form-group">
                            <input className="form-control form-control-user"
                              type="password"
                              id="password"
                              value={password}
                              name="password"
                              placeholder="Password" required="required"
                              onChange={handleChange} />
                          </div>
                          <button type="submit" className="btn btn-outline-login btn-round btn-block my-3">Login</button>
                        </form>
                      </div>
                      <hr />
                      <div className="text-center">
                        <p>Dont hava an account ? join us for free!</p>
                        <Link className="text-decoration-none" to={"/signup"}>
                          <button className="btn btn-outline-signup btn-round btn-block my-3">Signup</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    reset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
