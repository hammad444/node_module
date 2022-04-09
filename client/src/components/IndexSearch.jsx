import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { searchIndex} from "../actions/searchActions";

const IndexSearch = () => {
    const dispatch = useDispatch();

    const journalList = useSelector((state) => state.journalList);
    const journal=journalList.journal

    const [message, setMessage] = useState(null);
    // -----------------INDEX SEARCH-----------------------
  const openCourtTable = (search) => {
    var courtTable = document.querySelector(".court_table_" + search);
    courtTable.style.display = "block";
    var casebox = document.querySelector(".read_case_box_" + search);
    casebox.style.display = "none";
  };

    // ---------------cases-inputfields--------------------------
    
    const [indexInputField, setIndexInputField] = useState({
      journal: "",
      year: "",
      court: "",
    });
    // ----------------------inputs onchange handler--------------------------------
    const changeHandlerIndex = (name, value) => {
      setIndexInputField({ ...indexInputField, [name]: value });
    };
  
    // -----------------get-search-cases---------------------
    const searchIndexs = () => {
      if (
        indexInputField.journal == "" ||
        indexInputField.year== "" 
      ) {
        setMessage("Fill Mandatory Fields!");
        setTimeout(() => {  setMessage(null) }, 2000);
      } else {
        dispatch(searchIndex(indexInputField));
        openCourtTable()
      }
    };
    // ---------------------

  return (
    <div className="searchBox mb-1">
    <span className="d-flex"><h5>Index Search</h5>  {message && <p className="text-danger px-3 py-1">{message} </p>}</span>
    <form className="form-material-s">
      <div className="form-group form-primary">
                  <Select
          className="select-input"
            options={journal}
            name="journal"
            placeholder="Journal &nbsp; (Mandatory)"
            onChange={(selectedOption) =>
              changeHandlerIndex("journal", selectedOption.value)
            }
          />
      </div>
      <div className="form-group form-primary">
        <input
          type="text"
          name="year"
          placeholder="Year  &nbsp; (Mandatory)"
          className="form-control"
          onChange={(e) =>
            changeHandlerIndex(e.target.name, e.target.value)
          }
        />
      </div>
      <div className="form-group form-primary">
        <input
          type="text"
          name="court"
          placeholder="Court &nbsp; (Optional)"
          className="form-control"
          onChange={(e) =>
            changeHandlerIndex(e.target.name, e.target.value)
          }
        />
      </div>
      <button
        className="btn btn-brown"
        type="button"
        onClick={() => {
            searchIndexs("index");
        }}
      >
        Search
      </button>
    </form>
  </div>
  )
}

export default IndexSearch