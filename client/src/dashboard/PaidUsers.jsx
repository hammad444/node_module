import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideNavbar from "./SideNavbar";

import {
  searchPayment,
} from "../actions/paymentActions";
import { getPackages } from "../actions/packageActions";
import { getUsers } from "../actions/userActions";

const PaidUsers = () => {
    const dispatch = useDispatch();

    const paymentsAllUsers = useSelector((state) => state.paymentsAllUsers);
    const { payments } = paymentsAllUsers;
  
    const allUsers = useSelector((state) => state.allUsers);
    const { users } = allUsers;

  
    const formatDate = (date) => {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;
      return (
        date.getMonth() +
        1 +
        "/" +
        date.getDate() +
        "/" +
        date.getFullYear() +
        "  " +
        strTime
      );
    };

    const sortBy = (function () {
        var toString = Object.prototype.toString,
            // default parser function
            parse = function (x) { return x; },
            // gets the item to be sorted
            getItem = function (x) {
              var isObject = x != null && typeof x === "object";
              var isProp = isObject && this.prop in x;
              return this.parser(isProp ? x[this.prop] : x);
            };
            
        /**
         * Sorts an array of elements.
         *
         * @param {Array} array: the collection to sort
         * @param {Object} cfg: the configuration options
         * @property {String}   cfg.prop: property name (if it is an Array of objects)
         * @property {Boolean}  cfg.desc: determines whether the sort is descending
         * @property {Function} cfg.parser: function to parse the items to expected type
         * @return {Array}
         */
        return function sortby (array, cfg) {
          if (!(array instanceof Array && array.length)) return [];
          if (toString.call(cfg) !== "[object Object]") cfg = {};
          if (typeof cfg.parser !== "function") cfg.parser = parse;
          cfg.desc = !!cfg.desc ? -1 : 1;
          return array.sort(function (a, b) {
            a = getItem.call(cfg, a);
            b = getItem.call(cfg, b);
            return cfg.desc * (a < b ? -1 : +(a > b));
          });
        };
        
      }());


    useEffect(() => {
      dispatch(getUsers())

    sortBy(payments, {
    prop: "expireAt",
    parser: function (item) {
        return new Date(item);
    }
});

    }, [payments]);
  
        // -----------------paid user-----------------------------
  
        useEffect(()=>{
            dispatch(searchPayment({ isPaid: "true" }));
        },[])

        
  

    
  return ( <div>
    <SideNavbar />
    <div className="dashboard-content-page p-0">
      <div className="card m-3">
        <div className="user-header card-header">
          <h3>
            <span>Paid Users</span>
          </h3>
        </div>
        <div className="card-block table-border-style">
          <div className="table-responsive" style={{ height: "70vh" }}>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact</th>
                  <th scope="col">ExpireAt</th>
                </tr>
              </thead>
              <tbody id="accordion" style={{ overflow: "scroll" }}>
                {payments &&
                  payments.map((obj, i) => {
                    return (
                      <>
                        <tr className="tr payment_Details_View" index={i}>
                          <th scope="row" className="read-text pkg-title">
                            {i + 1}
                          </th>
                          <td>{users && users.map((usr)=>{
                             if(usr.email==obj.email){
                              return `${usr.firstName}  `  +  `  ${usr.lastName}`
                             }
                          })}</td>
                          <td>{obj.email}</td>
                          <td>{users && users.map((usr)=>{
                             if(usr.email==obj.email){
                              return usr.contact
                             }
                          })}</td>
                          <td>{obj.expireAt}</td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    ;
   </div>
  )
}

export default PaidUsers