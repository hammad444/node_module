import React, { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./UserFrom.css";

import logo from "../images/logo.png";
import logo1 from "../images/logo1.png";


function ContactUs() {


  const [message, setMessage] = useState("");



  // -----------------update User-----------------------------
  const sendMail = (e) => {
alert("ok")
  };
// --------------------------------------------


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
                      <h3 className="text-center">Contact Us</h3>
                    </div>
                  </div>

                  {message && <p className="alerts">{message}</p>}
                  <div className="form-group form-primary">
                    <textarea
                      name="describe"
                      rows={5}
                      className="form-control"
                      placeholder="Describe"
                      // onChange={(e) => changeHandler(e.target.value)}
                    />
                    <span className="form-bar"></span>
                  </div>
                  <div className="row m-t-25 text-left">
                  </div>
                  <div className="row m-t-30">
                      <button
                        type="button"
                        className="btn btn-brown btn-md btn-block waves-effect waves-light text-center m-b-20" 
                        onClick={sendMail}
                      >
                      Send Message
                      </button>
                  </div>
                  <p style={{ textAlign: "center",marginTop:"15px" }}>
                        Already have an account ?{" "}
                        <Link to="/login">
                          <span style={{ color: "#8FD3FF" }}>Sign in</span>
                        </Link>
                      </p>
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

export default ContactUs;
