import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchCase} from "../actions/searchActions";
import { getBookmark } from "../actions/otherDataActions";

const CaseSearch = () => {
    const dispatch = useDispatch();

    const loginUser = useSelector((state) => state.loginUser);
    const { userInfo } = loginUser;

    const [message, setMessage] = useState(null);
    // -----------------CASELAW SEARCH-----------------------
    const openCaseLaws = () => {
      var courtTable = document.querySelector(".case_law_results");
      courtTable.style.display = "block";
      var casebox = document.querySelector(".case_ref_results");
      casebox.style.display = "none";
      var casebox = document.querySelector(".statute_ref_results");
      casebox.style.display = "none";
    };
    // ---------------cases-inputfields--------------------------
    const [caseInputField, setCaseInputField] = useState({
      court: "",
      keyword: "",
      from: "",
      to: "",
    });
    // ----------------------inputs onchange handler--------------------------------
    const changeHandlerCase = (name, value) => {
      setCaseInputField({ ...caseInputField, [name]: value });
    };
  
    // -----------------get-search-cases---------------------
    const searchCaseLaw = () => {
      if (
        caseInputField.keyword == "" ||
        caseInputField.from == "" ||
        caseInputField.to == ""
      ) {
        setMessage("Fill Mandatory Fields!");
         setTimeout(() => {  setMessage(null) }, 2000);
      } else {
        dispatch(searchCase(caseInputField));
        dispatch(getBookmark(userInfo?.id));
        openCaseLaws();
      }
    };
  return (
    <div className="searchBox mb-1">
    <span className="d-flex"><h5>Case Law Search</h5>  {message && <p className="text-danger px-3 py-1">{message} </p>}</span>
    <form className="form-material-s">
      <div className="form-group form-primary">
        <input
          type="text"
          name="keyword"
          placeholder="Keyword &nbsp; (Mandatory)"
          className="form-control"
          onChange={(e) =>
            changeHandlerCase(e.target.name, e.target.value)
          }
        />
      </div>
      <div className="form-group form-primary">
        <input
          type="text"
          name="court"
          placeholder="Court &nbsp; (optional)"
          className="form-control"
          onChange={(e) =>
            changeHandlerCase(e.target.name, e.target.value)
          }
        />
      </div>
      <div className="form-group form-primary">
        <input
          type="dropdown"
          name="from"
          placeholder="From &nbsp; (Mandatory)"
          className="form-control"
          onChange={(e) =>
            changeHandlerCase(e.target.name, e.target.value)
          }
        />
      </div>
      <div className="form-group form-primary">
        <input
          type="dropdown"
          name="to"
          placeholder="To &nbsp; (Mandatory)"
          className="form-control"
          onChange={(e) =>
            changeHandlerCase(e.target.name, e.target.value)
          }
        />
      </div>
      <button
        className="btn btn-brown"
        type="button"
        onClick={searchCaseLaw}
      >
        Search{" "}
      </button>
    </form>
  </div>
  )
}

export default CaseSearch