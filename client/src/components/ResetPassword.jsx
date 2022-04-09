import React, { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./UserFrom.css";

import logo from "../images/logo.png";
import logo1 from "../images/logo1.png";

import { login } from "../actions/userActions";
import { getPayment} from '../actions/paymentActions';
import { updatePassword } from "../actions/userActions";
import { setBookmark } from "../actions/otherDataActions";
import { sendOtp,matchOtp,changePassword } from "../actions/otpActions";


function ResetPassword() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  const otp = useSelector((state) => state.otp);
  const otpmsg=otp.message

  useEffect(()=>{
    setMessage(otpmsg)
    if(otpmsg == "Invalid Contact Number"){
      firstForm()
    }else if(otpmsg == "If doesn't receive the code!"){
      secondForm()
    }else if(otpmsg == "Now create new password"){
      thirdForm()
    }else if(otpmsg=="Change password successfully"){
      navigate("/login")
    }
  },[otpmsg])

// --------------------------------------------
var fform=document.getElementsByClassName("first-form")[0]
var sform=document.getElementsByClassName("second-form")[0]
var tform=document.getElementsByClassName("third-form")[0]
const firstForm=()=>{
 fform?.classList.add("d-block")
 fform?.classList.remove("d-none")
 sform?.classList.add("d-none")
 sform?.classList.remove("d-block")
 tform?.classList.add("d-none")
 tform?.classList.remove("d-block")
}
const secondForm=()=>{
  fform?.classList.add("d-none")
  fform?.classList.remove("d-block")
  sform?.classList.add("d-block")
  sform?.classList.remove("d-none")
  tform?.classList.add("d-none")
  tform?.classList.remove("d-block")
}
const thirdForm=()=>{
  fform?.classList.add("d-none")
  fform?.classList.remove("d-block")
  sform?.classList.add("d-none")
  sform?.classList.remove("d-block")
  tform?.classList.add("d-block")
  tform?.classList.remove("d-none")
}

// -------------------otp request-------------------------

const [otpRequest, setOtpRequest] = useState({
  email:"",
   contact: "",
 });
 const changeOtpHandler = (name, value) => {
  setOtpRequest({ ...otpRequest, [name]: value });
  // console.log(otpRequest, "otprequest fields");
};

const sendOtpDetails=()=>{
  dispatch(sendOtp(otpRequest))
}
    // -----------------otp code-----------------

   const [code, setCode]=useState("")

   const changeCodeHandler = (value) => {
    setCode(value);
    // console.log(code, "otprequest fields");
  };
  
  const confirmCode=()=>{
    dispatch(matchOtp({email:otpRequest.email,code:code}))
  }

    // ----------------------change password--------------------------------
    const [passwordField, setPasswordField] = useState({
      newPassword: "",
      confirmPassword: "",
    });
  
    const changePasswordHandler = (name, value) => {
      setPasswordField({ ...passwordField, [name]: value });
      // console.log(passwordField, "password fields");
    };
  
    const resetPassword = (e) => {
      if(passwordField.newPassword !== passwordField.confirmPassword){
        setMessage("Password Doesn't match!")
      }else if(passwordField.newPassword.length < 6){
        setMessage('password length is less than 6')
      }else if (
        passwordField.newPassword !== "" ||
        passwordField.confirmPassword !== ""
      ) {
        dispatch(changePassword({email:otpRequest.email,newPassword:passwordField.newPassword}));
      }
    };
  // -------------------------------
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
                      <h3 className="text-center">Reset Password</h3>
                    </div>
                  </div>
                  {message && message=="If doesn't receive the code!"? <p className="alerts">{message} <u onClick={sendOtpDetails}>Resend it</u></p>:
                  message && <p className="alerts">{message}</p>}
                   {/* --------------------- */}
                   <div className="first-form d-block">
                  <div className="form-group form-primary">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Account Email"
                      onChange={(e) => changeOtpHandler(e.target.name,e.target.value)}
                    />
                    <span className="form-bar"></span>
                  </div>
                  <div className="form-group form-primary">
                    <input
                      type="text"
                      name="contact"
                      className="form-control"
                      placeholder="Phone Number"
                      onChange={(e) => changeOtpHandler(e.target.name,e.target.value)}
                    />
                    <span className="form-bar"></span>
                  </div>
                  <div className="row m-t-30">
                    <Link to="" className="col-md-12">
                      <button
                        type="button"
                        className="btn btn-brown btn-md btn-block waves-effect waves-light text-center m-b-20" 
                        onClick={sendOtpDetails}
                      >
                      Send Code
                      </button>
                    </Link>
                  </div>
                  </div>
                  {/* --------------------- */}
                  <div className="second-form d-none">
                  <div className="form-group form-primary">
                    <input
                      type=""
                      name="code"
                      className="form-control"
                      placeholder="Otp Code"
                      onChange={(e) => changeCodeHandler(e.target.value)}
                    />
                    <span className="form-bar"></span>
                  </div>
                  <div className="row m-t-30">
                    <Link to="" className="col-md-12">
                      <button
                        type="button"
                        className="btn btn-brown btn-md btn-block waves-effect waves-light text-center m-b-20" 
                        onClick={confirmCode}
                      >
                      Confirm Code
                      </button>
                    </Link>
                  </div>
                  </div>
                  {/* ----------------------- */}
                  <div className="third-form d-none">
                                    <div className="form-group form-primary">
                    <input
                      type="password"
                      name="newPassword"
                      className="form-control"
                      placeholder="New Password"
                      onChange={(e) => changePasswordHandler(e.target.name,e.target.value)}
                    />
                    <span className="form-bar"></span>
                  </div>
                  <div className="form-group form-primary">
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="confirm Password"
                      onChange={(e) => changePasswordHandler(e.target.name,e.target.value)}
                    />
                    <span className="form-bar"></span>
                  </div> 
                   <div className="row m-t-30">
                    <Link to="" className="col-md-12">
                      <button
                        type="button"
                        className="btn btn-brown btn-md btn-block waves-effect waves-light text-center m-b-20" 
                        onClick={resetPassword}
                      >
                      Reset Password
                      </button>
                    </Link>
                  </div>
                  </div>
                  {/* ----------------------- */}
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

export default ResetPassword;
