import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineArrowLeft} from "react-icons/ai";
import {getCasesFiles,getCasesNotes,getCasesDesc} from "../actions/dairyActions"


const CaseRead = () => {
  const dispatch = useDispatch();

  const caseReadIds = useSelector((state) => state.caseReadIds);
  const ids=caseReadIds?.ids


  const backCases=()=>{
    var clientcase=document.getElementsByClassName("client-case")[0]
    var caseread=document.getElementsByClassName("case-read")[0]
    clientcase.style.display="block";
    caseread.style.display="none";
  }
  const openFiles=()=>{
      dispatch(getCasesFiles(ids && ids))
    var casefiles=document.getElementsByClassName("case-files")[0]
    casefiles.style.display="block";
  }
  const openNotes=()=>{
    dispatch(getCasesNotes(ids && ids))
    var casenotes=document.getElementsByClassName("case-notes")[0]
    casenotes.style.display="block";
  }
  const openDescription=()=>{
    dispatch(getCasesDesc(ids && ids))
    var casedesc=document.getElementsByClassName("case-desc")[0]
    casedesc.style.display="block";
  }
  return (
    <div className='case-read card p-3'>
      <button className="back-hearing-btn" onClick={backCases}><AiOutlineArrowLeft/> Back</button>
        <div className='btns p-5'>
        <button onClick={openDescription}>Read Case Description</button>
        <button onClick={openNotes}>Read Note</button>
        <button onClick={openFiles}>Check Uploaded</button>
</div>
        </div>
  )
}

export default CaseRead