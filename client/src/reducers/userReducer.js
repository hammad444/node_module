import {

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    GET_USER_FAIL,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
   SEARCH_USERS_REQUEST,
   SEARCH_USERS_SUCCESS,
   SEARCH_USERS_FAIL,
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    PICTURE_REQUEST,
    PICTURE_SUCCESS,
    PICTURE_FAIL,
    DELETE_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
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
  

  export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true }
      case USER_REGISTER_SUCCESS:
        return { loading: false, resmessage: action.payload }
      case USER_REGISTER_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const UserDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_USER_REQUEST:
        return { loading: true }
      case DELETE_USER_SUCCESS:
        return { loading: false, success: true }
      case DELETE_USER_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const UserUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_USER_REQUEST:
        return { loading: true }
      case UPDATE_USER_SUCCESS:
        return { loading: false, success:true , message:action.payload}
      case UPDATE_USER_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { loading: true }
      case USER_LOGIN_SUCCESS:
        return { loading: false, userInfo: action.payload }
      case USER_LOGIN_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const userReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_USER_REQUEST:
        return { loading: true }
      case GET_USER_SUCCESS:
        return { loading: false, user: action.payload }
      case GET_USER_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const allUsersReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_USERS_REQUEST:
        return { loading: true }
      case GET_USERS_SUCCESS:
        return { loading: false, users: action.payload }
      case GET_USERS_FAIL:
        return { loading: false, error: action.payload }
        case SEARCH_USERS_REQUEST:
          return { loading: true }
        case SEARCH_USERS_SUCCESS:
          return { loading: false, users: action.payload }
        case SEARCH_USERS_FAIL:
          return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const userPictureReducer = (state = {}, action) => {
    switch (action.type) {
      case PICTURE_REQUEST:
        return { loading: true }
      case PICTURE_SUCCESS:
        return { loading: false, success: true}
      case PICTURE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const payAccountReducer = (state = {}, action) => {
    switch (action.type) {
      case PAY_ACCOUNT_REQUEST:
        return { loading: true }
      case PAY_ACCOUNT_SUCCESS:
        return { loading: false, success: true, msg:action.payload}
      case PAY_ACCOUNT_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const allPayAccountsReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_PAY_ACCOUNT_REQUEST:
        return { loading: true }
      case GET_PAY_ACCOUNT_SUCCESS:
        return { loading: false, accounts:action.payload}
      case GET_PAY_ACCOUNT_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }