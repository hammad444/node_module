import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {getCase,getCitations} from '../actions/dataActions';
import { getBookmark } from '../actions/otherDataActions';
import SingleCitation from "./SingleCitation";

const BookMarkTable = (props) => {
  const dispatch = useDispatch();

  const bookmarkList = useSelector((state) => state.bookmarkList);
  const bookmarks=bookmarkList?.bookmarks

    const allCitations = useSelector((state) => state.allCitations);
    const citations=allCitations?.citations

    const desc = useSelector((state) => state.caseDesc);
    const description=desc.description

    const caseOne = useSelector((state) => state.caseOne);
    const _case=caseOne.case


const loginUser = useSelector((state) => state.loginUser);
const { userInfo } = loginUser;

useEffect(()=>{
  dispatch(getBookmark(userInfo?.id))
  if(bookmarks?.Citation_ids.length > -1){
    let arr=bookmarks?.Citation_ids.map((obj)=>{
      return obj.id
    })
    dispatch(getCitations(arr));
  }
},[])

const bookmarkmsg = useSelector((state) => state.bookmark);
const bkmsg=bookmarkmsg.success

    useEffect(()=>{
  if(bkmsg && bkmsg==true){
  dispatch(getBookmark(userInfo?.id))
  if(bookmarks?.Citation_ids.length > -1){
    let arr=bookmarks?.Citation_ids.map((obj)=>{
      return obj.id
    })
    dispatch(getCitations(arr));
  }
  // console.log(bookmarks?.Citation_ids.length,"............")
  }
    },[bkmsg])
 


    useEffect(() => {
      if (bookmarks?.Citation_ids.length > 0) {
     
        let arr=bookmarks?.Citation_ids.map((obj)=>{
          return obj.id
        })
        dispatch(getCitations(arr));
      }
      }, [ bookmarks]);


    const OpenCaseBox=(ref)=> {
      dispatch(getCase({Citation_id:ref}));
    
      var bookmarktable = document.querySelector(".bookmark_table")
      bookmarktable.style.display="none";
      var casebox = document.querySelector(".read_case_box")
      casebox.style.display="block";
    }

    const CloseCaseBox=(ref)=> {
      var bookmarktable = document.querySelector(".bookmark_table")
      bookmarktable.style.display="block";
      var casebox = document.querySelector(".read_case_box")
      casebox.style.display="none";
    }

  return <div>
       {citations && citations?.length >0? 
    <div className='court-table mt-1'>
      <div className="card bookmark_table">
        <div class="card-block table-border-style p-1">
          <div class="table-responsive">
            <table class="table table-hover">
  <thead>
    <tr className=''>
      <th scope="col">#</th>
      <th scope="col">Date</th>
      <th scope="col">Citation</th>
      <th scope="col" colspan="">Title</th>
      <th scope="col" colspan="">Court</th>
      <th scope="col" className="nowrap">Case Law</th>
    </tr>
  </thead>
  <tbody>
  {citations && citations?.length >0?
citations?.map((obj, i)=>{
    return     <tr className="tr" index={i}>
    <td>{i + 1}</td>
    <td>{bookmarks?.Citation_ids?.map((bkmark)=>{
        if(bkmark.id==obj.Citation_id){
        return bkmark.date
        }
    })}</td>
    <td>{obj.Citation_id}</td>
    <td colspan="" ><span className="capital-font">{obj.Parties}</span><br/><span className="text-danger">{obj.Judge}</span><br/><span className="text-primary">{obj.Lawyer}</span></td>
    <td colspan="" className="capital-font">{obj.Citation_Court}</td>
    <td className="caselaw-text" onClick={(e)=>{OpenCaseBox(obj.Citation_id)}}>Case Law</td>
  </tr>
}):null}
  </tbody>

</table>
</div>
</div>
</div>
<div className="read_case_box">
<SingleCitation case={_case} type={"bookmark"} delbookmark={true} action={CloseCaseBox}/>
</div>
  </div>:null}
  </div>;
};

export default BookMarkTable;
