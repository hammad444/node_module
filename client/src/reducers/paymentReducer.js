import axios from "axios"
import {
   PAYMENT_FAIL,
   PAYMENT_REQUEST,
   PAYMENT_SUCCESS,
   GET_PAYMENTS_FAIL,
   GET_PAYMENTS_REQUEST,
   GET_PAYMENTS_SUCCESS,
   DELETE_PAYMENT_FAIL,
   DELETE_PAYMENT_REQUEST,
   DELETE_PAYMENT_SUCCESS,
   UPDATE_PAYMENT_FAIL,
   UPDATE_PAYMENT_REQUEST,
   UPDATE_PAYMENT_SUCCESS,
   GET_PAYMENT_FAIL,
   GET_PAYMENT_REQUEST,
   GET_PAYMENT_SUCCESS,
   SEARCH_PAYMENTS_FAIL,
   SEARCH_PAYMENTS_REQUEST,
   SEARCH_PAYMENTS_SUCCESS,
} from "../constants/paymentConstants"
  

  export const paymentReducer = (state = {}, action) => {
    switch (action.type) {
      case PAYMENT_REQUEST:
        return { loading: true }
      case PAYMENT_SUCCESS:
        return { loading: false, payment: action.payload.data, success:true,message:action.payload.message }
      case PAYMENT_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


  export const allPaymentsReducer = (state = {}, action) => {
    switch (action.type) {
      case SEARCH_PAYMENTS_REQUEST:
        return { loading: true }
      case SEARCH_PAYMENTS_SUCCESS:
        return { loading: false, payments: action.payload }
      case SEARCH_PAYMENTS_FAIL:
        return { loading: false, error: action.payload }
      case GET_PAYMENTS_REQUEST:
        return { loading: true }
      case GET_PAYMENTS_SUCCESS:
        return { loading: false, payments: action.payload }
      case GET_PAYMENTS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const PaymentDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_PAYMENT_REQUEST:
        return { loading: true }
      case DELETE_PAYMENT_SUCCESS:
        return { loading: false, success: true }
      case DELETE_PAYMENT_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


  export const PaymentUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_PAYMENT_REQUEST:
        return { loading: true }
      case UPDATE_PAYMENT_SUCCESS:
        return { loading: false, success: true }
      case UPDATE_PAYMENT_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


  export const GetPaymentReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_PAYMENT_REQUEST:
        return { loading: true }
      case GET_PAYMENT_SUCCESS:
        return { loading: false, payment: action.payload }
      case GET_PAYMENT_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }