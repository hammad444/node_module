
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineArrowLeft} from "react-icons/ai";
import {createCase}
 from "../actions/dairyActions"

const CaseForm = () => {
const dispatch=useDispatch()

  const loginUser = useSelector((state) => state.loginUser);
  const {userInfo}=loginUser

  const singleClient = useSelector((state) => state.singleClient);
  const client=singleClient?.client


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
  if(client){
  setInputField( { ...inputField,user_id:client?.user_id,
    client_id:client?.client_id} )
    // console.log(inputField,"inputs data")
  }
},[client])

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
    var caseform=document.getElementsByClassName("case-form")[0]
    clientcase.style.display="block";
    caseform.style.display="none";
  }

  return (
    <div className='case-form p-5 card'>
      <div className="row d-flex justify-content-between">
            <button className="back-hearing-btn" onClick={uploadCase}><AiOutlineArrowLeft/> Back</button>
            <button type="button" onClick={uploadCase}>Save Case</button>
            </div>
        <form className="form-material d-flex justify-content-between">
          <div>
<div className="form-group form-primary d-flex mt-4">
<label><h6>Case Title:</h6></label> 
    <div>
    <input
          type="text"
          name="case_title"
          className="form-control"
          onChange={(e) =>
            changeHandler(e.target.name, e.target.value)
          }
        />
         <span className="form-bar"></span>
         </div>
    </div>
<div className="form-group form-primary d-flex">
<label><h6>Case Number:</h6></label> 
    <div>
    <input
          type="text"
          name="case_number"
          className="form-control"
          onChange={(e) =>
            changeHandler(e.target.name, e.target.value)
          }
        />
         <span className="form-bar"></span>
         </div>
    </div>
<div className="form-group form-primary d-flex">
<label><h6>Case Type:</h6></label> 
    <div>
    <input
          type="text"
          name="case_type"
          className="form-control"
          onChange={(e) =>
            changeHandler(e.target.name, e.target.value)
          }
        />
         <span className="form-bar"></span>
         </div>
    </div>
<div className="form-group form-primary d-flex">
<label><h6>Case Date:</h6></label> 
    <div>
    <input
          type="date"
          name="case_date"
          className="form-control"
          onChange={(e) =>
            changeHandler(e.target.name, e.target.value)
          }
        />
         <span className="form-bar"></span>
         </div>
    </div>
    <div className="form-group form-primary d-flex">
    <label><h6>Hearing Date:</h6></label> 
    <div>
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
    </div>
    <div className="form-group form-primary d-flex">
    <label><h6>Hearing Time:</h6></label> 
    <div>
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
    </div>
    <div className="form-group form-primary d-flex">
    <label><h6>Court Name:</h6></label> 
    <div>
    <input
          type="text"
          name="case_court"
          className="form-control"
          onChange={(e) =>
            changeHandler(e.target.name, e.target.value)
          }
        />
         <span className="form-bar"></span>
         </div>
    </div>
    <div className="form-group form-primary d-flex">
    <label><h6>City Name:</h6></label> 
    <div>
    <input
          type="text"
          name="case_city"
          className="form-control"
          onChange={(e) =>
            changeHandler(e.target.name, e.target.value)
          }
        />
         <span className="form-bar"></span>
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
          className="form-control mb-n3"
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
          className="form-control mb-n3"
          onChange={(e) =>
            changeHandler(e.target.name, e.target.value)
          }
        />
    </div> 
    <div className="form-group form-primary">
         <label><h6>Upload Files</h6></label>
         <br/>
  <div className="custom-file">
    <input type="file" className="custom-file-input" name="case_files" id="validatedCustomFile"
    onChange={(e) => handleChangeFile(e.target.name,e.target.files[0])}/>
    <label className="custom-file-label" for="validatedCustomFile">Choose file...</label>
  </div>
                    </div>
    </div>
</form>
    </div>
  )
}

export default CaseForm