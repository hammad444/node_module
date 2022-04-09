import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import JazzCashForm from './JazzCashForm';
import EasyPaisaForm from './EasyPaisaForm';
import AdminForm from './AdminForm';

import SideNavbar from './SideNavbar';

const Settings = () => {

  const [message, setMessage] = useState(null);

  const paymentAccount = useSelector((state) => state.payAccount);
  const {success, msg}=paymentAccount

  useEffect(()=>{
      setMessage(msg)
  },[success])
  return (
    <div>
      <SideNavbar/>
    <div className='dashboard-content-page p-2' >
  <div class="card m-3">
  <div className="user-header card-header">
            <h3><span>Accounts</span></h3>
          </div>
<div className="card-block m-3" style={{ height: "70vh",overflow:"scroll" }}>
<h5 className="mb-3">1- Admin Accounts</h5>
<AdminForm/>
  <h5 className="mb-4 mt-3">2- Payment Accounts
</h5>
  {message && <p className="alertss">{message}</p>}
  <h6><b>a- Jazz cash account:-</b></h6>
<JazzCashForm/>
<h6><b>b- Easy Paisa Account:-</b></h6>
<EasyPaisaForm/>
</div>
  </div>
  
    </div>
    </div>
  )
}

export default Settings