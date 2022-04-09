import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../actions/userActions";

import Select from "react-select";
import "./UserFrom.css";


const UserForm = () => {
  const dispatch = useDispatch();

  const loginUser = useSelector((state) => state.loginUser);
  const { userInfo } = loginUser;

  const usrupdate= useSelector((state) => state.userUpdate);
  const updatemsg = usrupdate.message;

    
  const options = [
    { value: "lawyer", label: "lawyer" },
    { value: "judge", label: "judge" },
    { value: "student", label: "student" },
    { value: "clerk", label: "clerk" },
    { value: "others", label: "others" },
  ];

  const [inputField, setInputField] = useState({
    firstName:userInfo && userInfo.firstName,
    lastName:userInfo && userInfo.lastName,
    contact:userInfo && userInfo.contact,
    address:userInfo && userInfo.address,
    city:userInfo && userInfo.city,
    speciality:userInfo && userInfo.speciality,
    criteria:userInfo && userInfo.criteria,
  });

  const [message, setMessage] = useState(null);

  useEffect(() => {
    setMessage(updatemsg?.message)
    setTimeout(() => {  setMessage(null) }, 2000);
  }, [updatemsg]);

  // ----------------------inputs onchange handler--------------------------------
  const changeHandler = (name, value) => {
    setInputField({ ...inputField, [name]: value });
    // console.log(inputField, "inputs data");
  };

  // -----------------update User-----------------------------
  const UpdateUser = (e) => {
    e.preventDefault();
    if( inputField.firstName !== "" ||
      inputField.lastName !== "" ||
      inputField.contact !=="" ||
      inputField.address !== "" ||
      inputField.city !== "" ||
      inputField.speciality !=="" ||
      inputField.criteria !==""){
      dispatch(updateUser(inputField, userInfo?.id));
    }
  };
  return (
    <div className="user-update-form px-5 py-5 bg-white">
                {message && <p className="alerts">{message}</p>}
      <form className="d-flex">
        <div className="card-block d-flex">

                      <div className="form-group form-primary mr-3">
                      <label htmlFor="">First Name:</label>
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
                      <div className="form-group form-primary mr-3">
                      <label htmlFor="">Last Name:</label>
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
                  <div className="form-group form-primary mr-3">
                  <label htmlFor="">Contact:</label>
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
                  <div className="form-group form-primary mr-3">
                  <label htmlFor="">Address:</label>
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
                  <div className="form-group form-primary mr-3">
                  <label htmlFor="">City:</label>
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
                  <div className="form-group form-primary mr-3">
                  <label htmlFor="">Speciality:</label>
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
                  <div className="form-group form-primary mr-3">
                  <label htmlFor="">Criteria:</label>
                        <Select
                      options={options}
                      onChange={(selectedOption) => changeHandler("criteria",selectedOption.value)}
                    />
                    <span className="form-bar"></span>
                  </div>
            <div className="form-group form-primary mr-3">
              <button
                type="button"
                style={{marginTop:"30px",fontSize:"1em",borderRadius:"0"}}
                className="btn btn-success btn-md btn-block waves-effect text-center m-b-20"
                onClick={(e) => {
                  UpdateUser(e);
                }}
              >
                Save Changes
              </button>
            </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
