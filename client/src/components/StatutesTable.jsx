import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PopupModel from "./PopupModel";

import { getCases, getStatuteRead } from "../actions/dataActions";

import { AiOutlineArrowLeft } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

const StatutesTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allStatutes = useSelector((state) => state.allStatutes);
  const statutes = allStatutes.statutes;

  const read = useSelector((state) => state.statuteRead);
  const reading = read.read;

  const [Name,setName]=useState('')
  const openPopup = (Statute_id,name) => {
    setName(name)
    var modal = document.querySelector(".statute-modal");
    modal.style.display = "block";
    dispatch(getStatuteRead({ Statute_id: Statute_id }));
  };

  const closePopup = () => {
    var modal = document.querySelector(".statute-modal");
    modal.style.display = "none";
  };

  const GoCitationBox = (Case_Ref) => {
    dispatch(getCases(Case_Ref.split(',')));

    navigate("/search");

    // var citboxop = document.querySelector("#v-pills-one")
    // citboxop.classList.add("active")
    // citboxop.classList.add("show")
    // var citbtnactive=document.querySelector("#v-pills-one-tab")
    // citbtnactive.classList.add("active")

    // var citboxcl = document.querySelector("#v-pills-two")
    // citboxcl.classList.remove("active")
    // citboxcl.classList.remove("show")
    //  var citbtndeactive=document.querySelector("#v-pills-two-tab")
    //  citbtndeactive.classList.remove("active")
  };

  const closeStatues = () => {
    var sttable = document.querySelector(".statutes-table");
    sttable.style.display = "none";
    var alstatutes = document.querySelector(".alphabet-statutes");
    alstatutes.style.display = "block";
  };

  return (
    <div className="statutes-table">
      {statutes && statutes?.length <= 1 ? (
        <strong className="result_length">
          Statutes Result : {statutes.length} item found
        </strong>
      ) : statutes && statutes?.length > 1 ? (
        <strong className="result_length">
          Statutes Result : {statutes.length} items found
        </strong>
      ) : null}
      <div className="card mt-1">
        <div className="card-header">
          <button
            className="btn btn-brown d-flex align-items-center"
            onClick={closeStatues}
          >
            <AiOutlineArrowLeft /> <span> Back</span>
          </button>
        </div>
        {statutes && statutes?.length > 0 ? (
          <div className="card-block table-border-style p-1">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Read</th>
                    <th scope="col">Section</th>
                    <th scope="col" colspan="5">
                      Act/Ordinance
                    </th>
                    <th scope="col" colspan="5">
                      Definition
                    </th>
                    <th scope="col">Case Law</th>
                  </tr>
                </thead>
                <tbody>
                  {statutes &&
                    statutes.map((obj, i) => {
                      return (
                        <tr className="tr" index={i}>
                          <th
                            scope="row"
                            className="read-text"
                            onClick={() => {
                              openPopup(obj.Statute_id,obj.Statute_Name);
                            }}
                          >
                            Read
                          </th>
                          <td>{obj.Section_Name}</td>
                          <td colspan="5">{obj.Ordinance_Name}</td>
                          <td colspan="5">{obj.Definition}</td>
                          <td
                            className="caselaw-text"
                            onClick={(e) => {
                              GoCitationBox(obj.Case_Ref);
                            }}
                          >
                            Case Law
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>
      <div className="modal statute-modal">
        <PopupModel 
        title={Name && Name}
        desc={reading?.Read_Statute}
         closePopup={closePopup} />
      </div>
    </div>
  );
};

export default StatutesTable;
