
import React,{ useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {AiOutlineMenu,AiOutlineBell, AiOutlineHome, AiOutlineSetting,AiOutlineUser,AiOutlineIdcard,AiOutlineLock} from "react-icons/ai";

import avatar from "../images/avatar.png"
import avatar2 from "../images/avatar-2.jpg"
import avatar3 from "../images/avatar-3.jpg"
import avatar4 from "../images/avatar-4.jpg"
import logo1 from "../images/logo1.png"
import {
  Link,
} from "react-router-dom";
import { logout, getUser } from '../actions/userActions'


const Header = (props) => {
  const dispatch = useDispatch()

  const loginUser = useSelector((state) => state.loginUser);
  const {userInfo}=loginUser

  const userpic = useSelector((state) => state.userPicture);
  const picturemsg=userpic.success

  const user = useSelector((state) => state.user);
  const newUser=user.user

 useEffect(()=>{
dispatch(getUser(userInfo?.id))
 },[picturemsg])

 useEffect(()=>{
  dispatch(getUser(userInfo?.id))
   },[userInfo])

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
                    src={logo1}
                    alt="Theme-Logo"
                  />
                </Link>
              </li>
              <li className="menu-button p-0">
                <i
                  className="mobile-menu"
                  id="mobile-collapse"
                  onClick={props.function}
                >
                  <AiOutlineMenu/>
                </i>
              </li>
              {/* <li className="zoom-button  p-0">
                <a
                  href="#!"
                  onClick="javascript:toggleFullScreen()"
                  className="waves-effect waves-light"
                >
                  <i className="ti-fullscreen"></i>
                </a>
              </li> */}
            </ul>
            <ul className="nav-right">
              {/* <li className="dropdown notifications-icon">
                <a
                  href="#"
                  className="dropdown-toggle waves-effect waves-light"
                  id="navbarDarkDropdownMenuLink1"
                  role="button"
                  type="button"
                  data-toggle="dropdown"
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
                        src={avatar2}
                        alt="Generic placeholder image"
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
                        src={avatar4}
                        alt="Generic placeholder image"
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
                        src={avatar3}
                        alt="Generic placeholder image"
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
              </li> */}
              <li className="dropdown user-profile">
                <a
                  href="#"
                  className="dropdown-toggle waves-effect waves-light"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userInfo && userInfo.picture == 0 || userInfo?.id== "undefined"?
                                    <img
                                    src={avatar}
                                    className="user-image-small img-radius"
                                  />:
                                  <img
                                  src={newUser && newUser.picture}
                                  className="user-image-small img-radius"
                                />
                  }

                  <span className="user-name">{userInfo && userInfo.token ? userInfo.firstName:"Hi! User"}</span>
                </a>
                <ul
                  className="dropdown-menu profile-items"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li className="waves-effect waves-light">
                    <a href="#!">
                      <i>< AiOutlineSetting/></i> Settings
                    </a>
                  </li>
                  <li className="waves-effect waves-light">
                    <Link to={userInfo && userInfo.isAdmin==false ? "/profile" :""}>
                      <i><AiOutlineUser/></i> Profile
                    </Link>
                  </li>
                  <li className="waves-effect waves-light">
                  <Link to={userInfo && userInfo.isAdmin==false ? "/payment" :""}>
                      <i><AiOutlineIdcard/></i> Payment
                      </Link>
                  </li>
                  <li className="waves-effect waves-light" onClick={logoutHandler}>
                  <Link to="/login">
                      <i><AiOutlineLock/></i> Logout
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
