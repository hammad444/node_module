
import {

   SEARCH_CASE_FAIL,
   SEARCH_CASE_REQUEST,
   SEARCH_CASE_SUCCESS,

   SEARCH_INDEX_FAIL,
   SEARCH_INDEX_REQUEST,
   SEARCH_INDEX_SUCCESS,

   SEARCH_CITATION_FAIL,
   SEARCH_CITATION_REQUEST,
   SEARCH_CITATION_SUCCESS,

   SEARCH_COURT_FAIL,
   SEARCH_COURT_REQUEST,
   SEARCH_COURT_SUCCESS,

   SEARCH_ADVANCE_FAIL,
   SEARCH_ADVANCE_REQUEST,
   SEARCH_ADVANCE_SUCCESS,

} from "../constants/searchConstants"

export const searchCaseReducer = (state = {}, action) => {
    switch (action.type) {
      case SEARCH_CASE_REQUEST:
        return { loading: true }
      case SEARCH_CASE_SUCCESS:
        return { loading: false, caseSearch: action.payload.data, matchWord:action.payload.ref}
      case SEARCH_CASE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const searchIndexReducer = (state = {}, action) => {
    switch (action.type) {
      case SEARCH_INDEX_REQUEST:
        return { loading: true }
      case SEARCH_INDEX_SUCCESS:
        return { loading: false, indexSearch: action.payload}
      case SEARCH_INDEX_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  export const searchCitationReducer = (state = {}, action) => {
    switch (action.type) {
      case SEARCH_CITATION_REQUEST:
        return { loading: true }
      case SEARCH_CITATION_SUCCESS:
        return { loading: false, citationSearch: action.payload}
      case SEARCH_CITATION_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  export const searchCourtReducer = (state = {}, action) => {
    switch (action.type) {
      case SEARCH_COURT_REQUEST:
        return { loading: true }
      case SEARCH_COURT_SUCCESS:
        return { loading: false, courtSearch: action.payload}
      case SEARCH_COURT_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  export const searchAdvanceReducer = (state = {}, action) => {
    switch (action.type) {
      case SEARCH_ADVANCE_REQUEST:
        return { loading: true }
      case SEARCH_ADVANCE_SUCCESS:
        return { loading: false, advanceSearch: action.payload}
      case SEARCH_ADVANCE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
