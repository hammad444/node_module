import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import BookMarkTable from './BookMarkTable';
import SideNavbar from './SideNavbar';


const Bookmarks = () => {

  return <div>
    <SideNavbar/>
    <div className='bookmarks'>
            {/* ---------------page-header--------------- */}
                          <div className="pages-header">
                          <div className="row align-items-center">
                                  <div className="page-header-title">
                                  <h2>Bookmarks</h2>
                                  </div>
                          </div>
                  </div>
                        {/* ---------------page-content--------------- */}
                        <div className="m-3 pages-content">
                            <BookMarkTable/>
                          </div>
  </div>;
  </div>
};

export default Bookmarks;

