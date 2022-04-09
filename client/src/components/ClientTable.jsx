import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCases, getCase,getAllClientsCases,setHearingFile,caseReadIds, updateCase } from "../actions/dairyActions";
import { AiFillCaretDown } from "react-icons/ai";

const ClientTable = (props) => {
  const dispatch = useDispatch();

  const loginUser = useSelector((state) => state.loginUser);
  const {userInfo}=loginUser

  const singleClient = useSelector((state) => state.singleClient);
  const client = singleClient?.client;

  const casesListH = useSelector((state) => state.casesList);
  const hearings = casesListH?.hearings;

  const caseCreate = useSelector((state) => state.caseCreate);
  const casecreatemsg = caseCreate?.success;

  const caseUpdate = useSelector((state) => state.caseUpdate);
  const caseuptmsg = caseUpdate?.success;

  useEffect(() => {
    if(client){
      dispatch(
        getCases({ user_id: client?.user_id, client_id: client?.client_id })
      );
      dispatch(getAllClientsCases(userInfo?.id))
    }
  }, [client]);

  useEffect(() => {
    if(client){
    dispatch(
      getCases({ user_id: client?.user_id, client_id: client?.client_id })
    );
    dispatch(getAllClientsCases(userInfo?.id))
    }
  }, [casecreatemsg]);

  useEffect(() => {
    if(client){
    dispatch(
      getCases({ user_id: client?.user_id, client_id: client?.client_id })
    );
    dispatch(getAllClientsCases(userInfo?.id))
    }
  }, [caseuptmsg]);

  const readCase = (obj) => {
    dispatch(caseReadIds({user_id:obj.user_id,client_id:obj.client_id,case_number:obj.case_number}))
    var clientcase = document.getElementsByClassName("client-case")[0];
    var caseraed = document.getElementsByClassName("case-read")[0];
    clientcase.style.display = "none";
    caseraed.style.display = "block";
  };
  const nextHearing = (obj) => {
    dispatch(
      getCase({
        user_id: obj.user_id,
        client_id: obj.client_id,
        case_number: obj.case_number,
      })
    );
    var clientcase = document.getElementsByClassName("client-case")[0];
    var casehearing = document.getElementsByClassName("case-hearing")[0];
    clientcase.style.display = "none";
    casehearing.style.display = "block";
  };


  const openFiles=(obj)=>{
    dispatch(setHearingFile(obj))
    var casefiles=document.getElementsByClassName("case-files")[0]
    casefiles.style.display="block";
  }
  const openNotes=(obj)=>{
    dispatch(setHearingFile(obj))
    var casenotes=document.getElementsByClassName("case-notes")[0]
    casenotes.style.display="block";
  }
  const openDesc=(obj)=>{
    dispatch(setHearingFile(obj))
    var casedesc=document.getElementsByClassName("case-desc")[0]
    casedesc.style.display="block";
  }

  const updateCloseCase=(close,obj)=>{
    dispatch(updateCase({case_close:close,user_id:obj.user_id,client_id:obj.client_id},obj.case_number))
  }
  return (
    <div className="client-table card">
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Case Title</th>
              <th scope="col">Case Date</th>
              <th scope="col">Hearing Date</th>
              <th scope="col">Hearing Time</th>
              <th scope="col">Court</th>
              <th scope="col">City</th>
              <th scope="col">Read</th>
              <th scope="col">Next Hearing</th>
              <th scope="col">Prev Hearing</th>
              <th scope="col">Case closed</th>
            </tr>
          </thead>
          <tbody id="accordion">
            {props.cases &&
              props.cases.map((obj, index) => {
                return (
                  <tr className="tr position-relative">
                    <th>{index + 1}</th>
                    <th>{obj.case_title}</th>
                    <td>{obj.case_date}</td>
                    <td>{obj.hearing_date}</td>
                    <td>{obj.hearing_time}</td>
                    <td>{obj.case_court}</td>
                    <td>{obj.case_city}</td>
                    <td
                      className="btn-text"
                      onClick={() => {
                        readCase(obj);
                      }}
                    >
                      Read
                    </td>
                    <td
                      className="btn-text"
                      onClick={() => {
                        nextHearing(obj);
                      }}
                    >
                      Next Hearing
                    </td>
                    <td
                      className="btn-text"
                    >
                      Prev Hearing <i 
                      className="btn btn-link collapsed p-0"
                      id={"headingOne_" + index}
                      data-toggle="collapse"
                      data-target={"#collapseOne_" + index}
                      aria-expanded="false"
                      aria-controls={"collapseOne_" + index}><AiFillCaretDown /></i>
                    </td>
                    <td>
                      <button className="open-case-button m-0 py-1" onClick={()=>{updateCloseCase(obj.case_close=="close"?"closed":"close",obj)}}>{obj.case_close}</button>
                    </td>
                    {/* --------------hearings----------------- */}
                    <div
                      id={"collapseOne_" + index}
                      aria-labelledby={"headingOne_" + index}
                      data-parent="#accordion"
                      className="hearing-list collapse p-2 border"
                    >
                      <div>{
                        hearings && hearings.map((hr, i)=>{
                          return <div className="d-flex">
                             {obj.case_number==hr.case_number &&
                            <h6 className="py-1"><b className="index">{i + 1}</b> 
                            <span><strong className="mr-3">Last Hearing:</strong>{ hr.hearing_date}</span>
                            <u className="px-3" onClick={()=>{openDesc(hr.case_desc)}}>Read Case</u>
                            <u className="px-3" onClick={()=>{openNotes(hr.case_notes)}}>Read Notes</u>
                            <u className="px-3" onClick={()=>{openFiles(hr.case_files)}}>Check Uploads</u>
                            </h6>}
                            </div>
                        })
                      }
                      </div>
                    </div>
                    {/* ------------------------- */}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientTable;
