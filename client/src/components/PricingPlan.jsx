import React,{useState, useEffect} from 'react';
import './priceplan.css'
import { useDispatch, useSelector } from "react-redux";

import {choosePackage,getPackages} from "../actions/packageActions";
import { getPayment,updatePayment} from '../actions/paymentActions';


import {
    Link,
    useNavigate
  } from "react-router-dom";

function PricingPlan() {
    const navigate=useNavigate()
    const dispatch = useDispatch();

    const loginUser = useSelector((state) => state.loginUser);
    const { userInfo}=loginUser

    const Payment = useSelector((state) => state.getPayment);
    const payment=Payment.payment

    useEffect(()=>{
        dispatch(getPackages());
      },[dispatch])

useEffect(()=>{
    dispatch(getPayment(userInfo?.id))
},[userInfo])

  const allPackages = useSelector((state) => state.allPackages);
  const {packages } = allPackages;

    const setPackageDetails=(pkg)=>{
            dispatch(choosePackage(pkg));
    }

// ----------------------set navigation--------------------------------


useEffect(()=>{
  if(!userInfo) {
    navigate("/login")
  }else if(payment && payment?.isPaid=="false" ) {
    navigate("/payment")
  }else if(payment?.expireAt && new Date(payment?.expireAt) < new Date()){
    dispatch(updatePayment({expireAt: "",package:payment?.package,isPaid: "expire"}, userInfo?.id));
  }else if (userInfo?.isAdmin == true || payment && payment?.isPaid=="true"){
    navigate("/")
  }else if(userInfo?.isAdmin == false && !payment) {
    navigate("/packages")
  }
},[userInfo,payment])



  return(
<>
{packages?
       <section className="pricing-section">
   <div className="containe-fluidr">
      <div className="sec-title text-center">
          <h2>Choose a Plan</h2>
      </div>

      <div className="outer-box">
          <div className="row px-5">
            {packages && packages.map((obj, i)=>{
                return <div className="pricing-block col-xl-3 col-lg-4 col-md-6 col-sm-12" index={i} >
                <Link to="/payment" onClick={(e)=>{setPackageDetails(obj)}}>
                    <div className="inner-box">
                        <div className="icon-box">
                            <div className="icon-outer"><i className="fas fa-gift"></i></div>
                        </div>
                        <div className="price-box">
                            <div className="title">{obj.package}</div>
                            <h4 className="price">Rs. {obj.fee}/-</h4>
                        </div>
                        <ul className="features">
                            <li className="true">Conference plans</li>
                            <li className="true">Certificate</li>
                            <li className="false">Easy Access</li>
                        </ul>
                        <div className="btn-box">
                            <a href="#!" className="theme-btn">BUY plan</a>
                        </div>
                    </div>
                    </Link>
                </div>
            })}                
              
          </div>
      </div>
  </div>
</section>
:null}</>
  )
}

export default PricingPlan;
