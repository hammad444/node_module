import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  useNavigate
} from "react-router-dom";

import {getCases, getCase } from '../actions/dataActions';

const CourtTable = (props) => {
  const navigate=useNavigate()
  const dispatch = useDispatch();

    const desc = useSelector((state) => state.caseDesc);
    const description=desc.description

    const GoCitationBox=(Citation_id)=> {
      dispatch(getCase({Citation_id:Citation_id}));

      var courtTable = document.querySelector(".court_table_"+ props.search)
      courtTable.style.display="none";
      var casebox = document.querySelector(".read_case_box_" + props.search)
      casebox.style.display="block";
    }

  return <div>
       <div className='court-table'>
       {props.result && props.result?.length <= 1?<strong className="result_length">Citations Result : {props.result.length} item found</strong>:
        props.result && props.result?.length > 1?<strong className="result_length">Citations Result : {props.result.length} items found</strong>:null}
      {props.result && props.result?.length >0? <div className="card mt-1">
        <div class="card-block table-border-style p-1">
          <div class="table-responsive">
            <table class="table table-hover">
  <thead>
    <tr className=''>
      <th scope="col">#</th>
      <th scope="col">Citation</th>
      <th scope="col" colspan="5">Title</th>
      <th scope="col" colspan="3">Court</th>
      <th scope="col" className="nowrap">Case Law</th>
    </tr>
  </thead>
  <tbody>
  {props.result && props.result?.length >0?
props.result.map((obj, i)=>{
    return     <tr className="tr" index={i}>
    <td>{obj.id}</td>
    <td>{obj.Citation_id} </td>
    <td colspan="5"><span className="capital-font">{obj.Parties}</span><br/><span className="text-danger">{obj.Judge}</span><br/><span className="text-primary">{obj.Lawyer}</span></td>
    <td colspan="3" className="capital-font">{obj.Citation_Court}</td>
    <td className="caselaw-text" onClick={(e)=>{GoCitationBox(obj.Citation_id)}}>Case Law</td>
  </tr>
}):null}
  </tbody>

</table>
</div>
</div>
</div>:null}
  </div>
  </div>;
};

export default CourtTable;
