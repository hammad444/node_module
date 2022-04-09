import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { searchCitation} from "../actions/searchActions";

const CitationSearch = () => {
    const dispatch = useDispatch();

    const journalList = useSelector((state) => state.journalList);
    const journal=journalList.journal

    const [message, setMessage] = useState(null);
      // --------------------CITATION SEARCHE------------------------------
  const openCourtTable = (search) => {
    var courtTable = document.querySelector(".court_table_" + search);
    courtTable.style.display = "block";
    var casebox = document.querySelector(".read_case_box_" + search);
    casebox.style.display = "none";
  };
   
  // ---------------citation-inputfields--------------------------
  const [citationInputField, setCitationInputField] = useState({
    journal: "",
    year: "",
    court: "",
    ref:"",
    judge:"",
    lawyer:"",
    parties:"",
  });

  // ----------------------inputs onchange handler--------------------------------
  const changeHandlerCitation = (name, value) => {
    setCitationInputField({ ...citationInputField, [name]: value });
  };

  // -----------------get-search-citations---------------------
  const searchCitations = (search) => {
    if (
        citationInputField.journal == "" ||
        citationInputField.year == "" 
      ) {
        setMessage("Fill Mandatory Fields!");
        setTimeout(() => {  setMessage(null) }, 2000);
      } else {
        dispatch(searchCitation(citationInputField));
        openCourtTable(search);
      }
  };

  return (
    <div className="searchBox mb-1">
    <span className="d-flex"><h5>Citation Search</h5>  {message && <p className="text-danger px-3 py-1">{message} </p>}</span>
    <form className="form-material-s">
      <div className="form-group form-primary">
                          <Select
          className="select-input"
            options={journal}
            name="journal"
            placeholder="Journal &nbsp; (Mandatory)"
            onChange={(selectedOption) =>
              changeHandlerCitation("journal", selectedOption.value)
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
            changeHandlerCitation(e.target.name, e.target.value)
          }
        />
      </div>
      <div className="form-group form-primary">
        <input
          type="text"
          name="court"
          placeholder="Court  &nbsp; (Optional)"
          className="form-control"
          onChange={(e) =>
            changeHandlerCitation(e.target.name, e.target.value)
          }
        />
      </div>
      <div className="form-group form-primary">
        <input
          type="number"
          name="ref"
          placeholder="Ref No  &nbsp; (Optional)"
          className="form-control"
          onChange={(e) =>
            changeHandlerCitation(e.target.name, e.target.value)
          }
        />
      </div>
      <div className="form-group form-primary">
        <input
          type="text"
          name="judge"
          placeholder="Judge  &nbsp; (Optional)"
          className="form-control"
          onChange={(e) =>
            changeHandlerCitation(e.target.name, e.target.value)
          }
        />
      </div>
      <div className="form-group form-primary">
        <input
          type="text"
          name="lawyer"
          placeholder="Lawyer  &nbsp; (Optional)"
          className="form-control"
          onChange={(e) =>
            changeHandlerCitation(e.target.name, e.target.value)
          }
        />
      </div>
      <div className="form-group form-primary">
        <input
          type="text"
          name="parties"
          placeholder="Parties  &nbsp; (Optional)"
          className="form-control"
          onChange={(e) =>
            changeHandlerCitation(e.target.name, e.target.value)
          }
        />
      </div>
      <button
        className="btn btn-brown"
        type="button"
        onClick={() => {
          searchCitations("citation");
        }}
      >
        Search
      </button>
    </form>
  </div>
  )
}

export default CitationSearch