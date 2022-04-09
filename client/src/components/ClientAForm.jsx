import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineArrowLeft} from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import {createClient} from "../actions/dairyActions"

const ClientForm = () => {
  const dispatch = useDispatch();

  const loginUser = useSelector((state) => state.loginUser);
  const {userInfo}=loginUser
  
  const [message, setMessage] = useState(null);

  const [inputField , setInputField] = useState({
    user_id:userInfo?.id,
    client_id:uuidv4(),
    client_name:"",
    client_contact: "",
    client_address:"",
    client_city:"",
    client_from:new Date(),   
})

  const changeHandler=(name, value)=>{
    setInputField( { ...inputField,[name]: value} )
    // console.log(inputField,"inputs data")
}

const addClient=()=>{
  if(
    inputField.client_id=="" ||
    inputField.client_name=="" ||
    inputField.client_contact=="" ||
    inputField.client_address=="" ||
    inputField.client_city=="" ||
    inputField.client_from==""
  ){
    setMessage("Please fill all the fields")
  }else{
    dispatch(createClient(inputField))
    backClients()
  }
}
const backClients=()=>{
  var clientscases=document.getElementsByClassName("clients-cases")[0]
  var clientaform=document.getElementsByClassName("client-aform")[0]
  clientscases.style.display="block";
  clientaform.style.display="none";
}
  return (
    <div className="client-form client-aform p-5 card">
            <div className="row d-flex justify-content-between">
      <button type="button" onClick={backClients}><AiOutlineArrowLeft/> Back</button>
      <button type="button" onClick={addClient}>Add Client </button>
      </div>
<form className="form-material mt-3">
<div className="form-group form-primary d-flex">
  
    <label><h6>Client Name:</h6></label>
    <div>
    <input
          type="text"
          name="client_name"
          placeholder=""
          className="form-control"
          onChange={(e) =>
            changeHandler(e.target.name, e.target.value)
          }
        />
         <span className="form-bar"></span>
         </div>
</div>
<div className="form-group form-primary d-flex">
    <label> <h6>Client Contact:</h6></label>
    <div>
    <input
          type="text"
          name="client_contact"
          placeholder=""
          className="form-control"
          onChange={(e) =>
            changeHandler(e.target.name, e.target.value)
          }
        />
         <span className="form-bar"></span>
         </div>
    </div>
<div className="form-group form-primary d-flex">
    <label> <h6>Client Address:</h6></label>
    <div>
    <input
          type="text"
          name="client_address"
          placeholder=""
          className="form-control"
          onChange={(e) =>
            changeHandler(e.target.name, e.target.value)
          }
        />
         <span className="form-bar"></span>
         </div>
    </div>
<div className="form-group form-primary d-flex">
    <label> <h6>Client City:</h6></label>
    <div>
    <input
          type="text"
          name="client_city"
          placeholder=""
          className="form-control"
          onChange={(e) =>
            changeHandler(e.target.name, e.target.value)
          }
        />
         <span className="form-bar"></span>
         </div>
    </div>
{/* <div className="form-group form-primary d-flex">
    <label> <h6>Client Added Date:</h6></label>
    <div>
    <input
          type="text"
          name="client_from"
          placeholder=""
          className="form-control"
          onChange={(e) =>
            changeHandler(e.target.name, e.target.value)
          }
        />
         <span className="form-bar"></span>
         </div>
    </div> */}
</form>
        </div>
  )
}

export default ClientForm