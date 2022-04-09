import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../actions/userActions";

import logo1 from "../images/logo1.png";

import "../components/UserFrom.css";

const UserForm = (props) => {
  const dispatch = useDispatch();

  const [inputField, setInputField] = useState({
    macAddress: {macAddress1:props.obj.macAddress.macAddress1,macAddress2:props.obj.macAddress.macAddress2},
    contact: props.obj.contact,
    address: props.obj.address,
    city: props.obj.city,
  });
  const [message, setMessage] = useState(null);
  // ----------------------inputs onchange handler--------------------------------
  const changeHandler = (name, value) => {
    setInputField({ ...inputField, [name]: value });
    // console.log(inputField, "inputs data ");
  };

  // -----------------update User-----------------------------
  const UpdateUser = (e, id) => {
    if (
      inputField.macAddress !== {} ||
      inputField.contact !== "" ||
      inputField.address !== "" ||
      inputField.city !== ""
    ) {
      dispatch(updateUser(inputField, props.id));
    }
  };

  return (
    <div className="user-update-form">
      <form>
        <div className="card-block">
          <div className="form-group form-primary m-2">
            <label htmlFor="">MacAddress 1:</label>
            <input
              type="text"
              name="macAddress"
              className="form-control"
              placeholder="MacAddress 1"
              value={inputField.macAddress.macAddress1}
              onChange={(e) => changeHandler(e.target.name, {"macAddress1":e.target.value,"macAddress2":inputField.macAddress.macAddress2})}
            />
            <span className="form-bar"></span>
          </div>
          <div className="form-group form-primary m-2">
            <label htmlFor="">MacAddress 2:</label>
            <input
              type="text"
              name="macAddress"
              className="form-control"
              placeholder="MacAddress 2"
              value={inputField.macAddress.macAddress2}
              onChange={(e) => changeHandler(e.target.name, {"macAddress1":inputField.macAddress.macAddress1,"macAddress2":e.target.value})}
            />
            <span className="form-bar"></span>
          </div>
          <div className="form-group form-primary m-2">
            <label htmlFor="">Phone Number:</label>
            <input
              type="text"
              name="contact"
              className="form-control"
              placeholder="Phone Number"
              value={inputField.contact}
              onChange={(e) => changeHandler(e.target.name, e.target.value)}
            />
            <span className="form-bar"></span>
          </div>
          <div className="form-group form-primary m-2">
            <label htmlFor="">Address:</label>
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder=" Address"
              value={inputField.address}
              onChange={(e) => changeHandler(e.target.name, e.target.value)}
            />
            <span className="form-bar"></span>
          </div>
          <div className="form-group form-primary m-2">
            <label htmlFor=""> City Name:</label>
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder=" City Name"
              value={inputField.city}
              onChange={(e) => changeHandler(e.target.name, e.target.value)}
            />
            <span className="form-bar"></span>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button
                type="button"
                style={{marginTop:"30px",fontSize:"1em",borderRadius:"0"}}
                className="btn btn-brown btn-md btn-block text-center m-b-20"
                onClick={(e) => {
                  UpdateUser(e);
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
