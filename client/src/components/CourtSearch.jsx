import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { searchCourt} from "../actions/searchActions";

const CourtSearch = () => {
    const dispatch = useDispatch();

    const journalList = useSelector((state) => state.journalList);
    const journal=journalList.journal

    const [message, setMessage] = useState(null);
    // --------------------COURT SEARCHE------------------------------
const openCourtTable = (search) => {
  var courtTable = document.querySelector(".court_table_" + search);
  courtTable.style.display = "block";
  var casebox = document.querySelector(".read_case_box_" + search);
  casebox.style.display = "none";
};
 
// ---------------court-inputfields--------------------------

const [courtInputField, setCourtInputField] = useState({
  journal: "",
  from: "",
  to:"",
  court: "",
});

// ----------------------inputs onchange handler--------------------------------
const changeHandlerCourt = (name, value) => {
  setCourtInputField({ ...courtInputField, [name]: value });
};

// -----------------get-search-courts---------------------
const searchCourts = (search) => {
  if (
      courtInputField.from == "" ||
      courtInputField.to == "" ||
      courtInputField.court == "" 
    ) {
      setMessage("Fill Mandatory Fields!");
      setTimeout(() => {  setMessage(null) }, 2000);
    } else {
      dispatch(searchCourt(courtInputField));
      openCourtTable(search);
    }
};

  return (
    <div className="searchBox mb-1">
    <span className="d-flex"><h5>CourtWise Search</h5>  {message && <p className="text-danger px-3 py-1">{message} </p>}</span>
    <form className="form-material-s">
      <div className="form-group form-primary">
                                  <Select
          className="select-input"
            options={journal}
            name="journal"
            placeholder="Journal &nbsp; (Mandatory)"
            onChange={(selectedOption) =>
              changeHandlerCourt("journal", selectedOption.value)
            }
          />
      </div>
      <div className="form-group form-primary">
        <input
          type="dropdown"
          name="from"
          placeholder="From  &nbsp; (Mandatory)"
          className="form-control"
          onChange={(e) =>
            changeHandlerCourt(e.target.name, e.target.value)
          }
        />
      </div>
      <div className="form-group form-primary">
        <input
          type="dropdown"
          name="to"
          placeholder="To  &nbsp; (Mandatory)"
          className="form-control"
          onChange={(e) =>
            changeHandlerCourt(e.target.name, e.target.value)
          }
        />
      </div>
      <div className="form-group form-primary">
        <input
          type="text"
          name="court"
          placeholder="Court  &nbsp; (Mandatory)"
          className="form-control"
          onChange={(e) =>
            changeHandlerCourt(e.target.name, e.target.value)
          }
        />
      </div>
      <button
        className="btn btn-brown"
        type="button"
        onClick={() => {
          searchCourts("courtwise");
        }}
      >
        Search
      </button>
    </form>
  </div>
  )
}

export default CourtSearch