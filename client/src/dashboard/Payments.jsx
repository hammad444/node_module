import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideNavbar from "./SideNavbar";
import {
  AiFillEdit,
  AiFillDelete,
  AiFillCaretDown,
  AiOutlineSearch,
} from "react-icons/ai";

import {
  getPayments,
  deletePayment,
  searchPayment,
} from "../actions/paymentActions";
import { getPackages } from "../actions/packageActions";
import { getUsers } from "../actions/userActions";
import PaymentForm from "./PaymentForm";

const Payments = () => {
  const dispatch = useDispatch();

  const paymentsAllUsers = useSelector((state) => state.paymentsAllUsers);
  const { payments } = paymentsAllUsers;

  const allPackages = useSelector((state) => state.allPackages);
  const { packages } = allPackages;

  const allUsers = useSelector((state) => state.allUsers);
  const { users } = allUsers;

  const pmtDelete = useSelector((state) => state.paymentDelete);
  const deletemsg = pmtDelete.success;

  const pmtUpdate = useSelector((state) => state.paymentUpdate);
  const updatemsg = pmtUpdate.success;

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

  useEffect(() => {
    dispatch(getPayments());
  }, [deletemsg, updatemsg]);

  useEffect(() => {
    dispatch(getPackages());
    dispatch(getUsers())
    // console.log(".............success");
  }, [payments]);

  // -----------------delete payment-----------------------------
  const paymentDelete = (id) => {
    dispatch(deletePayment(id));
    dispatch(getPayments());
  };

  // -----------------search payment-----------------------------

  const searchPayments = (val) => {
    dispatch(searchPayment({ isPaid: val }));
  };

  return (
    <div>
      <SideNavbar />
      <div className="dashboard-content-page p-0">
        <div className="card m-3">
          <div className="user-header card-header">
            <h3>
              <span>User Payments</span>
            </h3>
            <span className="search-user">
              <button
                className="paid-user mx-1"
                onClick={() => {
                  searchPayments("true");
                }}
              >
                Paid
              </button>
              <button
                className="pending-user mx-1"
                onClick={() => {
                  searchPayments("false");
                }}
              >
                Pending
              </button>
            </span>
          </div>
          <div className="card-block table-border-style">
            <div className="table-responsive" style={{ height: "70vh" }}>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">View</th>
                    <th scope="col">Package</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Receipt</th>
                    <th scope="col">IsPaid</th>
                    <th scope="col">ExpireAt</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody id="accordion" style={{ overflow: "scroll" }}>
                  {payments &&
                    payments.map((obj, i) => {
                      return (
                        <>
                          <tr className="tr payment_Details_View" index={i}>
                            <td
                              id={"headingOne_" + i}
                              class="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target={"#collapseOne_" + i}
                              aria-expanded="false"
                              aria-controls={"collapseOne_" + i}
                            >
                              <AiFillCaretDown />
                            </td>
                            <th scope="row" className="read-text pkg-title">
                              {obj.package}
                            </th>
                            <td>{obj.email}</td>
                            <td>{users && users.map((usr)=>{
                               if(usr.email==obj.email){
                                return usr.contact
                               }
                            })}</td>
                            <td>
                              <div className="receipt-img">
                                <img src={obj?.receipt} alt={obj?.receipt} />
                              </div>
                            </td>
                            <td>{obj.isPaid}</td>
                            <td>{obj.expireAt}</td>
                            <td
                              id={"headingTwo_" + i}
                              class="edit-payment-btn btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target={"#collapseTwo_" + i}
                              aria-expanded="false"
                              aria-controls={"collapseTwo_" + i}
                            >
                              <AiFillEdit />
                            </td>
                            <td
                              colSpan={1}
                              className="delete-icons text-center"
                              onClick={() => {
                                paymentDelete(obj.id);
                              }}
                            >
                              <AiFillDelete />
                            </td>
                            {/* ---------payment deatils start------------------- */}
                            <div
                              className="collapse card payment_Details_After p-3"
                              id={"collapseOne_" + i}
                              aria-labelledby={"headingOne_" + i}
                              data-parent="#accordion"
                            >
                              <div className="d-flex">
                                <div className="payment-item">
                                  <h5>Package Details</h5>
                                  <br />
                                  <p>
                                    <b>Duration:</b>{" "}
                                    <span
                                      style={{ textTransform: "capitalize" }}
                                    >
                                      {packages?.map((pkg) => {
                                        if (pkg.package === obj.package) {
                                          return pkg.duration;
                                        }
                                      })}
                                    </span>
                                  </p>
                                  <p>
                                    <b>Package Fee:</b>{" "}
                                    <span
                                      style={{ textTransform: "capitalize" }}
                                    >
                                      {packages?.map((pkg) => {
                                        if (pkg.package === obj.package) {
                                          return pkg.fee;
                                        }
                                      })}
                                    </span>
                                  </p>
                                  <p>
                                    <b>Registration Fee:</b>
                                    <span
                                      style={{ textTransform: "capitalize" }}
                                    >
                                      {packages?.map((pkg) => {
                                        if (pkg.package === obj.package) {
                                          return pkg.registration;
                                        }
                                      })}
                                    </span>
                                  </p>
                                  <p>
                                    <b>Total Fee:</b>
                                    <span
                                      style={{ textTransform: "capitalize" }}
                                    >
                                      {packages?.map((pkg) => {
                                        if (pkg.package === obj.package) {
                                          return pkg.total;
                                        }
                                      })}
                                    </span>
                                  </p>
                                </div>
                                <div className="payment-item">
                                  <h5>Payment Details</h5>
                                  <br />
                                  <p>
                                    <b>IsPaid: </b>{" "}
                                    {obj.isPaid == "false" ? "Pending.." :obj.isPaid == "true"? "Paid":"Expire"}
                                  </p>
                                  <p>
                                    <b>Expire at: </b> {obj.expireAt}
                                  </p>
                                </div>
                                <div className="receipt_big">
                                  <img src={obj?.receipt} alt={obj?.receipt} />
                                </div>
                              </div>
                            </div>
                            {/* ---------payment form start ------------------- */}
                            {obj.isPaid !=="expire"?
                            <div
                              className="collapse card payment_Details_After p-3"
                              id={"collapseTwo_" + i}
                              aria-labelledby={"headingTwo_" + i}
                              data-parent="#accordion"
                            >
                              <PaymentForm
                                id={obj.id}
                                isPaid={obj.isPaid}
                                package={obj.package}
                              />
                            </div>:null}
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
  );
};

export default Payments;
