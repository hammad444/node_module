import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import { AiOutlineHome, AiOutlineSetting,AiOutlineUser,AiOutlineIdcard,AiOutlineAppstoreAdd,AiOutlineTable ,AiOutlineRead} from "react-icons/ai";

import logo from "../images/logo.png"
// import ContentPage from "./ContentPage";

const SideNavbar = () => {
  return (
    <div>
      <nav className="side-navbar" id="side-navbar">
        {/* <div className="sidebar_toggle"><a href="#"><i className="icon-close icons"></i></a></div> */}
        <div className="main-menu">
          <div className="sidebar-header">
            <img
              className=" mb-0"
              src={logo}
              alt="User-Profile-Image"
            />
            {/* <div className="user-details">
                                  <span id="more-details">Ubaid Mehmood</span>
                              </div> */}
          </div>

          {/* -------------------------------------- */}
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingOne">
                <Link
                  to="/"
                  // className="accordion-button collapsed"
                  // type="button"
                  // data-bs-toggle="collapse"
                  // data-bs-target="#flush-collapseOne"
                  // aria-expanded="false"
                  // aria-controls="flush-collapseOne"
                >
                  <span className="head-icon">
                    <i><AiOutlineHome/></i>
                  </span>
                  <span className="head-text">Dashboard</span>
                  <span className="plus"></span>
                </Link>
              </li>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                {/* content */}
                </div>
            </ul>
            {/* -------------------------------- */}
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingTwo">
                <Link
                  to="/dashboard/settings"
                >
                  <span className="head-icon">
                    <i><AiOutlineSetting/></i>
                  </span>
                  <span className="head-text">Settings</span>
                </Link>
              </li>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
              </div>
            </ul>
            {/* -------------------------------------- */}
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingThree">
                <Link
                 to="/dashboard/users"
                  // className="accordion-button collapsed"
                  // type="button"
                  // data-bs-toggle="collapse"
                  // data-bs-target="#flush-collapseThree"
                  // aria-expanded="false"
                  // aria-controls="flush-collapseThree"
                >
                  <span className="head-icon">
                    <i><AiOutlineUser/></i>
                  </span>
                  <span className="head-text">Users</span>
                  <span className="plus"></span>
                </Link>
              </li>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                {/* content */}
                </div>
            </ul>
            {/* ----------------------------------- */}
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingSeven">
                <Link
                to="/dashboard/paid"
                                  // href="javascript:void(0)"
                                  // className="accordion-button collapsed"
                                  // type="button"
                                  // data-bs-toggle="collapse"
                                  // data-bs-target="#flush-collapseSeven"
                                  // aria-expanded="false"
                                  // aria-controls="flush-collapseSeven"
                >
                  <span className="head-icon">
                   <i><AiOutlineTable/></i>
                  </span>
                  <span className="head-text">Paid Users</span>
                  <span className="plus"></span>
                </Link>
              </li>
              <div
                id="flush-collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingSeven"
                data-bs-parent="#accordionFlushExample"
              >
                        {/* content */}

                </div>
            </ul>
            {/* ------------------------------------------------- */}
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingFour">
                <Link
                  to="/dashboard/payments"
                  // className="accordion-button collapsed"
                  // type="button"
                  // data-bs-toggle="collapse"
                  // data-bs-target="#flush-collapseFour"
                  // aria-expanded="false"
                  // aria-controls="flush-collapseFour"
                >
                  <span className="head-icon">
                    <i><AiOutlineIdcard/></i>
                  </span>
                  <span className="head-text">Payments</span>
                  <span className="plus"></span>
                </Link>
              </li>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                              {/* content */}

                </div>
            </ul>
             {/* ----------------------------------- */}
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingFive">
                <Link to="/dashboard/packages"
                                  // href="javascript:void(0)"
                                  // className="accordion-button collapsed"
                                  // type="button"
                                  // data-bs-toggle="collapse"
                                  // data-bs-target="#flush-collapseFive"
                                  // aria-expanded="false"
                                  // aria-controls="flush-collapseFive"
                >
                  <span className="head-icon">
                    <i><AiOutlineAppstoreAdd/></i>
                  </span>
                  <span className="head-text">Packages</span>
                  <span className="plus"></span>
                </Link>
              </li>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                      {/* content */}

                </div>
            </ul>
             {/* ----------------------------------- */}
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingSix">
              <Link to="/dashboard/uploadData"
                                  // href="javascript:void(0)"
                                  // className="accordion-button collapsed"
                                  // type="button"
                                  // data-bs-toggle="collapse"
                                  // data-bs-target="#flush-collapseSix"
                                  // aria-expanded="false"
                                  // aria-controls="flush-collapseSix"
                >
                  <span className="head-icon">
                    <i><AiOutlineRead/></i>
                  </span>
                  <span className="head-text">Upload Data</span>
                  <span className="plus"></span>
                </Link>
              </li>
              <div
                id="flush-collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample"
              >
                        {/* content */}

                </div>
            </ul>
            {/* -------------------------------------------- */}

          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideNavbar;
