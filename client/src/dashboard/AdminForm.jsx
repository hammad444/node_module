import React, { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import { register } from "../actions/userActions";

function AdminForm() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputField , setInputField] = useState({
    id:uuidv4(),
    isAdmin:true,
    criteria:"admin",
    firstName:"",
    lastName:"",
    email:"",
    contact:"",
    address:"",
    city:"",
    speciality:"admin",
    university:"",
    intake:"",
    password:"",
    newsLatter:false,
    terms:true,
    
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
    if(
    inputField.firstName==="" ||
    inputField.lastName==="" ||
    inputField.email==="" ||
    inputField.contact==="" ||
    inputField.address==="" ||
    inputField.city==="" ||
    inputField.password==="")
  {
    setMessage("Please fill all the fields")
  }else if(!inputField.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
    setMessage('Email is Invalid')
  }else if(inputField.password.length < 6){
        setMessage('password length is less than 6')
  }else if(inputField.password !== inputField.confirmPassword){
   setMessage('Passwords do not match')
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
    <section className="admin-form pb-3">
      {/* <!-- Container-fluid starts --> */}
        <div className="row">
          <div className="col-sm-10">
          {message && <p className="alertss">{message}</p>}
            <form
              className="md-float-material s-form-material d-flex flex-wrap"
            >
                      <div className="form-group form-primary m-2">
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
                      <div className="form-group form-primary m-2">
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
                  <div className="form-group form-primary m-2">
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
                  <div className="form-group form-primary m-2">
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
                  <div className="form-group form-primary m-2">
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
                  <div className="form-group form-primary m-2">
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
                  {inputField.criteria === "student" ?
                  <div className="form-group form-primary m-2">
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
                  <div className="form-group form-primary m-2">
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
                      <div className="form-group form-primary m-2">
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
                      <div className="form-group form-primary m-2">
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
                    <div className="col-md-12">
                        <button
                          type="button"
                          className="btn btn-brown save-account-btn text-center"
                          onClick={submitHandler}
                        >
                          Save Account
                        </button>
                  </div>
            </form>
          </div>
          {/* <!-- end of col-sm-12 --> */}
        </div>
        {/* <!-- end of row --> */}
    </section>
  );
}

export default AdminForm;