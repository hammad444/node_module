import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideNavbar from "./SideNavbar";
import StatutesTable from "./StatutesTable";
import AlphabetStatutes from "./AlphabetStatutes";
import Alphabets from "./Alphabets";
import {getOrdinance } from '../actions/dataActions';

const StatutesPage = () => {
  const dispatch = useDispatch();
  
  const getOrdinanceNames=(letter)=>{
    dispatch(getOrdinance(letter));
  }


  const ordinanceNames = useSelector((state) => state.ordinanceNames);
  const ordinance=ordinanceNames.ordinance



  return (
    <div>
      <SideNavbar />
      <div className="statutes-page">
        {/* ---------------page-header--------------- */}

        <div className="pages-header">
          <div className="row align-items-center">
            <div className="page-header-title">
              <h2>Statutes</h2>
            </div>
          </div>
        </div>
        {/* ---------------page-content--------------- */}
        <div className="m-3 pages-content">
          <div className="card mb-1">
            <div className="card-header alphabets-header">
              <Alphabets action={getOrdinanceNames}/>
            </div>
          </div>
          <AlphabetStatutes ordinance={ordinance}/>
          <StatutesTable />
        </div>
      </div>
      ;
    </div>
  );
};

export default StatutesPage;
