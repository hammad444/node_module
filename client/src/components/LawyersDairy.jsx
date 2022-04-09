import React from 'react'
import Dairy from './Dairy';
import SideNavbar from "./SideNavbar";

const LawyersDairy = () => {
  return (
      <div>
    <SideNavbar />
    <div className='lawyers-dairy'>
             {/* ---------------page-header--------------- */}
             <div className="pages-header">
                          <div className="row align-items-center">
                                  <div className="page-header-title">
                                  <h2>Lawyer's Dairy</h2>
                                  </div>
                          </div>
                  </div>
                        {/* ---------------page-content--------------- */}
            <div className="m-3 pages-content">
                  <div className="mb-1">
          <Dairy/>
          </div>
          </div>  
    </div>
    
    </div>
  )
}

export default LawyersDairy