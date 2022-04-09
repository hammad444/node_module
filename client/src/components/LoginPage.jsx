import React, { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./UserFrom.css";

import logo from "../images/logo.png";
import logo1 from "../images/logo1.png";

import { login } from "../actions/userActions";
import { getPayment,updatePayment} from '../actions/paymentActions';
import { sendEmail} from '../actions/otpActions';



function LoginPage() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  const loginUser = useSelector((state) => state.loginUser);
  const {userInfo}=loginUser
  const loginmsg=userInfo?.message

  const Payment = useSelector((state) => state.getPayment);
  const payment=Payment.payment


  const mail = useSelector((state) => state.mail);
  const {msg,success}=mail

  useEffect(()=>{
    setMessage(msg)
  },[success])

  useEffect(()=>{
    setMessage(loginmsg)
  },[loginmsg])


  useEffect(() => {
    if(userInfo?.id){
    dispatch(getPayment(userInfo.id));
    }
  }, [userInfo]);


  // ----------------------form and fields validation--------------------------------
  const validateForm=(()=>{
    if(email=="" || password=="")
  {
    setMessage("Please fill all the fields")
  }else{
    // setMessage(userInfo?.message)
    dispatch(login({ email, password}));
  }
  })
    // ----------------------set navigation--------------------------------

useEffect(()=>{
  if(!userInfo) {
    navigate("/login")
  }else if(payment && payment?.isPaid=="false" ) {
    navigate("/payment")
  }else if(new Date(payment?.expireAt) < new Date()){
    dispatch(updatePayment({expireAt: "",package:payment?.package,isPaid:"expire"}, userInfo?.id));
  }else if (userInfo?.isAdmin == true || payment && payment?.isPaid=="true"){
    navigate("/")
  }else if(userInfo?.isAdmin == false && !payment) {
    navigate("/packages")
  }
},[userInfo,payment])

  // ----------------------form submit  handler--------------------------------
  const submitHandler = (e) => {
    e.preventDefault();
    validateForm();
  };
// ---------------------email send--------------------------
const emailSend=()=>{
  dispatch(sendEmail({subject:"To add device",text:`User Email: ${email}`}))
}
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
                      <h3 className="text-center">Sign In</h3>
                    </div>
                  </div>

                  {message && <p className="alerts">{message}<br/> {message == "Already two devices registered!" && <span><u onClick={emailSend} className="text-primary link-contact">Contact us </u> To register new device</span>}</p>}
                  <div className="form-group form-primary">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="form-bar"></span>
                    {/* <label className="float-label">Your Email Address</label> */}
                  </div>
                  <div className="form-group form-primary">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="form-bar"></span>
                    {/* <label className="float-label">Password</label> */}
                  </div>
                  <div className="row m-t-25 text-left">
                    <div className="col-12">
                      <div className="checkbox-fade fade-in-primary">
                        <label>
                          <input type="checkbox" value=""/>
                          <span className="cr">
                            <i className="cr-icon icofont icofont-ui-check txt-primary"></i>
                          </span>
                          <span className="text-inverse">Remember me</span>
                        </label>
                      </div>
                      <div className="forgot-phone text-right f-right">
                        <Link to="/password"
                          className="text-right f-w-600"
                        >
                          {" "}
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="row m-t-30">
                    {/* <Link to="/" className="col-md-12"> */}
                      <button
                        type="button"
                        className="btn btn-brown btn-md btn-block waves-effect waves-light text-center m-b-20" 
                        onClick={submitHandler}
                      >
                        Sign in
                      </button>
                    {/* </Link> */}
                  </div>
                  <div className="login-signup mt-3 text-center">
                  Do u want to create a new account? &nbsp; <Link to="/signup"><u>Register</u></Link> 
                  </div>
                  <hr />
                  <div className="row">
                    {/* <div className="col-md-10">
                                            <p className="text-inverse text-left m-b-0">Thank you.</p>
                                            <p className="text-inverse text-left"><a href="index.html"><b>Back to website</b></a></p>
                                        </div> */}
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

export default LoginPage;
