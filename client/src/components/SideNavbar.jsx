import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import { AiOutlineHome,AiOutlineSearch, AiOutlineBook,AiOutlineForm,AiOutlineContainer,AiOutlineDatabase,AiOutlineStar ,AiOutlineRead} from "react-icons/ai";

import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineDoubleRight,
} from "react-icons/ai";

const SideNavbar = () => {
  let navigate = useNavigate();
  const NavigatePage=()=>{
    navigate("/search")
  }
  return (
    <div>
      <nav className="side-navbar" id="side-navbar">
        <div className="main-menu">
          <div className="sidebar-header">
            <img
              className=" mb-0"
              src="assets/images/logo.png"
              alt="User-Profile-Image"
            />
          </div>

          {/* ---------------search accordion----------------------- */}
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingOne">
                <Link to="/"
                  className="accordion-button collapsed"
                  type="button"
                >
                  <span className="head-icon">
                    <i><AiOutlineHome/></i>
                  </span>
                  <span className="head-text">Home</span>
                  <span className="plus"></span>
                </Link>
              </li>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-parent="#accordionFlushExample"
              >
                </div>
            </ul>
            {/* ------------search accordion-------------------- */}
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingTwo">
                <a 
                  className="accordion-button collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                  onClick={NavigatePage}
                >
                  <span className="head-icon">
                    <i><AiOutlineSearch/></i>
                  </span>
                  <span className="head-text">Search</span>
                  <span className="plus" id="plus">
                    <AiOutlinePlus />
                  </span>
                  <span className="minus" id="minus">
                    <AiOutlineMinus />
                  </span>
                </a>
              </li>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <nav
                    className="nav flex-column nav-pills me-3"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link active"
                      id="v-pills-one-tab"
                      data-toggle="pill"
                      data-target="#v-pills-one"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-one"
                      aria-selected="true"
                    >
                      <i className="fas fa-circle"></i> Case Law Search{" "}
                      <span className="d-arrow">
                        <AiOutlineDoubleRight />
                      </span>
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-two-tab"
                      data-toggle="pill"
                      data-target="#v-pills-two"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-two"
                      aria-selected="false"
                    >
                      <i className="fas fa-circle"></i> Index Search{" "}
                      <span className="d-arrow">
                        <AiOutlineDoubleRight />
                      </span>
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-three-tab"
                      data-toggle="pill"
                      data-target="#v-pills-three"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-three"
                      aria-selected="false"
                    >
                      <i className="fas fa-circle"></i> Citation Search{" "}
                      <span className="d-arrow">
                        <AiOutlineDoubleRight />
                      </span>
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-four-tab"
                      data-toggle="pill"
                      data-target="#v-pills-four"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-four"
                      aria-selected="false"
                    >
                      <i className="fas fa-circle"></i> CourtWise Search{" "}
                      <span className="d-arrow">
                        <AiOutlineDoubleRight />
                      </span>
                    </a>
                    <a
                      className="nav-link"
                      id="v-pills-five-tab"
                      data-toggle="pill"
                      data-target="#v-pills-five"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-five"
                      aria-selected="false"
                    >
                      <i className="fas fa-circle"></i> Advance Search{" "}
                      <span className="d-arrow">
                        <AiOutlineDoubleRight />
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
            </ul>
            {/* ---------------Legal Terms accordion----------------------- */}
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingThree">
                <Link 
                to="/legal-terms"
                  className="accordion-button collapsed"
                >
                  <span className="head-icon">
                    <i><AiOutlineBook/></i>
                  </span>
                  <span className="head-text">Legal Terms</span>
                  <span className="plus"></span>
                </Link>
              </li>
            </ul>
            {/* --------------Articles--------------------- */}
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingFour">
              <Link 
                to="/articles"
                  className="accordion-button collapsed"
                >
                  <span className="head-icon">
                    <i><AiOutlineForm/></i>
                  </span>
                  <span className="head-text">Articles</span>
                  <span className="plus"></span>
                </Link>
              </li>
            </ul>
             {/* --------------Topics--------------------- */}
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingFive">
              <Link 
                to="/topics"
                  className="accordion-button collapsed"
                >
                  <span className="head-icon">
                  <i><AiOutlineDatabase/></i>
                  </span>
                  <span className="head-text">Topics</span>
                  <span className="plus"></span>
                </Link>
              </li>
            </ul>
             {/* --------------Statutes--------------------- */}
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingSix">
              <Link 
                to="/statutes"
                  className="accordion-button collapsed"
                >
                  <span className="head-icon">
                    <i><AiOutlineContainer/></i>
                  </span>
                  <span className="head-text">Statutes</span>
                  <span className="plus"></span>
                </Link>
              </li>
            </ul>
            {/* -------------------Dictionary------------------------- */}
            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingSeven">
              <Link 
                to="/dictionary"
                  className="accordion-button collapsed"
                >
                  <span className="head-icon">
                   <i><AiOutlineRead/></i>
                  </span>
                  <span className="head-text">Dictionary</span>
                  <span className="plus"></span>
                </Link>
              </li>
            </ul>
            {/* -------------------Bookmarks------------------------- */}

            <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingEight">
              <Link 
                to="/bookmarks"
                  className="accordion-button collapsed"
                >
                  <span className="head-icon">
                    <i><AiOutlineStar/></i>
                  </span>
                  <span className="head-text">Bookmarks</span>
                  <span className="plus"></span>
                </Link>
              </li>
            </ul>

                        {/* -------------------LawyersDairy------------------------- */}
                        <ul className="item accordion-item">
              <li className="accordion-header" id="flush-headingEight">
              <Link 
                to="/lawyersdairy"
                  className="accordion-button collapsed"
                >
                  <span className="head-icon">
                   <i><AiOutlineRead/></i>
                  </span>
                  <span className="head-text">Lawyer's Dairy</span>
                  <span className="plus"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideNavbar;
