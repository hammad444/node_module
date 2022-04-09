import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { searchAdvance } from "../actions/searchActions";

const AdvanceSearch = () => {
  const dispatch = useDispatch();

  const journalList = useSelector((state) => state.journalList);
  const journal=journalList.journal
  
  // --------------------ADVANCE SEARCHE------------------------------
  const openCourtTable = (search) => {
    var courtTable = document.querySelector(".court_table_" + search);
    courtTable.style.display = "block";
    var casebox = document.querySelector(".read_case_box_" + search);
    casebox.style.display = "none";
  };

  // ---------------advance-inputfields--------------------------
  const [advanceInputField, setAdvanceInputField] = useState({
    keyword: "",
    journal: "",
    year: "",
    court: "",
    ref: "",
    judge: "",
    lawyer: "",
    parties: "",
  });

  // ----------------------inputs onchange handler--------------------------------
  const changeHandlerAdvance = (name, value) => {
    setAdvanceInputField({ ...advanceInputField, [name]: value });
  };

  // -----------------get-search-advances---------------------
  const searchAdvances = (search) => {
    dispatch(searchAdvance(advanceInputField));
  };
// ------------------------------------


  return (
    <div className="searchBox mb-1">
      <h5>Advance Search</h5>
      <form className="form-material-s">
        <div className="form-group form-primary">
          <input
            type="text"
            name="keyword"
            placeholder="Parties Keyword"
            className="form-control"
            onChange={(e) =>
              changeHandlerAdvance(e.target.name, e.target.value)
            }
          />
        </div>
        <div className="form-group form-primary">
          <Select
          className="select-input"
            options={journal}
            name="journal"
            placeholder="Journal Name"
            onChange={(selectedOption) =>
              changeHandlerAdvance("journal", selectedOption.value)
            }
          />
        </div>
        <div className="form-group form-primary">
          <input
            type="text"
            name="year"
            placeholder="Year"
            className="form-control"
            onChange={(e) =>
              changeHandlerAdvance(e.target.name, e.target.value)
            }
          />
        </div>
        <div className="form-group form-primary">
          <input
            type="text"
            name="court"
            placeholder="Court"
            className="form-control"
            onChange={(e) =>
              changeHandlerAdvance(e.target.name, e.target.value)
            }
          />
        </div>
        <div className="form-group form-primary">
          <input
            type="number"
            name="ref"
            placeholder="Ref No"
            className="form-control"
            onChange={(e) =>
              changeHandlerAdvance(e.target.name, e.target.value)
            }
          />
        </div>
        <div className="form-group form-primary">
          <input
            type="text"
            name="judge"
            placeholder="Judge"
            className="form-control"
            onChange={(e) =>
              changeHandlerAdvance(e.target.name, e.target.value)
            }
          />
        </div>
        <div className="form-group form-primary">
          <input
            type="text"
            name="lawyer"
            placeholder="Lawyer"
            className="form-control"
            onChange={(e) =>
              changeHandlerAdvance(e.target.name, e.target.value)
            }
          />
        </div>
        <div className="form-group form-primary">
          <input
            type="text"
            name="parties"
            placeholder="Parties"
            className="form-control"
            onChange={(e) =>
              changeHandlerAdvance(e.target.name, e.target.value)
            }
          />
        </div>
        <button
          className="btn btn-brown"
          type="button"
          onClick={() => {
            searchAdvances("advance");
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default AdvanceSearch;
