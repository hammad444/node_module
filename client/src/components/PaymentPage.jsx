import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineArrowRight, AiOutlineCheck } from "react-icons/ai";
import Counter from "./Counter";

import { Link, useNavigate } from "react-router-dom";
// import img1 from "../images/easypaisa.png"
// import img2 from "../images/jazzcash.jpeg"
// import img3 from "../images/banktransfer.png"

import { setPayment, getPayment } from "../actions/paymentActions";
import { getPackage } from "../actions/packageActions";
import {sendEmail} from "../actions/otpActions"
import {getPayAccount} from "../actions/userActions"
const PaymentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

// -------------------------------------
  const loginUser = useSelector((state) => state.loginUser);
  const { userInfo } = loginUser;

  const paymentUser = useSelector((state) => state.paymentUser);
  const pmtmsg = paymentUser.message;
  const pmtsuccess = paymentUser.success;
  const newPayment = paymentUser.payment;

  const packageUser = useSelector((state) => state.packageUser);
  const { packageDetails } = packageUser;

  const gtPayment = useSelector((state) => state.getPayment);
  const payment = gtPayment.payment;

  const Package = useSelector((state) => state.getPackage);
  const packageusr = Package.package;

  const payAccounts = useSelector((state) => state.payAccounts);
  const paccounts = payAccounts.accounts;

  useEffect(() => {
    dispatch(getPayment(userInfo?.id));
  }, [userInfo]);

  useEffect(() => {
    if(payment){
      dispatch(getPackage(payment?.package));
    }
    // console.log(payment?.package, "pkg.............");
  }, [userInfo, payment]);

  useEffect(() => {
    setMessage(pmtmsg);
  }, [pmtsuccess]);


  useEffect(() => {
    dispatch(getPayAccount());
  }, []);

  // ----------------------set navigation--------------------------------
  useEffect(() => {
    if (!payment && !packageDetails) {
      navigate("/packages");
    }
  }, []);


  // var today = new Date();
  // var dd = String(today.getDate()).padStart(2, '0');
  // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  // var yyyy = today.getFullYear();
  // today = mm + '/' + dd + '/' + yyyy;

  const [receipt, setReceipt] = useState("No Receipt");
  const [isPaid, setIsPaid] = useState("false");

  const [paymentObject, setPaymentObject] = useState({
    id: userInfo?.id,
    email: userInfo?.email,
    package: packageDetails && packageDetails?.package?.toLowerCase(),
    receipt: receipt,
    isPaid: isPaid,
  });
  const [message, setMessage] = useState(null);

  // console.log(paymentObject, "paymentObject...........");
  const ClosePaymentPage = () => {
    var paypage = document.querySelector(".payment-page");
    paypage.style.display = "none";
  };

  const MethodSelect = (e) => {
    // console.log(e.target.previousElementSibling);
    e.target.previousElementSibling.style.display = "block";
  };

  const paymentProceed = (e) => {
    var pbox = document.querySelector(".payment-box");
    var pform = document.querySelector(".payment-form");
    pbox.style.display = "none";
    pform.style.display = "flex";
  };

  const handleChange = (file) => {
    setPaymentObject({ ...paymentObject, receipt: file });
    // console.log(file, "file............");
  };

