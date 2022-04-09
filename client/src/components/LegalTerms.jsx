import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLegalterm, getLegalterms,casebylegalterm } from "../actions/otherDataActions";
import Alphabets from "./Alphabets";
import SideNavbar from "./SideNavbar";
import {
    useNavigate
  } from "react-router-dom";


const LegalTerms = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLegalterms());
  }, []);
  

  const legalterms = useSelector((state) => state.legalterms);
  const list = legalterms.list;

  const getTerm = (letter) => {
    dispatch(getLegalterm(letter));
  };

  const GoCitationBox=(legalterm)=> {
    dispatch(casebylegalterm({keyword:legalterm}));
    
    navigate("/search")
  
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
  
  }
  return (
    <div>
      <SideNavbar />
      <div className="legal-terms" id="pages-content">
        {/* ---------------page-header--------------- */}

        <div className="pages-header">
          <div className="row align-items-center">
            <div className="page-header-title">
              <h2>Legal Terms</h2>
            </div>
          </div>
        </div>
        {/* ---------------page-content--------------- */}
        <div className="m-3 pages-content">
          <div className="card mb-1">
            <div className="card-header alphabets-header">
              <Alphabets action={getTerm} />
            </div>
          </div>
          {list && list?.length <= 1 ? (
            <strong className="result_length">
              Legal Terms Result : {list.length} item found
            </strong>
          ) : list && list?.length > 1 ? (
            <strong className="result_length">
              Legal Terms Result : {list.length} items found
            </strong>
          ) : null}

          {list?.length>0 ? (
            <div className="card mt-1">
              <div className="card-block table-border-style">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th className="col-1">#</th>
                        <th>Legal Terms</th>
                        <th className="text-right">Case Laws</th>
                      </tr>
                    </thead>
                    <tbody>
                    {list &&
                        list?.map((obj, index) => {
                          return (
                            <tr>
                              <th className="col-1">{index+1}</th>
                              <td>
                                <a>{obj.Legal_Terms}</a>
                              </td>
                              <td className="caselaw-text text-right" 
                              onClick={(e)=>{GoCitationBox(obj.Legal_Terms)}}>
                        Case Law
                        </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      ;
    </div>
  );
};

export default LegalTerms;
