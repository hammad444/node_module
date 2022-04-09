import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PopupModel from "./PopupModel";
import { BsBookmark, BsBookmarkFill, BsArrowRight } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

import {
  getCaseDesc,
  getCase,
  getCitations,
  getRefLaw,
  getRefCase,
  getStatute,
  getStatuteRead,
} from "../actions/dataActions";
import {
  getBookmark,
  setBookmark,
  updateBookmark,
} from "../actions/otherDataActions";

import { AiOutlineArrowLeft } from "react-icons/ai";

const SingleCitation = (props) => {
  const dispatch = useDispatch();

  const desc = useSelector((state) => state.caseDesc);
  const description = desc.description;

    
      const citationIds = useSelector((state) => state.citationIds);
      const ids = citationIds.ids;

  const openPopup = (Citation_id, id) => {
    var modal = document.querySelector(
      ".citation-modal_" + props.case?.id + props.type
    );
    modal.style.display = "block";
    dispatch(getCaseDesc({ Citation_id: Citation_id }));
  };

  const closePopup = (id) => {
    var modal = document.querySelector(
      ".citation-modal_" + props.case?.id + props.type
    );
    modal.style.display = "none";
  };

  const loginUser = useSelector((state) => state.loginUser);
  const { userInfo } = loginUser;

  const bookmarkList = useSelector((state) => state.bookmarkList);
  const bookmarks = bookmarkList.bookmarks;

  const [bookmark, setBookmarks] = useState();

  useEffect(()=>{
  setBookmarks(bookmarks?.Citation_ids)
  },[bookmarks])

   const createBookmark = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;

    if (bookmarks == null) {
      dispatch(
        setBookmark({
          User_id: userInfo?.id,
          Citation_ids: [{id:props.case?.Citation_id,date:today}],
        })
      );
      dispatch(getBookmark(userInfo?.id));
      // console.log("mmmmmmmm1");
    } else {
      bookmark.push({id:props.case?.Citation_id,date:today})

      dispatch(
        updateBookmark({
          User_id:userInfo?.id,
          Citation_ids: bookmark,
           },userInfo?.id)
      );
      // console.log("mmmmmmmm2");
      dispatch(getBookmark(userInfo?.id));
    }


      let arr=bookmarks?.Citation_ids.map((obj)=>{
        return obj.id
      })
      dispatch(getCitations(arr));
    
  };

  const delBookmark = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;

    props.action();
    var index=bookmark.map(i => i.id).indexOf(props.case?.Citation_id);

    if (index > -1) {
      bookmark.splice(index, 1);
    }

    dispatch(
      updateBookmark(
        {
          User_id: userInfo?.id,
          Citation_ids: bookmark,
          date: today,
        },
        userInfo?.id
      )
    );
  };

  const openRefCases = () => {
    var caselaw = document.querySelector(".statute_ref_results");
    caselaw.style.display = "none";
    var caseref = document.querySelector(".case_ref_results");
    caseref.style.display = "block";
  };

  const getRefCases = (ref) => {
    dispatch(getCase({ Citation_id: ref }));
    dispatch(getRefCase(ref));
    openRefCases();
  };

  const openRefStatutes = () => {
    var caselaw = document.querySelector(".case_ref_results");
    caselaw.style.display = "none";
    var caseref = document.querySelector(".statute_ref_results");
    caseref.style.display = "block";
  };
  const getRefLaws = (ref) => {
    dispatch(getStatute({ Statute_id: ref }));
    dispatch(getStatuteRead({ Statute_id: ref }));
    dispatch(getRefLaw(ref));
    openRefStatutes();
  };

  return (
    <div className="card my-1">
      <div className="card-header">
        <button
          className="btn btn-brown d-flex align-items-center"
          onClick={props.action}
        >
          <AiOutlineArrowLeft /> <span> Back</span>
        </button>
      </div>
      <div className="citation-box mt-1">
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item citation-name">
              {" "}
              Citation Name :<span> {props.case?.Citation_id}</span>
              <ul>
                {props.bookmarks ? (
                  <li onClick={delBookmark}>
                    Bookmark Added
                    <i className="fas fa-bookmark">
                      <BsBookmarkFill />
                    </i>
                  </li>
                ) : props.delbookmark ? (
                  <li onClick={delBookmark}>
                    Remove Bookmark
                    <i className="far fa-bookmark">
                      <AiFillDelete />
                    </i>
                  </li>
                ) : (
                  <li onClick={createBookmark}>
                    Add Bookmark
                    <i className="far fa-bookmark">
                      <BsBookmark />
                    </i>
                  </li>
                )}
              </ul>
            </li>
            <li className="list-group-item">
              <span className="text-primary">Name of case law :</span>{" "}
              {props.case?.Parties}
            </li>
            <li className="list-group-item">
              <span className="text-primary">Case Law Refrence :</span>
              {props.case?.Case_Ref == ""
                ? "No Refrences exist"
                : props.case?.Case_Ref.split(',').map((obj) => {
                    return (
                      <span
                      className="case_refrence"
                    >
                      {ids?.includes(obj)? 
                      <span onClick={() => {
                        getRefCases(obj);
                      }}>{obj}</span>:
                      <text>{obj}</text>} {obj ? "," : "No Refrences exist"}
    
                    </span>
                    );
                  })}
            </li>
            <li className="list-group-item">
              <span className="text-primary">Statutes Refrence :</span>
              {props.case?.Law_Ref == ""
                ? "No Refrences exist"
                : props.case?.Law_Ref.split(',').map((obj) => {
                    return (
                      <span
                        className="case_refrence"
                        onClick={() => {
                          getRefLaws(obj);
                        }}
                      >
                        <span>{obj}</span> {obj && ","}
                      </span>
                    );
                  })}{" "}
            </li>
          </ul>
          <div className="card-body head-notes-box py-1">
            <h3> Head Notes</h3>
            <pre>
              <p className="model_desc">{props.case?.Head_Notes}</p>
            </pre>
          </div>
          <div className="card-footer py-1">
            <button
              className="open-popup-btn"
              onClick={() => {
                openPopup(props.case?.Citation_id);
              }}
            >
              {" "}
              Case Descrition <BsArrowRight />
            </button>
          </div>
        </div>

        <div className={"modal citation-modal_" + props.case?.id + props.type}>
          <PopupModel
 title={"Case Description :" +props.case?.Citation_id}
            desc={description?.Case_Desc}
            closePopup={() => {
              closePopup(props.case?.id + props.type);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleCitation;
