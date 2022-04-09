import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { payAccount } from "../actions/userActions";

import "../components/UserFrom.css";

const JazzCashForm = (props) => {
  const dispatch = useDispatch();

  const [inputField, setInputField] = useState({
    user_name:"",
    account_name: "",
    account_number:"",
    account_type: "jazzcash",
  });

  // ----------------------inputs onchange handler--------------------------------
  const changeHandler = (name, value) => {
    setInputField({ ...inputField, [name]: value });
  };

  // -----------------create account-----------------------------
  const createAccount = (e, id) => {
    if (
      inputField.user_name !== "" ||
      inputField.account_name !== "" ||
      inputField.account_number !== ""
    ) {
      dispatch(payAccount(inputField));
    }
  };

  return (
    <div className="user-update-form pb-3 mb-3">
      <form>
        <div className="card-block">
          <div className="form-group form-primary m-2">
            <label htmlFor="">User Name:</label>
            <input
              type="text"
              name="user_name"
              className="form-control"
              placeholder="User Name"
              onChange={(e) => changeHandler(e.target.name, e.target.value)}
            />
            <span className="form-bar"></span>
          </div>
          <div className="form-group form-primary m-2">
            <label htmlFor="">Account Name:</label>
            <input
              type="text"
              name="account_name"
              className="form-control"
              placeholder="Account Name"
              onChange={(e) => changeHandler(e.target.name, e.target.value)}
            />
            <span className="form-bar"></span>
          </div>
          <div className="form-group form-primary m-2">
            <label htmlFor="">Account Number:</label>
            <input
              type="text"
              name="account_number"
              className="form-control"
              placeholder="Account Number"
              onChange={(e) => changeHandler(e.target.name, e.target.value)}
            />
            <span className="form-bar"></span>
          </div>
          <div className="form-group form-primary m-2">
<button type="button" className="btn btn-brown save-accounts-btn" onClick={createAccount}>Save account</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JazzCashForm;
