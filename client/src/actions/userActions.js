import axios from "axios"
import {
   USER_REGISTER_FAIL,
   USER_REGISTER_REQUEST,
   USER_REGISTER_SUCCESS,
   USER_LOGIN_FAIL,
   USER_LOGIN_REQUEST,
   USER_LOGIN_SUCCESS,
   USER_LOGOUT,
   GET_USER_FAIL,
   GET_USER_REQUEST,
   GET_USER_SUCCESS,
   SEARCH_USERS_REQUEST,
   SEARCH_USERS_SUCCESS,
   SEARCH_USERS_FAIL,
   GET_USERS_FAIL,
   GET_USERS_REQUEST,
   GET_USERS_SUCCESS,
   DELETE_USER_FAIL,
   DELETE_USER_REQUEST,
   DELETE_USER_SUCCESS,
   PICTURE_FAIL,
   PICTURE_REQUEST,
   PICTURE_SUCCESS,
   UPDATE_USER_FAIL,
   UPDATE_USER_REQUEST,
   UPDATE_USER_SUCCESS,
   PAY_ACCOUNT_FAIL,
   PAY_ACCOUNT_REQUEST,
   PAY_ACCOUNT_SUCCESS,
   GET_PAY_ACCOUNT_FAIL,
   GET_PAY_ACCOUNT_REQUEST,
   GET_PAY_ACCOUNT_SUCCESS,
   
} from "../constants/userConstants"

// -----------------register user-------------------------------
  export const register = (obj) => async (dispatch, getState) => {
    // console.log(obj, "register action:: req")
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      })
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        'http://localhost:4000/users/register',
       obj, config
      )
      // console.log(data,"register action::res .....")
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      })
    } catch (error) {
      console.log(error.response,"register action::error .....")
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
// -----------------login user-------------------------------
export const login = (obj) => async (dispatch) => {

  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      'http://localhost:4000/users/authenticate',
      obj,
      config
    )
    // console.log(data,"login action::res.....")
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })
  if(data.token){
    localStorage.setItem('userInfo', JSON.stringify(data))
  }
  } catch (error) {
    // console.log(error.response,"login action::error .....")
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
 // -----------------get user-------------------------------
 export const getUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_USER_REQUEST,
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
      `http://localhost:4000/users/user/${id}`,config
    )
    // console.log(data,"user action::res .....")
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // console.log(error.response.data.message,"user action::error .....")
    dispatch({
      type: GET_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
 // -----------------get all users-------------------------------
 export const getUsers = (obj) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_USERS_REQUEST,
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
      'http://localhost:4000/users/allUsers',config
    )
    // console.log(data,"users action::res .....")
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // console.log(error.response.data.message,"users action::error .....")
    dispatch({
      type: GET_USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
 // -----------------search user-------------------------------
 export const searchUser = (obj) => async (dispatch, getState) => {
  //  console.log(obj,".......")
  try {
    dispatch({
      type: SEARCH_USERS_REQUEST,
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
      "http://localhost:4000/users/search",
      obj, config
    )

    // console.log(data,"search user action::res .....")
    dispatch({
      type: SEARCH_USERS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // console.log(error.response.data.message,"search user action::error .....")
    dispatch({
      type: SEARCH_USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
// -----------------save Picture-------------------------------
export const savePicture = (file, id) => async (dispatch, getState) => {
  // console.log(file, "userPicture action:: req")
  try {
    dispatch({
      type: PICTURE_REQUEST,
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
    formData.append("file",file)
  
    //  console.log(formData,"............")

    const { data } = await axios.put(
      `http://localhost:4000/users/picture/${id}`,
      formData,config
    )
    // console.log(data,"userPicture action::res .....")
    dispatch({
      type: PICTURE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // console.log(error.response,"userPicture action::error .....")
    dispatch({
      type: PICTURE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
  // -----------------update user-------------------------------
    export const updateUser = (obj,id) => async (dispatch, getState) => {
      try {
        dispatch({
          type: UPDATE_USER_REQUEST,
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
          `http://localhost:4000/users/${id}`,obj,config
        )
        // console.log(data,"user update action::res .....")
        dispatch({
          type: UPDATE_USER_SUCCESS,
          payload: data,
        })
      } catch (error) {
        // console.log(error.response,"user update  action::error .....")
        dispatch({
          type: UPDATE_USER_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      }
    }
      // -----------------update password-------------------------------
      export const updatePassword = (obj,id) => async (dispatch, getState) => {
        try {
          dispatch({
            type: UPDATE_USER_REQUEST,
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
            `http://localhost:4000/users/password/${id}`, obj,config
          )
          // console.log(data,"user password update action::res .....")

          dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: data,
          })
        } catch (error) {
          // console.log(error,"user password update action::error .....")
          dispatch({
            type: UPDATE_USER_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
        }
      }
    // -----------------delete user-------------------------------
    export const deleteUser = (id) => async (dispatch, getState) => {
      try {
        dispatch({
          type: DELETE_USER_REQUEST,
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
          `http://localhost:4000/users/${id}`,config
        )
        // console.log(data,"user delete action::res .....")
        dispatch({
          type: DELETE_USER_SUCCESS,
          payload: data,
        })
      } catch (error) {
        // console.log(error.response,"user delete  action::error .....")
        dispatch({
          type: DELETE_USER_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      }
    }
     // -----------------download all users-------------------------------
 export const downloadUsers = (obj) => async (dispatch, getState) => {

  try {
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
      'http://localhost:4000/users/exportcsv',config
    )
    // console.log(data,"download")
  } catch (error) {
    // console.log(error.response.data.message,"download users action::error .....")
    dispatch({
      type: GET_USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


// -----------------pay account-------------------------------
export const payAccount = (obj) => async (dispatch, getState) => {
  // console.log(obj, "pay account action:: req")
  try {
    dispatch({
      type: PAY_ACCOUNT_REQUEST,
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
      'http://localhost:4000/users/payaccount',
     obj, config
    )
    // console.log(data,"pay account action::res .....")
    dispatch({
      type: PAY_ACCOUNT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // console.log(error.response,"pay account action::error .....")
    dispatch({
      type: PAY_ACCOUNT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
// ---------------------getPayAccount--------------------------------------
export const getPayAccount = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PAY_ACCOUNT_REQUEST,
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
      'http://localhost:4000/users/allPayAccounts',config
    )
    // console.log(data,"get pay accounts action::res .....")
    dispatch({
      type: GET_PAY_ACCOUNT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // console.log(error.response.data.message,"get pay accounts action::error .....")
    dispatch({
      type: GET_PAY_ACCOUNT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
// -----------------logout user-------------------------------
export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
  // dispatch({ type: USER_DETAILS_RESET })
  document.location.href = '/login'
}