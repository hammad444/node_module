import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllClientsCases} from "../actions/dairyActions"
import ClientsTable from "./ClientsTable"

const ClientCases = () => {
  const dispatch = useDispatch();

  const AddClientForm=()=>{
    var clientscases=document.getElementsByClassName("clients-cases")[0]
    var clientaform=document.getElementsByClassName("client-aform")[0]
    clientscases.style.display="none";
    clientaform.style.display="block";
  }

  const allClientsCases = useSelector((state) => state.allClientsCases);
  const count=allClientsCases.count

  const loginUser = useSelector((state) => state.loginUser);
  const {userInfo}=loginUser

  useEffect(()=>{
dispatch(getAllClientsCases(userInfo?.id))
  },[])
 


  return (
    <div className="clients-cases card  p-3">
    <row className="d-flex justify-content-between">
    <div>
      {/* garbar */}
    <h6>Open Cases: {count?.open.map(item => item.case_title)
  .filter((value, index, self) => self.indexOf(value) === index).length}</h6>
    <h6>Close Cases: {count?.close.map(item => item.case_title)
  .filter((value, index, self) => self.indexOf(value) === index).length}</h6>
    </div>
    <div className='btns'>
    {/* <button>Upcoming Cases</button> */}
    <button onClick={AddClientForm}>Add Clients</button>
    </div>
    </row>
    <div className="all-client-cases mt-3">
    <ClientsTable count={count}/>
    </div>
</div>
  )
}

export default ClientCases