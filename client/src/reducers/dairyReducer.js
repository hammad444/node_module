import axios from "axios"
import { data } from "jquery"
import {
  ALL_CASES_FAIL,
  ALL_CASES_REQUEST,
  ALL_CASES_SUCCESS,
   CREATE_CLIENT_FAIL,
   CREATE_CLIENT_REQUEST,
   CREATE_CLIENT_SUCCESS,
   UPDATE_CLIENT_FAIL,
   UPDATE_CLIENT_REQUEST,
   UPDATE_CLIENT_SUCCESS,
   GET_CLIENTS_FAIL,
   GET_CLIENTS_REQUEST,
   GET_CLIENTS_SUCCESS,
   GET_CLIENT_FAIL,
   GET_CLIENT_REQUEST,
   GET_CLIENT_SUCCESS,
   CREATE_CASE_FAIL,
   CREATE_CASE_REQUEST,
   CREATE_CASE_SUCCESS,
   UPDATE_CASE_FAIL,
   UPDATE_CASE_REQUEST,
   UPDATE_CASE_SUCCESS,
   GET_CASES_FAIL,
   GET_CASES_REQUEST,
   GET_CASES_SUCCESS,
   GET_CASE_FAIL,
   GET_CASE_REQUEST,
   GET_CASE_SUCCESS,

   CASES_FILES_FAIL,
   CASES_FILES_REQUEST,
   CASES_FILES_SUCCESS,

   CASES_READ_IDS
} from "../constants/dairyConstants"

export const allClientsCasesReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_CASES_REQUEST:
      return { loading: true }
    case ALL_CASES_SUCCESS:
      return { loading: false, count: action.payload }
    case ALL_CASES_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const allClientsReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_CLIENTS_REQUEST:
        return { loading: true }
      case GET_CLIENTS_SUCCESS:
        return { loading: false, clients: action.payload }
      case GET_CLIENTS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const clientReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_CLIENT_REQUEST:
        return { loading: true }
      case GET_CLIENT_SUCCESS:
        return { loading: false, client: action.payload }
      case GET_CLIENT_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const ClientCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_CLIENT_REQUEST:
        return { loading: true }
      case CREATE_CLIENT_SUCCESS:
        return { loading: false, success: true }
      case CREATE_CLIENT_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const ClientUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_CLIENT_REQUEST:
        return { loading: true }
      case UPDATE_CLIENT_SUCCESS:
        return { loading: false, success: true }
      case UPDATE_CLIENT_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const allClientCasesReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_CASES_REQUEST:
        return { loading: true }
      case GET_CASES_SUCCESS:
        return { loading: false, cases: action.payload.cases,hearings:action.payload.hearings }
      case GET_CASES_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const caseReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_CASE_REQUEST:
        return { loading: true }
      case GET_CASE_SUCCESS:
        return { loading: false, case: action.payload }
      case GET_CASE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


  export const CaseCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_CASE_REQUEST:
        return { loading: true }
      case CREATE_CASE_SUCCESS:
        return { loading: false, success: true }
      case CREATE_CASE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const CaseUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_CASE_REQUEST:
        return { loading: true }
      case UPDATE_CASE_SUCCESS:
        return { loading: false, success: true }
      case UPDATE_CASE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const CaseReadIdsReducer = (state = {}, action) => {
    switch (action.type) {
      case CASES_READ_IDS:
        return { loading: false, ids: action.payload }
      default:
        return state
    }
  }

  export const CaseFilesReducer = (state = {}, action) => {
    switch (action.type) {
      case CASES_FILES_REQUEST:
        return { loading: true }
      case CASES_FILES_SUCCESS:
        return { loading: false, files: action.payload }
      case CASES_FILES_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }