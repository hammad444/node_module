import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCaretDown} from "react-icons/ai";
import CitationBox from './CitationBox';
import StatuteBox from "./StatuteBox";

import { getBookmark } from '../actions/otherDataActions';

const StatuteRefResult = (props) => {
  const dispatch = useDispatch();

    const caseOne = useSelector((state) => state.caseOne);
    const _case=caseOne.case

    const refCases = useSelector((state) => state.refCases);
    const cases=refCases.cases
    
    const loginUser = useSelector((state) => state.loginUser);
const { userInfo } = loginUser;
    // ---------------------------------------------------
    const bookmarkmsg = useSelector((state) => state.bookmark);
const bkmsg=bookmarkmsg.success

    useEffect(()=>{
  if(bkmsg && bkmsg==true){
  dispatch(getBookmark(userInfo?.id))
  }
    },[bkmsg])
      // ----------------bookmarks-------------------------

  const bookmarkList = useSelector((state) => state.bookmarkList);
  const bookmarks=bookmarkList.bookmarks

  const [bookmark, setBookmark]=useState([])

  useEffect(() => {
    if(bookmarks?.Citation_ids.length > -1){
      let arr=bookmarks?.Citation_ids.map((obj)=>{
        return obj.id
      })
      setBookmark(arr)
    }

  }, [ bookmarks]);

    // ---------------------------------
    const openRefCases = () => {
      var caselaw = document.querySelector(".statute_ref_results");
      caselaw.style.display = "none";
      var caseref = document.querySelector(".case_ref_results");
      caseref.style.display = "block";
    };
    const openRefStatutes = () => {
      var caselaw = document.querySelector(".case_ref_results");
      caselaw.style.display = "none";
      var caseref = document.querySelector(".statute_ref_results");
      caseref.style.display = "block";
    };

  return (
    <div>
      <StatuteBox action={props.action}/>
    <div className="card" id="accordion">
    {cases && cases?.length <= 1?<div className="card-header results_length m-0" id="headingOne">This Statute is cited in {cases.length} cases 
    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"><AiFillCaretDown/></button>
    </div>:
    cases && cases?.length > 1?<div className="card-header results_length m-0" id="headingOne">This Statute is cited in {cases.length} cases 
        <button className="btn-collapse" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><AiFillCaretDown/></button>
    </div>:null}
    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
    {cases && cases?.length >0?
cases.map((obj)=>{
return <CitationBox case={obj} type={"statutes"} bookmarks={bookmark?.includes(obj.Citation_id)} action1={openRefCases} action2={openRefStatutes}/>
}):null}
</div>
</div>
    </div>
  )
}

export default StatuteRefResult