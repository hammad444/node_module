
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineArrowLeft} from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import {updateClient} from "../actions/dairyActions"

const ClientUForm = () => {
  const dispatch = useDispatch();

  const loginUser = useSelector((state) => state.loginUser);
  const {userInfo}=loginUser
  
  const singleClient = useSelector((state) => state.singleClient);
  const client=singleClient.client

  const [message, setMessage] = useState(null);

  const [inputField , setInputField] = useState({})

  const changeHandler=(name, value)=>{
    setInputField( { ...inputField,[name]: value} )
    // console.log(inputField,"inputs data")
}

useEffect(()=>{
  if(client){
    setInputField( {
      user_id:client?.user_id,
      client_name:client?.client_name,
      client_contact:client?.client_contact,
      client_address:client?.client_address,
      client_city:client?.client_city,
    } )
  }
},[client])

  const updateClients=()=>{
      dispatch(updateClient(inputField, client?.client_id))
      backClients()
  }

  const backClients=()=>{
    var clientscases=document.getElementsByClassName("clients-cases")[0]
    var clientuform=document.getElementsByClassName("client-uform")[0]
    clientscases.style.display="block";
    clientuform.style.display="none";
  }
  return (
    <div className="client-form client-uform p-5 card">
            <div className="row d-flex justify-content-between">
      <button type="button" onClick={backClients}><AiOutlineArrowLeft/> Back</button>
      <button type="button" onClick={updateClients}>Update Client </button>
      </div>
<form className="form-material mt-3">
<div className="form-group form-primary d-flex">
  
    <label><h6>Client Name:</h6></label>
    <div>
    <input
          type="text"
          name="client_name"
          placeholder=""
          value={inputField.client_name}
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
          value={inputField.client_contact}
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
          value={inputField.client_address}
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
          value={inputField.client_city}
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
          name=""
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

export default ClientUForm