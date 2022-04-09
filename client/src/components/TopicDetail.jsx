import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {getStatute} from '../actions/dataActions';

import {
  AiOutlineArrowLeft
} from "react-icons/ai";

const TopicDetails = (props) => {
  const dispatch = useDispatch();

  const backTopics=()=>{
    var toptable = document.querySelector(".topic-ordinance");
    toptable.style.display = "none";
    var alstatutes = document.querySelector(".topics");
    alstatutes.style.display = "block"; 
  }


  const OpenStatues = (Name) => {
    dispatch(getStatute({Ordinance_Name:Name}));
    var sttable = document.querySelector(".statutes-table");
    sttable.style.display = "block";
    var alstatutes = document.querySelector(".alphabet-statutes");
    alstatutes.style.display = "none";
  };
  return (
    <div className="alphabet-statutes">
        {props.ordinance && props.ordinance?.length <= 1?<strong className="result_length">Statute Name Result : {props.ordinance.length} item found</strong>:
        props.ordinance && props.ordinance?.length > 1?<strong className="result_length">Statute Name Result : {props.ordinance.length} items found</strong>:null}
      {props.ordinance && props.ordinance?.length >0?
      <div className="card mt-1">
              <div className="card-header">
        <button className='btn btn-brown d-flex align-items-center' onClick={backTopics}>
      <AiOutlineArrowLeft/> <span> Back</span></button>
      </div>
        <div className="card-block table-border-style p-1">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th className="col-1">#</th>
                  <th>Statute</th>
                </tr>
              </thead>
              <tbody>
              {props.ordinance && props.ordinance?.length >0?
props.ordinance.map((obj, i)=>{
    return  <tr className="tr" onClick={()=>{OpenStatues(obj.Statute)}} index={i}>
    <td className="col-1">{i+1}</td>
    <td colspan="8">
{obj.Statute}
    </td>
  </tr>
}):null}
              </tbody>
            </table>
          </div>
        </div>
      </div>:null}
    </div>
  );
};

export default TopicDetails;
