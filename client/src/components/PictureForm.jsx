import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import avatar from "../images/avatar.png";

import {savePicture } from "../actions/userActions";

const PictureForm = () => {
    const dispatch = useDispatch();

    const [message, setMessage] = useState(null);
    const [file, setFile] = useState("");


    const user = useSelector((state) => state.user);
    const newUser = user.user;

    // --------------------------------------------
const handleChange = (obj, e) => {
    setFile(obj);
    // console.log(file, "file............");
    if (e.target.nextElementSibling.className == "picture-submit-btn") {
      e.target.nextElementSibling.style.display = "block";
    }
    document.querySelector(".picture-submit-btn").style.display = "block";
  };
  
  const submitPicture = (e, id) => {
    e.preventDefault();
    dispatch(savePicture(file, id));
    document.querySelector(".picture-submit-btn").style.display = "none";
  };
  return (
                <div className="w-100 image-form px-5 pb-5 bg-white">
            <form>
              <label for="formFile">
                <div className="user-avatar">
                  {newUser && newUser.picture == 0 ? (
                    <img src={avatar} />
                  ) : (
                    newUser && <img src={newUser.picture} />
                  )}
                </div>
              </label>
              <input
                className="ppic-input ml-4"
                type="file"
                id="formFile"
                onChange={(e) => handleChange(e.target.files[0], e)}
              />
              <button
                type="button"
                className="btn-success picture-submit-btn"
                onClick={(e) => submitPicture(e, newUser.id)}
              >
                Save Picture
              </button>
            </form>
          </div>
  )
}

export default PictureForm