// ----------------------------------------

  const verifyReceipt = () => {
    if (paymentObject.receipt == "") {
      setMessage("No receipt found!");
    } else {
      dispatch(setPayment(paymentObject));
      setMessage(pmtmsg);
       dispatch(sendEmail({subject:"Verify user's Receipt!",text:"User upload the Receipt! Please verify."}))
    }
  };

  const FreeTrialAction = () => {
    ClosePaymentPage()
      dispatch(setPayment({
        id: userInfo?.id,
        email: userInfo?.email,
        package: packageDetails && packageDetails?.package?.toLowerCase(),
        receipt: receipt,
        isPaid: "true",
      }));

  };
  return (
    <div className="payment-page">
      <div className="payment-container">
        <h2> Payment Details</h2>
        {payment && payment?.isPaid == "true" ? (
          <Counter expiry={payment?.expireAt} />
        ) : null}
        {payment && payment?.isPaid == "false" ? (
          <p className="alert mx-auto my-1">
            Your Receipt Verification is Pending....
          </p>
        ) : null}
        {!payment || payment?.isPaid == "expire"? (
          <div className="payment-box">
            <div className="package-details">
              <h5>Package details</h5>
              <h6>
                Package :{" "}
                <span className="pkg-title">
                  {" "}
                  {packageDetails && packageDetails.package}{" "}
                </span>
              </h6>
              <h6>
                Duration :{" "}
                <span>{packageDetails && packageDetails.duration}</span>
              </h6>
              <h6>
                Package Fee :{" "}
                <span>Rs. {packageDetails && packageDetails.fee}/-</span>
              </h6>
              <h6>
                Registration Fee :{" "}
                <span>
                  Rs. {packageDetails && packageDetails.registration}/-
                </span>
              </h6>
              <h6>
                Total to Pay :{" "}
                <span>Rs. {packageDetails && packageDetails.total}</span>
              </h6>
            </div>
            { packageDetails?.package == "free" ||packageDetails?.package == "Free" ? (
              <div className="free-trial">
                <h5>Free Trial </h5>
                <p>
                  <b>Note:</b> Renewal / Subscription is done by online payment
                  only. You can make payment to these accounts through JAZZ CASH or EASY PAISA.
                </p>
                {/* <div className="d-flex justify-content-between">
                  <div className="w-50">
                  <h6><b>JAZZ CASH</b></h6>
                  <span>name</span><br/>
                  <span>account</span><br/>
                  <span>number</span>
                  </div>
                  <div className="w-50">
                  <h6><b>EASY PAISA</b></h6>
                  <span>name</span><br/>
                  <span>account</span><br/>
                  <span>number</span>
                  </div>
                </div> */}
                <Link to="/">
                <button
                  className="col-7 mt-4 btn btn-brown"
                  onClick={FreeTrialAction}
                >
                  Accept & Continue
                </button>
                </Link>
                {/* <button className="col-7 mt-4 btn btn-brown">Your Free Trial is Expired</button> */}
              </div>
            ) : (
              <div className="payment-methods">
                <h5>Upload your Payment Receipt </h5>
                <p>
                  <b>Note:</b> Renewal / Subscription is done by online payment
                  only. You can make payment to these accounts through:
                </p>
                <div className="accounts-payment d-flex justify-content-between mt-n2">
                <div className="w-50">
                <h6><b>JAZZ CASH</b></h6>
                  {paccounts && paccounts?.map((obj)=>{
                    if(obj.account_type=="jazzcash"){
                      return <div>
                    <span>{obj.user_name}</span><br/>
                    <span><u>{obj.account_name}</u></span><br/>
                    <span><u>{obj.account_number}</u></span>
                      </div>
                    }
                  })}
                   </div>
                  <div className="w-50">
                  <h6><b>EASY PAISA</b></h6>
                  {paccounts && paccounts?.map((obj)=>{
                    if(obj.account_type=="easypaisa"){
                      return <div>
                    <span>{obj.user_name}</span><br/>
                    <span><u>{obj.account_name}</u></span><br/>
                    <span><u>{obj.account_number}</u></span>
                      </div>
                    }
                  })}
                  </div>
                </div>
                {message && <p className="alerts">{message} </p>}
                <div className="payment-proceed-form col-12 p-0 mt-1">
                  <form className="file-form col-12">
                    <label for="formFile" class="file-label mt-2">
                      Uoload Receipt
                    </label>
                    <input
                      className="file-input ml-4"
                      type="file"
                      onChange={(e) => handleChange(e.target.files[0])}
                      id="formFile"
                    />
                  </form>
                  <button className="col-4 verify-btn" onClick={verifyReceipt}>
                    Submit to Verify
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="payment-form">
                    {payment && payment?.isPaid == "true" ? (
            <Link to="/">
            <div className="payment-close-btn" onClick={ClosePaymentPage}>
              <AiOutlineArrowRight />
            </div>
          </Link>
        ) : null}
            <div className="payment-detail">
              <h5>User Details</h5>
              <h6>
                Name : {(userInfo && userInfo.firstName, userInfo.lastName)}
              </h6>
              <h6>Email : {userInfo && userInfo.email}</h6>
              <h6>Contact : {userInfo && userInfo.contact}</h6>
              <h6>Address : {userInfo && userInfo.address}</h6>
              <h6>City :{userInfo && userInfo.city}</h6>
            </div>
            <div className="payment-summary">
              <h5>Payment Summary</h5>
              <h6>
                Package :{" "}
                <span>
                  {" "}
                  {packageDetails
                    ? packageDetails.package
                    : packageusr?.package}{" "}
                </span>
              </h6>
              <h6>
                Duration :{" "}
                <span>
                  {packageDetails
                    ? packageDetails.duration
                    : packageusr?.duration}
                </span>
              </h6>
              <h6>
                Package Fee :{" "}
                <span>
                  Rs. {packageDetails ? packageDetails.fee : packageusr?.fee}/-
                </span>
              </h6>
              <h6>
                Registration Fee :{" "}
                <span>
                  Rs.{" "}
                  {packageDetails
                    ? packageDetails.registration
                    : packageusr?.registration}
                  /-
                </span>
              </h6>
              <h6>
                Total to Pay :{" "}
                <span>
                  $ {packageDetails ? packageDetails.total : packageusr?.total}
                </span>
              </h6>
            </div>
          </div>
        )}
        {/* ---------------------------------------- */}
      </div>
    </div>
  );
};

export default PaymentPage;

{
  /* <h5>Choose payment method below</h5>
      <div className='methods-list'>
          <div className="method-box m-box-1">
              <div className="before"><AiOutlineCheck/></div>
              <img src={img1} onClick={(e)=>{MethodSelect(e)}} alt="" />
          </div>
          <div className="method-box m-box-2">
          <div className="before"><AiOutlineCheck/></div>
          <img src={img2} onClick={(e)=>{MethodSelect(e)}} alt="" />
          </div>
          <div className="method-box m-box-3">
          <div className="before"><AiOutlineCheck/></div>
          <img src={img3} onClick={(e)=>{MethodSelect(e)}} alt="" />
          </div>
          </div> */
}
