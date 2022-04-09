import React, { useState, useEffect } from "react";
import SideNavbar from "./SideNavbar";
import { useDispatch, useSelector } from "react-redux";

import avatar from "../images/avatar.png";
import {
  AiOutlineCaretDown,
} from "react-icons/ai";
import UserForm from "./UserForm";
import PasswordForm from "./PasswordForm";
import PictureForm from "./PictureForm";

import { getUser} from "../actions/userActions";


const ProfilePage = () => {
  const dispatch = useDispatch();

  const loginUser = useSelector((state) => state.loginUser);
  const { userInfo } = loginUser;

  const userpic = useSelector((state) => state.userPicture);
  const picturemsg = userpic.success;

  const user = useSelector((state) => state.user);
  const newUser = user.user;

  const usrupdate= useSelector((state) => state.userUpdate);
  const updatemsg = usrupdate.success;

  useEffect(() => {
    dispatch(getUser(userInfo?.id));
  }, [userInfo]);

  useEffect(() => {
    dispatch(getUser(userInfo?.id));
  }, [dispatch, picturemsg]);

  useEffect(() => {
    dispatch(getUser(userInfo?.id));
  }, [dispatch, updatemsg]);



  return (
    <div>
      <div className="profile-page" id="accordion">
             {/* ---------------page-header--------------- */}
             <div className="pages-header">
                          <div className="row align-items-center">
                                  <div className="ml-3 page-header-title">
                                  <h2>My Profile</h2>
                                  </div>
                          </div>
                  </div>
        {/* --------------account item---------------------- */}
        <div className="user-account">
          <h5 className="ml-sm-4  d-flex justify-content-between align-items-center pt-2">
            {" "}
            <span>
              <i
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <AiOutlineCaretDown />
              </i>
              Account Info{" "}
            </span>
          </h5>
        </div>

        <div
          className="row collapse show user-account-details px-5 py-3 position-relative bg-white"
          id="collapseOne"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
<div className="account-item">
          <div className=" account-item-1">
           <span className="d-flex"> <h6>Criteria :</h6>
            <p>{newUser && newUser.criteria}</p></span>
            <span className="d-flex"><h6>First Name :</h6>
            <p>{newUser && newUser.firstName}</p></span>
            <span className="d-flex"><h6>Last Name :</h6>
            <p>{newUser && newUser.lastName}</p></span>
            <span className="d-flex"><h6>Email :</h6>
            <p>{newUser && newUser.email}</p></span>
          </div>
          <div className=" account-item-2">
          <span className="d-flex"><h6>Contact :</h6>
            <p>{newUser && newUser.contact}</p></span>
            <span className="d-flex"><h6>Address :</h6>
            <p>{newUser && newUser.address}</p></span>
            <span className="d-flex"><h6>City :</h6>
            <p>{newUser && newUser.city}</p></span>
            <span className="d-flex"><h6>Speciality :</h6>
            <p>{newUser && newUser.speciality}</p></span>
          </div>
          </div>
          <div className="image-box">
                <div className="user-image">
                  {newUser && newUser.picture == 0 ? (
                    <img src={avatar} />
                  ) : (
                    newUser && <img src={newUser.picture} />
                  )}
                </div>
                </div>
        </div>
        {/* --------------Edit Profile---------------------- */}
        <div className="user-account" id="headingTwo">
          <h5 className="ml-sm-4 d-flex justify-content-between align-items-center pt-2">
            {" "}
            <span>
              <i
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <AiOutlineCaretDown />
              </i>
              Edit Profile{" "}
            </span>
          </h5>
        </div>

        <div
          className="collapse user-account-details px-sm-5 py-3 position-relative bg-white"
          id="collapseTwo"
          aria-labelledby="headingTwo"
          data-parent="#accordion"
        >
    <div className="row tabs-container px-3 py-2">
  <div className="">
    <div className="nav nav-pills user-edit-tabs" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Change Account Info</a>
      <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Change Profile Picture</a>
      <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Change Password</a>
    </div>
  </div>
  <div className="mt-5">
    <div className="tab-content" id="v-pills-tabContent">
      <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><UserForm newUser={newUser}/></div>
      <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><PictureForm/></div>
      <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><PasswordForm/></div>
    </div>
  </div>
</div>

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
