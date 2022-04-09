import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourtTable from './CourtTable';
import SingleCitation from "./SingleCitation";

import { getBookmark } from '../actions/otherDataActions';

const OtherResults = (props) => {
  const dispatch = useDispatch();

    const caseOne = useSelector((state) => state.caseOne);
const _case=caseOne.case

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

// ----------------action closing--------------------

  const CloseCaseBox=(ref)=> {
    var courtTable = document.querySelector(".court_table_"+ props.search)
    courtTable.style.display="block";
    var casebox = document.querySelector(".read_case_box_" + props.search)
    casebox.style.display="none";
  }

  return (
    <div>
      <div className={"court_table_" + props.search}>
    <CourtTable search={props.search} result={props.result}/>
    </div>
    <div className={"read_case_box read_case_box_" + props.search}>
    <SingleCitation case={_case} type={props.search} bookmarks={bookmark?.includes(_case?.Citation_id)} action={CloseCaseBox}/>
    </div>
    </div>
  )
}

export default OtherResults