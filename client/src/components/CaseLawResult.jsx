import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CaseRefResult from "./CaseRefResult";
import StatuteRefResult from "./StatuteRefResult";
import CitationBox from './CitationBox';

import { getBookmark } from '../actions/otherDataActions';


const CaseLawResult = (props) => {
  const dispatch = useDispatch();

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

  // ----------------------------
  const CloseCaseBox=()=> {
    var caselaw = document.querySelector(".case_law_results")
    caselaw.style.display="block";
    var caseref = document.querySelector(".case_ref_results")
    caseref.style.display="none";
  }
    // ----------------------------
    const CloseStatuteBox=()=> {
      var caselaw = document.querySelector(".case_law_results")
      caselaw.style.display="block";
      var caseref = document.querySelector(".statute_ref_results")
      caseref.style.display="none";
    }
    // ----------------------------
const openRefCases = () => {
  var caselaw = document.querySelector(".case_law_results");
  caselaw.style.display = "none";
  var caseref = document.querySelector(".case_ref_results");
  caseref.style.display = "block";
};
// -----------------------------
const openRefStatutes = () => {
  var caselaw = document.querySelector(".case_law_results");
  caselaw.style.display = "none";
  var caseref = document.querySelector(".statute_ref_results");
  caseref.style.display = "block";
};

    const allCases = useSelector((state) => state.allCases);
    const cases=allCases.cases

    const [result , setResult]=useState("")

    useEffect(()=>{
      setResult(props.result)
    },[props.result])


    useEffect(()=>{
      setResult(cases)
    },[cases])

  return (
    <div>
    <div className='search-result case_law_results'>
    {result && result?.length <= 1?<strong className="result_length">Cases Result : {result.length} item found</strong>:
    result && result?.length > 1?<strong className="result_length">Cases Result : {result.length} items found</strong>:null}
{result && result?.length >0?
result.map((obj,i)=>{
return <CitationBox index={i} case={obj}  bookmarks={bookmark?.includes(obj.Citation_id)} action1={openRefCases} action2={openRefStatutes}/>
}):null}
</div>

<div className='case_ref_results'>
<CaseRefResult action={CloseCaseBox}/>
</div>
<div className='statute_ref_results'>
<StatuteRefResult action={CloseStatuteBox}/>
</div>
    </div>
  )
}

export default CaseLawResult