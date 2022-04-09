
import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import {AiOutlineBell} from "react-icons/ai";
import {
  Link,
} from "react-router-dom";
import { logout } from '../actions/userActions'

const Header = (props) => {
  const dispatch = useDispatch()

  const loginUser = useSelector((state) => state.loginUser);
  const {userInfo}=loginUser

// ------------------logout handler-----------------------
  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div>
      <nav className="navbar header-navbar">
        <div className="navbar-wrapper">
          <div className="navbar-container container-fluid">
            <ul className="nav-left">
              <li className="navbar-logo p-0">
                <Link to="/">
                  <img
                    className="img-fluid img-radius"
                    src="assets/images/logo1.png"
                    alt=""
                  />
                </Link>
              </li>
              <li className="menu-button p-0 mobile-menu"
                                id="mobile-collapse"
                                onClick={props.function}>
                  <i className="ti-menu"></i>
              </li>
              <li className="zoom-button  p-0">
                  <i className="ti-fullscreen"></i>
              </li>
            </ul>
            <ul className="nav-right">
              <li className="dropdown notifications-icon">
                <a
                  className="dropdown-toggle waves-effect waves-light"
                  id="navbarDarkDropdownMenuLink1"
                  role="button"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="dott"></span>
                  <AiOutlineBell/>
                </a>
                <ul
                  className="dropdown-menu notifications"
                  aria-labelledby="navbarDarkDropdownMenuLink1"
                >
                  <span className="notifications-header">
                    <h6>Notifications</h6>
                    <label className="label label-danger">New</label>
                  </span>
                  <li className="waves-effect waves-light">
                    <div className="media">
                      <img
                        className="d-flex align-self-center img-radius"
                        src="assets/images/avatar-2.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <h5 className="notification-user">Jhon Doe</h5>
                        <p className="notification-msg">
                          Lorem ipsum dolor sit amet, consectetuer elit.
                        </p>
                        <span className="notification-time">
                          30 minutes ago
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="waves-effect waves-light">
                    <div className="media">
                      <img
                        className="d-flex align-self-center img-radius"
                        src="assets/images/avatar-4.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <h5 className="notification-user">Joseph William</h5>
                        <p className="notification-msg">
                          Lorem ipsum dolor sit amet, consectetuer elit.
                        </p>
                        <span className="notification-time">
                          30 minutes ago
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="waves-effect waves-light">
                    <div className="media">
                      <img
                        className="d-flex align-self-center img-radius"
                        src="assets/images/avatar-3.jpg"
                        alt=""
                      />
                      <div className="media-body">
                        <h5 className="notification-user">Sara Soudein</h5>
                        <p className="notification-msg">
                          Lorem ipsum dolor sit amet, consectetuer elit.
                        </p>
                        <span className="notification-time">
                          30 minutes ago
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown user-profile">
                <a
                  className="dropdown-toggle waves-effect waves-light"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/avatar-4.jpg"
                    className="img-radius"
                    alt=""
                  />
                  <span className="user-name">{userInfo && userInfo.token ? userInfo.firstName:"Hi! User"}</span>
                  {/* <i className="ti-angle-down"></i> */}
                </a>
                <ul
                  className="dropdown-menu profile-items"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li className="waves-effect waves-light">
                      <i className="ti-settings"></i> Settings
                  </li>
                  <li className="waves-effect waves-light">
                    <Link to={userInfo && userInfo.token ? "/profile" :"/signup"}>
                      <i className="ti-user"></i> Profile
                    </Link>
                  </li>
                  <li className="waves-effect waves-light">
                  <Link to={userInfo && userInfo.token ? "/packages" :"/signup"}>
                      <i className="ti-email"></i> Payment
                      </Link>
                  </li>
                  <li className="waves-effect waves-light">
                      <i className="ti-lock"></i> Lock Screen
                  </li>
                  <li className="waves-effect waves-light" onClick={logoutHandler}>
                  <Link to="/login">
                      <i className="ti-layout-sidebar-left"></i> Logout
                      </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
