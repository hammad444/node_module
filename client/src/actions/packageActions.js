import axios from "axios"
import {
   PACKAGE_FAIL,
   PACKAGE_REQUEST,
   PACKAGE_SUCCESS,
   CHOOSE_PACKAGE,
   GET_PACKAGES_FAIL,
   GET_PACKAGES_REQUEST,
   GET_PACKAGES_SUCCESS,
   DELETE_PACKAGE_FAIL,
   DELETE_PACKAGE_REQUEST,
   DELETE_PACKAGE_SUCCESS,
   UPDATE_PACKAGE_FAIL,
   UPDATE_PACKAGE_REQUEST,
   UPDATE_PACKAGE_SUCCESS,
   GET_PACKAGE_FAIL,
   GET_PACKAGE_REQUEST,
   GET_PACKAGE_SUCCESS,
} from "../constants/packageConstants"

// -----------------save packages-------------------------------
  export const setPackage = (obj) => async (dispatch, getState) => {
    // console.log(obj, "package action:: req")
    try {
      dispatch({
        type: PACKAGE_REQUEST,
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
        'http://localhost:4000/packages/setpackage',
        obj, config
      )
      // console.log(data,"package action::res .....")
      dispatch({
        type: PACKAGE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      // console.log(error.response,"package action::error .....")
      dispatch({
        type: PACKAGE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
     // -----------------get package-------------------------------
 export const getPackage = (pkg) => async (dispatch, getState) => {

  try {
    dispatch({
      type: GET_PACKAGE_REQUEST,
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
      `http://localhost:4000/packages/package`, {package:pkg},config
    )

    // console.log(data,"package action::res .....")
    dispatch({
      type: GET_PACKAGE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // console.log(error.response.data.message,"package action::error .....")
    dispatch({
      type: GET_PACKAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
    // -----------------delete package-------------------------------
    export const deletePackage = (id) => async (dispatch, getState) => {
      try {
        dispatch({
          type: DELETE_PACKAGE_REQUEST,
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
          `http://localhost:4000/packages/${id}`,config
        )
        // console.log(data,"package delete action::res .....")
        dispatch({
          type: DELETE_PACKAGE_SUCCESS,
          payload: data,
        })
      } catch (error) {
        // console.log(error.response,"package delete  action::error .....")
        dispatch({
          type: DELETE_PACKAGE_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      }
    }
        // -----------------update package-------------------------------
        export const updatePackage = (obj,id) => async (dispatch, getState) => {
          try {
            dispatch({
              type: UPDATE_PACKAGE_REQUEST,
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
              `http://localhost:4000/packages/${id}`,obj,config
            )
            // console.log(data,"package update action::res .....")
            dispatch({
              type: UPDATE_PACKAGE_SUCCESS,
              payload: data,
            })
          } catch (error) {
            // console.log(error.response,"package update  action::error .....")
            dispatch({
              type: UPDATE_PACKAGE_FAIL,
              payload:
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
            })
          }
        }
    // -----------------get packages-------------------------------
    export const getPackages = (obj) => async (dispatch, getState) => {
      try {
        dispatch({
          type: GET_PACKAGES_REQUEST,
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
          'http://localhost:4000/packages/allPackages',config
        )
        // console.log(data,"package action::res .....")
        dispatch({
          type: GET_PACKAGES_SUCCESS,
          payload: data,
        })
      } catch (error) {
        // console.log(error.response,"package action::error .....")
        dispatch({
          type: GET_PACKAGES_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      }
    }
      
  // -----------------choose package-------------------------------
  export const choosePackage = (data) => async (dispatch, getState) => {
    // console.log(data,"package action::res .....")
    dispatch({
      type: CHOOSE_PACKAGE,
      payload: data,
    })

  }