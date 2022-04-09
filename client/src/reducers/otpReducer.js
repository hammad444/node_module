import axios from "axios"
import {
  OTP_CODE_FAIL,
  OTP_CODE_REQUEST,
  OTP_CODE_SUCCESS,
  EMAIL_FAIL,
  EMAIL_REQUEST,
  EMAIL_SUCCESS  
} from "../constants/otpConstants"

export const OtpCodeReducer = (state = {}, action) => {
    switch (action.type) {
      case OTP_CODE_REQUEST:
        return { loading: true }
      case OTP_CODE_SUCCESS:
        return { loading: false, message: action.payload}
      case OTP_CODE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const mailReducer = (state = {}, action) => {
    switch (action.type) {
      case EMAIL_REQUEST:
        return { loading: true }
      case EMAIL_SUCCESS:
        return { loading: false, msg: action.payload, success:true}
      case EMAIL_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }