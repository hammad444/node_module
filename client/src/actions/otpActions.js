import axios from "axios"
import {
  OTP_CODE_FAIL,
  OTP_CODE_REQUEST,
  OTP_CODE_SUCCESS,
  EMAIL_FAIL,
  EMAIL_REQUEST,
  EMAIL_SUCCESS  
} from "../constants/otpConstants"
// -----------------send  otp-------------------------------
export const sendOtp = (obj) => async (dispatch, getState) => {
    // console.log(obj, "otp action:: req")
    try {
      dispatch({
        type: OTP_CODE_REQUEST,
      })
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        'http://localhost:4000/otpcode/generate',
        {obj:obj}, config
      )
      // console.log(data,"otp action::res .....")
      dispatch({
        type: OTP_CODE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      // console.log(error.response,"otp action::error .....")
      dispatch({
        type: OTP_CODE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  // -----------------match  otp-------------------------------
export const matchOtp = (obj) => async (dispatch, getState) => {
  // console.log(obj, "otp match action:: req")
  try {
    dispatch({
      type: OTP_CODE_REQUEST,
    })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      'http://localhost:4000/otpcode/otpmatch',
      {obj:obj}, config
    )
    // console.log(data,"otp match action::res .....")
    dispatch({
      type: OTP_CODE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // console.log(error.response,"otp match action::error .....")
    dispatch({
      type: OTP_CODE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
// -----------------change password-----------------
export const changePassword = (obj) => async (dispatch, getState) => {
  // console.log(obj, "change password action:: req")
  try {
    dispatch({
      type: OTP_CODE_REQUEST,
    })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      'http://localhost:4000/otpcode/resetpassword',
      {obj:obj}, config
    )
    // console.log(data,"change password action::res .....")
    dispatch({
      type: OTP_CODE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // console.log(error.response,"change password action::error .....")
    dispatch({
      type: OTP_CODE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// -----------------change password-----------------
export const sendEmail = (msg) => async (dispatch, getState) => {
  // console.log(msg, "email send action:: req")
  try {
    dispatch({
      type: EMAIL_REQUEST,
    })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      'http://localhost:4000/otpcode/sendemail',
      {msg:msg}, config
    )
    // console.log(data,"email send action::res .....")
    dispatch({
      type: EMAIL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // console.log(error.response,"email send action::error .....")
    dispatch({
      type: EMAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

