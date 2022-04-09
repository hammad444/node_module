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

// -----------------save payments-------------------------------
  export const setPayment = (obj) => async (dispatch, getState) => {
    // console.log(obj, "payment action:: req")
    try {
      dispatch({
        type: PAYMENT_REQUEST,
      })
      const {
        loginUser: { userInfo },
      } = getState()
  
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const formData=new FormData()
      formData.append("id",obj.id)
      formData.append("email",obj.email)
      formData.append("package",obj.package)
      formData.append("receipt",obj.receipt)
      formData.append("isPaid",obj.isPaid)
    
      //  console.log(formData,"............")
      const { data } = await axios.post(
        'http://localhost:4000/payments/pay',
        formData, config
      )
      // console.log(data,"payment action::res .....")
      dispatch({
        type: PAYMENT_SUCCESS,
        payload: data,
      })
    } catch (error) {
      // console.log(error.response,"payment action::error .....")
      dispatch({
        type: PAYMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
   // -----------------get payment-------------------------------
 export const getPayment = (id) => async (dispatch, getState) => {

  try {
    dispatch({
      type: GET_PAYMENT_REQUEST,
    })
    const {
      loginUser: { userInfo },
    } = getState()


    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      `http://localhost:4000/payments/payment`, {id:id},config
    )
    // console.log(data,"payment action::res .....")
    dispatch({
      type: GET_PAYMENT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // console.log(error.response.data.message,"payment action::error .....")
    dispatch({
      type: GET_PAYMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
   // -----------------get payment-------------------------------
   export const searchPayment = (obj) => async (dispatch, getState) => {

    try {
      dispatch({
        type: SEARCH_PAYMENTS_REQUEST,
      })
      const {
        loginUser: { userInfo },
      } = getState()
  
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `http://localhost:4000/payments/search`, obj,config
      )
      // console.log(data,"search payment action::res .....")
      dispatch({
        type: SEARCH_PAYMENTS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      // console.log(error.response.data.message,"search payment action::error .....")
      dispatch({
        type: SEARCH_PAYMENTS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
      // -----------------delete payment-------------------------------
      export const deletePayment = (id) => async (dispatch, getState) => {
        try {
          dispatch({
            type: DELETE_PAYMENT_REQUEST,
          })
          const {
            loginUser: { userInfo },
          } = getState()
      
      
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userInfo.token}`,
            },
          };
          const { data } = await axios.delete(
            `http://localhost:4000/payments/${id}`,config
          )
          // console.log(data,"payment delete action::res .....")
          dispatch({
            type: DELETE_PAYMENT_SUCCESS,
            payload: data,
          })
        } catch (error) {
          // console.log(error.response,"payment delete  action::error .....")
          dispatch({
            type: DELETE_PAYMENT_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
        }
      }
        // -----------------update payment-------------------------------
    export const updatePayment = (obj,id) => async (dispatch, getState) => {
      try {
        dispatch({
          type: UPDATE_PAYMENT_REQUEST,
        })
        const {
          loginUser: { userInfo },
        } = getState()
    
    
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        const { data } = await axios.put(
          `http://localhost:4000/payments/${id}`,obj,config
        )
        // console.log(data,"payment update action::res .....")
        dispatch({
          type: UPDATE_PAYMENT_SUCCESS,
          payload: data,
        })
      } catch (error) {
        // console.log(error.response,"payment update  action::error .....")
        dispatch({
          type: UPDATE_PAYMENT_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      }
    }
  // -----------------get payments-------------------------------
  export const getPayments = (obj) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_PAYMENTS_REQUEST,
      })
      const {
        loginUser: { userInfo },
      } = getState()
  
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(
        'http://localhost:4000/payments/allPayments',config
      )
      // console.log(data,"payment action::res .....")
      dispatch({
        type: GET_PAYMENTS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      // console.log(error.response.data.message,"payment action::error .....")
      dispatch({
        type: GET_PAYMENTS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
