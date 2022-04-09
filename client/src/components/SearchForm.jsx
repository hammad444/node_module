import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideNavbar from "./SideNavbar";

import { getJournals,getCitationIds } from "../actions/dataActions";

import CaseLawResult from "./CaseLawResult.jsx";
import OtherResults from "./OtherResults";
import IndexSearch from "./IndexSearch";
import CaseSearch from "./CaseSearch";
import CitationSearch from "./CitationSearch";
import CourtSearch from "./CourtSearch";
import AdvanceSearch from "./AdvanceSearch";

const SearchForm = () => {
  const dispatch = useDispatch();

  const caseSearch = useSelector((state) => state.caseSearch);
  const caseResult = caseSearch.caseSearch;
  // console.log(caseResult,"case.........")

  const indexSearch = useSelector((state) => state.indexSearch);
  const indexResult = indexSearch.indexSearch;
  // console.log(indexResult,"index.........")

  const citationSearch = useSelector((state) => state.citationSearch);
  const citationResult = citationSearch.citationSearch;
  // console.log(citationResult,"citation.........")

  const courtSearch = useSelector((state) => state.courtSearch);
  const courtResult = courtSearch.courtSearch;
  // console.log(courtResult,"court.........")

  const advanceSearch = useSelector((state) => state.advanceSearch);
  const advanceResult = advanceSearch.advanceSearch;
  // console.log(advanceResult,"advance.........")

  useEffect(()=>{
    dispatch(getJournals())
  },[])

  useEffect(()=>{
    dispatch(getCitationIds())
      },[])
  return (
    <div>
      <SideNavbar />
      <div className="search-content tab-content" id="v-pills-tabContent">
        {/* --------------------tab-one----------------- */}
        <div
          className="m-3 tab-pane fade active show"
          id="v-pills-one"
          role="tabpanel"
          aria-labelledby="v-pills-one-tab"
        >
          <CaseSearch />
          <div className="search-result">
            <CaseLawResult result={caseResult}/>
          </div>
        </div>
        {/* --------------------tab-two----------------- */}

        <div
          className="m-3 tab-pane fade"
          id="v-pills-two"
          role="tabpanel"
          aria-labelledby="v-pills-two-tab"
        >
          <IndexSearch />
          <div className="search-result">
            <OtherResults search={"index"} result={indexResult}/>
          </div>
        </div>
        {/* --------------------tab-three----------------- */}

        <div
          className="m-3 tab-pane fade"
          id="v-pills-three"
          role="tabpanel"
          aria-labelledby="v-pills-three-tab"
        >
          <CitationSearch />
          <div className="search-result">
            <OtherResults search={"citation"} result={citationResult}/>
          </div>
        </div>
        {/* --------------------tab-four----------------- */}

        <div
          className="m-3 tab-pane fade"
          id="v-pills-four"
          role="tabpanel"
          aria-labelledby="v-pills-four-tab"
        >
          <CourtSearch />
          <div className="search-result">
            <OtherResults search={"courtwise"} result={courtResult}/>
          </div>
        </div>
        {/* --------------------tab-five----------------- */}

        <div
          className="m-3 tab-pane fade"
          id="v-pills-five"
          role="tabpanel"
          aria-labelledby="v-pills-five-tab"
        >
          <AdvanceSearch />
          <div className="search-result">
            <OtherResults search={"advance"} result={advanceResult}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
