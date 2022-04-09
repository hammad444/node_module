


const express = require("express");
const router = express.Router();
const Joi = require("joi");

const otpService = require("../service/otpService");


// routes

router.post("/generate", _otpRequest);
router.post("/otpmatch", _otpMatch);
router.post("/resetpassword", _resetPassword);
router.post("/sendemail", _sendEmail);


module.exports = router;

function _otpRequest(req, res, next) {
    otpService
      .otpRequest(req.body.obj)
      .then((user) => res.json(user))
      .catch(next);
    }     

    function _otpMatch(req, res, next) {
      otpService
        .otpMatch(req.body.obj)
        .then((user) => res.json(user))
        .catch(next);
      }    

      function _resetPassword (req, res, next) {
        otpService
          .resetPassword(req.body.obj)
          .then((user) => res.json(user))
          .catch(next);
        }   

        function _sendEmail(req, res, next) {
          otpService
            .sendEmail(req.body.msg)
            .then((user) => res.json(user))
            .catch(next);
          } 
