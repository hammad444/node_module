
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineArrowLeft} from "react-icons/ai";
import {createCase}
 from "../actions/dairyActions"

const CaseHearing = () => {
  const dispatch=useDispatch()

  const loginUser = useSelector((state) => state.loginUser);
  const {userInfo}=loginUser

  const singleCase = useSelector((state) => state.singleCase);
  const cas=singleCase?.case

  const [inputField , setInputField] = useState({
        user_id:"",
        client_id:"",
        case_title:"",
        case_date: "",
        case_number:"",
        hearing_date:"",
        hearing_time:"",
        case_court:"",
        case_city:"",
        case_desc:"",
        case_notes:"",
        case_files:"",
        case_close:"open",   
})

useEffect(()=>{
  if(cas){
  setInputField( { ...inputField,user_id:cas?.user_id,
    client_id:cas?.client_id,case_title:cas?.case_title,
    case_date:cas?.case_date,case_number:cas?.case_number,
    case_court:cas?.case_court,case_city:cas?.case_city,
  } )
    // console.log(inputField,"inputs data")
  }
},[cas])

  const changeHandler=(name, value)=>{
    setInputField( { ...inputField,[name]: value} )
    // console.log(inputField,"inputs data")
}
const handleChangeFile = (name,value) => {
  setInputField({ ...inputField, [name]: value });
  // console.log(inputField,"inputs data")
};
  const uploadCase=()=>{
    dispatch(createCase(inputField))
    var clientcase=document.getElementsByClassName("client-case")[0]
    var casehearing=document.getElementsByClassName("case-hearing")[0]
    clientcase.style.display="block";
    casehearing.style.display="none";
  }

  const backCases=()=>{
    var clientcase=document.getElementsByClassName("client-case")[0]
    var casehearing=document.getElementsByClassName("case-hearing")[0]
    clientcase.style.display="block";
    casehearing.style.display="none";
  }
  return (
    <div className="case-hearing p-5 card">
      <div className="row d-flex justify-content-between">
      <button className="back-hearing-btn" onClick={backCases}><AiOutlineArrowLeft/> Back</button>
      <button type="button" onClick={uploadCase}>Save Hearing</button>
      </div>
      <form className="form-material d-flex justify-content-between">
      <div>
<div className="form-group form-primary mt-4">
<label><h6>Next Hearing Date</h6></label>
    <br/>
    <input
          type="date"
          name="hearing_date"
          className="form-control"
          onChange={(e) =>
            changeHandler(e.target.name, e.target.value)
          }
        />
         <span className="form-bar"></span>
         </div>
         <div className="form-group form-primary">
         <label><h6>Next Hearing Time</h6></label>
    <br/>
    <input
          type="time"
          name="hearing_time"
          className="form-control"
          onChange={(e) =>
            changeHandler(e.target.name, e.target.value)
          }
        />
         <span className="form-bar"></span>
         </div>
         <div className="form-group form-primary">
         <label><h6>Upload Files</h6></label>
         <br/>
         <div className="custom-file mb-3">
    <input type="file" name="case_files" className="custom-file-input" id="validatedCustomFile" 
    onChange={(e) => handleChangeFile(e.target.name,e.target.files[0])}/>
    <label className="custom-file-label" for="validatedCustomFile">Choose file...</label>
    <div className="invalid-feedback">Example invalid custom file feedback</div>
  </div>

                    </div>
         </div>

      <div>
      <div className="form-group form-primary">
    <label><h6>Case Description</h6></label>
    <br/>
    <textarea
          type="text"
          name="case_desc"
          className="form-control mb-n2"
          onChange={(e) =>
            changeHandler(e.target.name, e.target.value)
          }
        />
    </div>
    <div className="form-group form-primary">
    <label><h6>Lawyer Notes</h6></label>
    <br/>
    <textarea
          type="text"
          name="case_notes"
          className="form-control mb-n2"
          onChange={(e) =>
            changeHandler(e.target.name, e.target.value)
          }
        />
    </div> 
      </div>
      </form>
    </div>
  );
};

export default CaseHearing;
