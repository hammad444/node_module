import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../actions/userActions";

import "./UserFrom.css";

const PasswordForm = () => {
  const dispatch = useDispatch();

  const loginUser = useSelector((state) => state.loginUser);
  const { userInfo } = loginUser;

  const usrupdate= useSelector((state) => state.userUpdate);
  const updatemsg = usrupdate.message;

  const [inputField, setInputField] = useState({
   oldPassword:"",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState(null);

  useEffect(() => {
    setMessage(updatemsg?.message)
    // setTimeout(() => {  setMessage(null) }, 2000);
  }, [updatemsg]);
  
  // ----------------------inputs onchange handler--------------------------------
  const changeHandler = (name, value) => {
    setInputField({ ...inputField, [name]: value });
    // console.log(inputField, "inputs data");
  };

  // -----------------update User-----------------------------
  const UpdateUser = (e) => {
    if(inputField.newPassword !== inputField.confirmPassword){
      setMessage("Password Doesn't match!")
    }else if(inputField.newPassword.length < 6){
      setMessage('password length is less than 6')
    }else if (
      inputField.oldPassword !== "" ||
      inputField.newPassword !== "" ||
      inputField.confirmPassword !== ""
    ) {
      dispatch(updatePassword(inputField, userInfo?.id));
    }
  };
// --------------------------------------------


  return (
    <div className="w-100 user-update-form">
      <form className="w-100 password-form px-5 py-5 bg-white">
      {message && <p className="alerts">{message}  { message=="Wrong old Password!" && <Link to="/password">(Please! verify Its you)</Link>}</p>}
        <div className="card-block d-flex">

                      <div className="form-group form-primary mr-3">
                      <label htmlFor="">Old Password:</label>
                        <input
                          type="text"
                          name="oldPassword"
                          className="form-control"
                          placeholder="Old Password"
                          value={inputField.oldPassword}
                          onChange={(e)=>changeHandler(e.target.name, e.target.value)}
                        />
                        <span className="form-bar"></span>
                      </div>
                      <div className="form-group form-primary mr-3">
                      <label htmlFor="">New Password:</label>
                        <input
                          type="text"
                          name="newPassword"
                          className="form-control"
                          placeholder="New Password"
                          value={inputField.newPassword}
                          onChange={(e)=>changeHandler(e.target.name, e.target.value)}
                        />
                        <span className="form-bar"></span>
                  </div>
                  <div className="form-group form-primary mr-3">
                  <label htmlFor="">Confirm Password:</label>
                    <input
                      type="text"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={inputField.confirmPassword}
                      onChange={(e)=>changeHandler(e.target.name, e.target.value)}
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
                Change Password
              </button>
            </div>
        </div>
      </form>
    </div>
  );
};

export default PasswordForm;
