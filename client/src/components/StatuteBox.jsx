import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import {
    AiOutlineArrowLeft
  } from "react-icons/ai";


const StatuteBox = (props) => {

    const read = useSelector((state) => state.statuteRead);
    const reading=read.read

  return (

    <div className="card my-1">
    <div className="card-header">
        <button className='btn btn-brown d-flex align-items-center' onClick={props.action} >
          <AiOutlineArrowLeft/> <span> Back</span></button>
        </div>
         {reading && reading ?
        <div className='citation-box mt-1'>
       <div className="card">
    <ul className="list-group list-group-flush">
    <li className="list-group-item"><span className="text-primary">Act/Ordinance :</span> {reading?.Statute_id}</li>
  </ul>
  <div className="card-body head-notes-box py-1">
<h3> Read Statute</h3>
{reading?.Read_Statute}
  </div>
</div> 
</div>:null}
</div>


  )
}

export default StatuteBox