import React, { useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { v4 as uuidv4 } from 'uuid';
import "./UserFrom.css";

import logo from "../images/logo.png";
import logo1 from "../images/logo1.png";

import { register } from "../actions/userActions";

function SignUp() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const options = [
    { value: "lawyer", label: "lawyer" },
    { value: "judge", label: "judge" },
    { value: "student", label: "student" },
    { value: "clerk", label: "clerk" },
    { value: "others", label: "others" },
  ];
  const [inputField , setInputField] = useState({
    id:uuidv4(),
    isAdmin:true,
    criteria:"",
    firstName:"",
    lastName:"",
    email:"",
    contact:"",
    address:"",
    city:"",
    speciality:"",
    university:"",
    intake:"",
    password:"",
    newsLatter:false,
    terms:"",
    
})

useEffect(()=>{
  if(inputField.criteria!=="student"){
    setInputField( { ...inputField,university: "Null",intake: "Null"} )
  }else{
    setInputField( { ...inputField,university: "",intake: ""} )
  }
},[inputField.criteria])

  const [message, setMessage] = useState(null);


  const registerUser = useSelector((state) => state.registerUser);
  const {resmessage}=registerUser

  // ----------------------inputs onchange handler--------------------------------
  const changeHandler=(name, value)=>{
    setInputField( { ...inputField,[name]: value} )
    // console.log(inputField,"inputs data")
}
// ----------------------form and fields validation--------------------------------
  const validateForm=(()=>{
    if(inputField.criteria==="" ||
    inputField.firstName==="" ||
    inputField.lastName==="" ||
    inputField.email==="" ||
    inputField.contact==="" ||
    inputField.address==="" ||
    inputField.city==="" ||
    inputField.speciality==="" ||
    inputField.password==="")
  {
    setMessage("Please fill all the fields")
  }else if(!inputField.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
    setMessage('Email is Invalid')
  }else if(inputField.password.length < 6){
        setMessage('password length is less than 6')
  }else if(inputField.password !== inputField.confirmPassword){
   setMessage('Passwords do not match')
  }else if(inputField.terms===""){
    setMessage('Accept terms & conditions')

   }else{
    dispatch(register(inputField))
    setMessage(resmessage?.message)
  }
  })

  // ----------------------set navigation--------------------------------
useEffect(()=>{
  if(resmessage?.message === "Your account is created successfully") {
    setTimeout(() => {  navigate("/login") }, 200);
  }
},[dispatch,navigate,resmessage?.message])

  // ----------------------form submit  handler--------------------------------
  const submitHandler = (e) => {
    e.preventDefault();
    validateForm();
  };

  return (
    <section className="login-block">
      {/* <!-- Container-fluid starts --> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <form
              className="md-float-material form-material"
            >
              <div className="side-logo">
                <img src={logo} alt="logo.png" style={{ width: "110px" }} />
              </div>
              <div className="auth-box-signup auth-box card">
                <div className="card-block">
                  <div className="row m-b-20">
                    <div className="col-md-12">
                      <h3 className="text-center txt-primary">Sign up</h3>
                    </div>
                  </div>
                  {message && <p className="alerts">{message}</p>}
                  <div className="form-group form-primary">
                        <Select
                      options={options}
                      onChange={(selectedOption) => changeHandler("criteria",selectedOption.value)}
                    />
                    <span className="form-bar"></span>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group form-primary">
                        <input
                          type="text"
                          name="firstName"
                          className="form-control"
                          placeholder="First Name"
                          value={inputField.firstName}
                          onChange={(e)=>changeHandler(e.target.name, e.target.value)}
                        />
                        <span className="form-bar"></span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group form-primary">
                        <input
                          type="text"
                          name="lastName"
                          className="form-control"
                          placeholder="Last Name"
                          value={inputField.lastName}
                          onChange={(e)=>changeHandler(e.target.name, e.target.value)}
                        />
                        <span className="form-bar"></span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group form-primary">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Your Email Address"
                      value={inputField.email}
                      onChange={(e)=>changeHandler(e.target.name, e.target.value)}
                    />
                    <span className="form-bar"></span>
                  </div>
                  <div className="form-group form-primary">
                    <input
                      type="text"
                      name="contact"
                      className="form-control"
                      placeholder="Your Phone Number"
                      value={inputField.contact}
                      onChange={(e)=>changeHandler(e.target.name, e.target.value)}
                    />
                    <span className="form-bar"></span>
                  </div>
                  <div className="form-group form-primary">
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      placeholder="Your  Address"
                      value={inputField.address}
                      onChange={(e)=>changeHandler(e.target.name, e.target.value)}
                    />
                    <span className="form-bar"></span>
                  </div>
                  <div className="form-group form-primary">
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      placeholder="Your  City Name"
                      value={inputField.city}
                      onChange={(e)=>changeHandler(e.target.name, e.target.value)}
                    />
                    <span className="form-bar"></span>
                  </div>
                  <div className="form-group form-primary">
                    <input
                      type="text"
                      name="speciality"
                      className="form-control"
                      placeholder="Speciality"
                      value={inputField.speciality}
                      onChange={(e)=>changeHandler(e.target.name, e.target.value)}
                    />
                    <span className="form-bar"></span>
                  </div>
                  {inputField.criteria === "student" ?
                  <div className="form-group form-primary">
                  <input
                      type="text"
                      name="university"
                      className="form-control"
                      placeholder="University"
                      value={inputField.university}
                      onChange={(e)=>changeHandler(e.target.name, e.target.value)}
                    />
                    <span className="form-bar"></span>
                  </div>:null}
                  {inputField.criteria === "student" ?
                  <div className="form-group form-primary">
                    <input
                      type="text"
                      name="intake"
                      className="form-control"
                      placeholder="Intake"
                      value={inputField.intake}
                      onChange={(e)=>changeHandler(e.target.name, e.target.value)}
                    />
                    <span className="form-bar"></span>
                  </div>:null}
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group form-primary">
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Password"
                          value={inputField.password}
                          onChange={(e)=>changeHandler(e.target.name, e.target.value)}
                        />
                        <span className="form-bar"></span>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group form-primary">
                        <input
                          type="password"
                          name="confirmPassword"
                          className="form-control"
                          placeholder="Confirm Password"
                          value={inputField.confirmPassword}
                          onChange={(e)=>changeHandler(e.target.name, e.target.value)}
                        />
                        <span className="form-bar"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row m-t-25 text-left">
                    <div className="col-md-12">
                      <div className="checkbox-fade fade-in-primary">
                        <label>
                          <input
                            type="checkbox"
                            name="terms"
                            value={true}
                            onChange={(e)=>changeHandler(e.target.name, e.target.value)}
                          />

                          <span className="text-inverse">
                            I read and accept{" "}
                            <a href="#!">Terms &amp; Conditions.</a>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="">
                        <label>
                          <input
                            type="checkbox"
                            name="newsletter"
                            value={inputField.newsletter}
                            onChange={(e)=>changeHandler(e.target.name, e.target.value)}
                          />

                          <span className="text-inverse">
                            Send me the <a href="#!">Newsletter</a> weekly.
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row m-t-30">
                    <div className="col-md-12">
                        <button
                          type="button"
                          className="btn btn-brown btn-md btn-block waves-effect text-center m-b-20"
                          onClick={submitHandler}
                        >
                          Sign up now
                        </button>
                      <p style={{ textAlign: "center",marginTop:"15px" }}>
                        Already have an account ?{" "}
                        <Link to="/login">
                          <span style={{ color: "#8FD3FF" }}>Sign in</span>
                        </Link>
                      </p>
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
          </div>
          {/* <!-- end of col-sm-12 --> */}
        </div>
        {/* <!-- end of row --> */}
      </div>
      {/* <!-- end of container-fluid --> */}
    </section>
  );
}

export default SignUp;