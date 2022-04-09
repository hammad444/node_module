import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePayment } from "../actions/paymentActions";
import {AiOutlineCheck,AiOutlineClose} from "react-icons/ai";
const PaymentForm = (props) => {
  const dispatch = useDispatch();

  const [inputField, setInputField] = useState({
    package: props.package,
    expireAt: "",
    isPaid: props.isPaid,
  });
  const [message, setMessage] = useState(null);

  const [paid,setPaid]=useState("")

  useEffect(()=>{
    setPaid(props.isPaid)
  },[])
  // ----------------------inputs onchange handler--------------------------------
  const changeHandler = (name, value) => {
    setInputField({ ...inputField, [name]: value });
    // console.log(inputField, "inputs data");
  };
  // -----------------update User-----------------------------
  const UpdateUser = (e, id) => {
    if (
      inputField.package !== "" ||
      inputField.expireAt !== "" ||
      inputField.isPaid !== ""
    ) {
      dispatch(updatePayment(inputField, props.id));
    }
  };
 
 
  return (
<div className="user-update-form">
      <form>
        <div className="card-block">
        <div className="form-group form-primary m-2 mx-4">
        <label htmlFor=""> Paid Status:</label>
        {paid=="false"?
        <div className="is-paid-cross"><i><AiOutlineClose/></i></div>
            :<div className="is-paid-tick"><i><AiOutlineCheck/></i></div>}
           </div>
        <div className="form-group form-primary m-2 mx-4">
            <label htmlFor=""> isPaid:</label>
            {paid=="false"?<input
              type="button"
              name="isPaid"
              className="chechbox-isPaid form-control ml-0"
              placeholder="isPaid"
              value={true}
              onClick={(e) => changeHandler(e.target.name, e.target.value)}
            />:
            paid=="true"?<input
              type="button"
              name="isPaid"
              className="chechbox-isPaid form-control ml-0"
              placeholder="isPaid"
              value={false}
              onClick={(e) => changeHandler(e.target.name, e.target.value)}
            />:null}
            <span className="form-bar"></span>
          </div>
          <div className="form-group form-primary m-2">
            <label htmlFor="">Package Name:</label>
            <input
              type="text"
              name="package"
              className="form-control"
              placeholder="Package Name"
              value={inputField.package}
              onChange={(e) => changeHandler(e.target.name, e.target.value)}
            />
            <span className="form-bar"></span>
          </div>
          <div className="form-group form-primary m-2">
            <label htmlFor="">expireAt:</label>
            <input
              type="date"
              name="expireAt"
              className="isPais form-control"
              placeholder=" expireAt"
              value={inputField.expireAt}
              onChange={(e) => changeHandler(e.target.name, e.target.value)}
            />
            <span className="form-bar"></span>
          </div>

          <div className="row">
            <div className="col-md-12">
              <button
                type="button"
                style={{marginTop:"30px",fontSize:"1em",borderRadius:"0"}}
                className="btn btn-brown btn-md btn-block waves-effect text-center m-b-20"
                onClick={(e) => {
                  UpdateUser(e);
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>

  </form></div>
  )
}

export default PaymentForm