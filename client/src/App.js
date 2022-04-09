
import "./App.css"
import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

import {
  Routes,
  Route,
} from "react-router-dom";

import MainPage from './components/MainPage';
import Header from './components/Header';
import SignUpPage from "./components/SignUpPage"
import LoginOrSignUp from "./components/LoginOrSignUp"
import LoginPage from "./components/LoginPage"
import PricingPlan from "./components/PricingPlan"
import PaymentPage from "./components/PaymentPage"
import ProfilePage from "./components/ProfilePage";
import SearchForm from "./components/SearchForm";
import LegalTerms from "./components/LegalTerms";
import ArticlesPage from "./components/ArticlesPage";
import TopicsPage from "./components/TopicsPage";
import StatutesPage from "./components/StatutesPage";
import Dictionary from "./components/Dictionary";
import Bookmarks from "./components/Bookmarks";
import Admin from "./dashboard/Admin"
import Users from "./dashboard/Users"
import Payments from './dashboard/Payments';
import Packages from './dashboard/Packages';
import Settings from "./dashboard/Settings";
import UploadData from "./dashboard/UploadData";
import ResetPassword from "./components/ResetPassword";
import LawyersDairy from "./components/LawyersDairy";
import ContactUS from "./components/ContactUS";
import PaidUsers from "./dashboard/PaidUsers";
import {getPayment } from "./actions/paymentActions";
// import Captcha from "./components/Captcha";

function App() {
      const dispatch = useDispatch();

  const menuFunction=()=>{
    var x = document.getElementById("side-navbar");

    if (x.style.marginLeft ==="-230px") {
      x.style.marginLeft = "0";

    } else {
      x.style.marginLeft = "-230px";
    }    
}

const loginUser = useSelector((state) => state.loginUser);
const {userInfo}=loginUser
// console.log(userInfo, error, "login data from redux....");

const Payment = useSelector((state) => state.getPayment);
const payment=Payment.payment
// console.log(payment, "user payment data from redux....");

useEffect(() => {
      if(userInfo?.id){
      dispatch(getPayment(userInfo.id));
      }
    }, [dispatch,userInfo]);

  return (
    <div className="App">
      <Header function={menuFunction}/>
    {/* <Captcha/> */}
      <Routes>
{/*----------------all routes-----------------  */}

      <Route path="login" element={<LoginPage />}></Route>
      <Route path="signup" element={<SignUpPage />}></Route>
      <Route path="password" element={<ResetPassword />}></Route>
      <Route path="contact" element={<ContactUS />}></Route>

      {userInfo && userInfo?.isAdmin ===  false ?
      <Route path="/" element={payment?.isPaid=== "true"?<MainPage />:<PaymentPage/>}></Route>:
      userInfo && userInfo?.isAdmin ===  true?
      <Route path="/" element={<Admin/>}></Route>:
      <Route path="/" element={<LoginOrSignUp/>}></Route>}

 {/*----------------user routes-----------------  */}


{userInfo && userInfo?.isAdmin ===  false?
      <Route path="packages" element={<PricingPlan />}></Route>:null}

{userInfo && userInfo?.isAdmin ===  false?
      <Route path="profile" element={<ProfilePage />}></Route>:null}

{userInfo && userInfo?.isAdmin ===  false?
  <Route path="payment" element={<PaymentPage />}></Route>:null}

{userInfo && userInfo?.isAdmin ===  false && payment?.isPaid=== "true"?
      <Route path="search" element={<SearchForm />}></Route>:null}

{userInfo && userInfo?.isAdmin ===  false && payment?.isPaid=== "true"?
      <Route path="/legal-terms" element={<LegalTerms />}></Route>:null}

{userInfo && userInfo?.isAdmin ===  false && payment?.isPaid=== "true"?
      <Route path="/articles" element={<ArticlesPage />}></Route>:null}

{userInfo && userInfo?.isAdmin ===  false && payment?.isPaid=== "true"?
      <Route path="/topics" element={<TopicsPage />}></Route>:null}

{userInfo && userInfo?.isAdmin ===  false && payment?.isPaid=== "true"?
      <Route path="/statutes" element={<StatutesPage />}></Route>:null}

{userInfo && userInfo?.isAdmin ===  false && payment?.isPaid=== "true"?
      <Route path="/dictionary" element={<Dictionary />}></Route>:null}

{userInfo && userInfo?.isAdmin ===  false && payment?.isPaid=== "true"?
      <Route path="/bookmarks" element={<Bookmarks />}></Route>:null}

{userInfo && userInfo?.isAdmin ===  false && payment?.isPaid=== "true"?
      <Route path="/lawyersdairy" element={<LawyersDairy />}></Route>:null}

      {/*----------------admin routes-----------------  */}

      {userInfo && userInfo?.isAdmin ===  true?
      <Route path="dashboard/users" element={<Users />}></Route>:null}

{userInfo && userInfo?.isAdmin ===  true?
      <Route path="dashboard/paid" element={<PaidUsers />}></Route>:null}

{userInfo && userInfo?.isAdmin ===  true?
      <Route path="dashboard/payments" element={<Payments />}></Route>:null}

{userInfo && userInfo?.isAdmin ===  true?
      <Route path="dashboard/packages" element={<Packages />}></Route>:null}
    
    {userInfo && userInfo?.isAdmin ===  true?
      <Route path="dashboard/settings" element={<Settings />}></Route>:null}

{userInfo && userInfo?.isAdmin ===  true?
      <Route path="dashboard/uploadData" element={<UploadData />}></Route>:null}

    </Routes>

    </div>
  );
}

export default App;
