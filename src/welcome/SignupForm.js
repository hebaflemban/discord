import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Swal from 'sweetalert2'

//action
import { signup } from "../redux/actions";
import { reset } from "../redux/actions";

//component
//import ErrorAlert from "./ErrorAlert";
import { ReactComponent as Logo } from '../logo.svg';

const SignupForm = ({ signup, user, error, reset }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (event) =>
    setUserData({ ...userData, [event.target.name]: event.target.value });

    const handleSubmit = (event) => {
      if (userData.password === userData.checkPassword) {
        event.preventDefault();
        signup(userData);
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'doube check the password dum dum!',
          
        });
      }
    }
  const errorAlert = (error) => {
    console.log(typeof(error));
    let x = JSON.parse(error);
    let errorMsg = x.username
    console.log(x);
    //console.log(x.non_field_errors[0]);

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `
      ${errorMsg}
      `,
    });
    reset();
  }

  const { username, confirm_password, password } = userData;
  
  if (user) {
    Swal.fire({
      icon: 'success',
      title: 'You have sign us successfuly',
      showConfirmButton: true,
      timer: 5000
    })
    return <Redirect to="/dashboard" />;
  }
  if (error) {
    errorAlert(error)
  }
  return (
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
                      <h2 className="h2 text-gray-900 mb-4">Join us!</h2>
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
onChange={handleChange}
/>
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

                        <div className="form-group">
                          <input className="form-control form-control-user"
                             type="password"
                             id="confirm_password"
                             value={confirm_password}
                             name="confirm_password"
                             placeholder="Confirm Password" required="required"
                            onChange={handleChange} />
                        </div>


                        <button className="btn btn-outline-signup btn-round btn-block my-3">
                        Signup
                        </button>
            <Link to="/login" className="btn btn-link my-2 my-sm-0">
              I already have an account
            </Link>
          </form>
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
    signup: (user) => dispatch(signup(user)),
    reset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
