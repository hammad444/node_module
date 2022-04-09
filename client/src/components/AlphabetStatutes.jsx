import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {getStatute} from '../actions/dataActions';

const AlphabetStatutes = (props) => {
  const dispatch = useDispatch();

  

  const OpenStatues = (Name) => {
    dispatch(getStatute({Ordinance_Name:Name}));
    var sttable = document.querySelector(".statutes-table");
    sttable.style.display = "block";
    var alstatutes = document.querySelector(".alphabet-statutes");
    alstatutes.style.display = "none";
  };
  return (
    <div className="alphabet-statutes">
        {props.ordinance && props.ordinance?.length <= 1?<strong className="result_length">Act/Ordinance Result : {props.ordinance.length} item found</strong>:
        props.ordinance && props.ordinance?.length > 1?<strong className="result_length">Act/Ordinance Result : {props.ordinance.length} items found</strong>:null}
      {props.ordinance && props.ordinance?.length >0?
      <div className="card mt-1">
        <div className="card-block table-border-style p-1">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
          
              {props.ordinance && props.ordinance?.length >0?


props.ordinance.map((obj, i)=>{
    return  <tr className="tr" onClick={()=>{OpenStatues(obj.Ordinance_Name)}} index={i}>
    <td>{i+1}</td>
    <td colspan="8">
{obj.Ordinance_Name}
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

export default AlphabetStatutes;
