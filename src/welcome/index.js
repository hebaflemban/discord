import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

//components
import { ReactComponent as Logo } from "../logo.svg";

// due to the complexity of the dashboard
// this file is to be the base file of the dashboard so other file can fit in one place only

function Welcome({ user }) {
  if (user) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <Logo className="img-fluid mx-4 my-4 " />
                      <h2 className="h2 text-gray-900 mb-4">
                        Hello, stranger!
                      </h2>
                    </div>
                    <hr />
                    <div className="text-center">
                      <p>
                        This is a place where humans and cats can chat for fun!
                        Don't worry your cat is not here, <small>maybe?</small>
                      </p>
                    </div>
                    <hr />
                    <div className="text-center">
                      <Link className="text-decoration-none" to={"/login"}>
                        <button className="btn btn-outline-login btn-round btn-block my-3">
                          Login
                        </button>
                      </Link>

                      <Link className="text-decoration-none" to={"/signup"}>
                        <button className="btn btn-outline-signup btn-round btn-block my-3">
                          Signup
                        </button>
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
  );
}

const mapStateToProps = ({ authRes }) => ({
  user: authRes.user,
});
export default connect(mapStateToProps)(Welcome);
