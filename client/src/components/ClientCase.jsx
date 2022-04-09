
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ClientTable from './ClientTable'
import { AiOutlineArrowLeft} from "react-icons/ai";

const ClientCase = () => {

  const singleClient = useSelector((state) => state.singleClient);
  const client=singleClient.client

  const casesList = useSelector((state) => state.casesList);
  const cases = casesList?.cases;

  const backClients=()=>{
    var clientcase=document.getElementsByClassName("client-case")[0]
    var clientscases=document.getElementsByClassName("clients-cases")[0]
    clientcase.style.display="none";
    clientscases.style.display="block";
  }

  const openCaseForm=()=>{
    var clientcase=document.getElementsByClassName("client-case")[0]
    var caseform=document.getElementsByClassName("case-form")[0]
    clientcase.style.display="none";
    caseform.style.display="block";
  }
  return (
    <div className='client-case p-3 card'>
                  <button onClick={backClients}><AiOutlineArrowLeft/> Back</button>
            <row className="d-flex justify-content-between mt-3">
    <div>
    <h6>Client Name: {client && client.client_name}</h6>
    <h6>Client Address: {client && client.client_address}</h6>
    </div>
    <div>
    <h6>Open Cases: {cases?.filter((cas)=>(cas.case_close=="close")).length}</h6>
    <h6>Close Cases: {cases?.filter((cas)=>(cas.case_close=="closed")).length}</h6>
    </div>
    <button onClick={openCaseForm}>Add Cases</button>
    </row>
    <div className="all-client-cases mt-3">
    <ClientTable cases={cases}/>
    </div>
    </div>
  )
}

export default ClientCase