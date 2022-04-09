
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { deletePayment,updatePayment} from '../actions/paymentActions';

function Counter(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = useSelector((state) => state.loginUser);
  const { userInfo } = loginUser;

    const [expiry, setExpiry] = useState("Package Expired!");


    const calculateTimeLeft = () => {
        const difference = +new Date(props.expiry) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((difference / 1000 / 60) % 60),
              seconds: Math.floor((difference / 1000) % 60)
            };
          }
          return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());

    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);

      });



const timerComponents = [];

Object.keys(timeLeft).forEach((interval) => {
  if (!timeLeft[interval]) {
    return;
  }
  timerComponents.push(
    <span>
      {timeLeft[interval]} {interval}{" "}
    </span>
  );
});


const Expired=()=>{
    dispatch(updatePayment({
     expireAt: "",
    isPaid: "expire"}
    , userInfo?.id));
    navigate("/packages");
}

  return (
    <div className="counter m-2">
<span className="timer px-2 py-1"> {timerComponents.length ? <u>Package will Expire after {timerComponents}</u> : <span onRender={Expired()}>{expiry}</span>}</span>
    </div>
  );
}

export default Counter;
