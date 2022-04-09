import React, { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import "./UserFrom.css";

import logo from "../images/logo.png";
import logo1 from "../images/logo1.png";

function LoginOrSignUp() {

  return (
    <section className="login-block">
      {/* <!-- Container-fluid starts --> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {/* <!-- Authentication card start --> */}
            <form className="p-2 md-float-material form-material">
              <div className="side-logo">
                <img src={logo} alt="logo.png" style={{ width: "110px" }} />
              </div>
              <div className="auth-box-login auth-box card">
                <div className="card-block">
                  <div className="row m-b-20">
                    <div className="col-md-12">
                      <h3 className="text-center">Login Or SignUp</h3>
                    </div>
                  </div>
                  <div className="col-md-12 my-3">
                  <div className="login-signup mt-3 text-center">
                    Already have an account? &nbsp; <Link to="/login"><u>Sign in</u></Link> 
                  </div>
                  <div className="login-signup mt-3 text-center">
                  Do u want to create a new account? &nbsp; <Link to="/signup"><u>Register</u></Link> 
                  </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-9">
                      <img
                        src={logo1}
                        alt="small-logo.png"
                        style={{ float: "right" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {/* <!-- end of form --> */}
          </div>
          {/* <!-- end of col-sm-12 --> */}
        </div>
        {/* <!-- end of row --> */}
      </div>
      {/* <!-- end of container-fluid --> */}
    </section>
  );
}

export default LoginOrSignUp;
