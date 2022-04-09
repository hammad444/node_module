
import {
  JOURNAL_NAMES_FAIL,
  JOURNAL_NAMES_REQUEST,
  JOURNAL_NAMES_SUCCESS,
  CITATION_IDS_FAIL,
  CITATION_IDS_REQUEST,
  CITATION_IDS_SUCCESS,

   GET_CASE_FAIL,
   GET_CASE_REQUEST,
   GET_CASE_SUCCESS,
   GET_CASES_FAIL,
   GET_CASES_REQUEST,
   GET_CASES_SUCCESS,
   GET_CASEDESC_FAIL,
   GET_CASEDESC_REQUEST,
   GET_CASEDESC_SUCCESS,
   REF_CASES_FAIL,
   REF_CASES_REQUEST,
   REF_CASES_SUCCESS,

   GET_CITATION_FAIL,
   GET_CITATION_REQUEST,
   GET_CITATION_SUCCESS,
   GET_CITATIONS_FAIL,
   GET_CITATIONS_REQUEST,
   GET_CITATIONS_SUCCESS,

   GET_ORDINANCE_FAIL,
   GET_ORDINANCE_REQUEST,
   GET_ORDINANCE_SUCCESS,
   GET_STATUTE_FAIL,
   GET_STATUTE_REQUEST,
   GET_STATUTE_SUCCESS,
   GET_STATUTES_FAIL,
   GET_STATUTES_REQUEST,
   GET_STATUTES_SUCCESS,
   GET_STATUTEREAD_FAIL,
   GET_STATUTEREAD_REQUEST,
   GET_STATUTEREAD_SUCCESS,
   REF_STATUTES_FAIL,
   REF_STATUTES_REQUEST,
   REF_STATUTES_SUCCESS,

} from "../constants/dataConstants"

import{
GET_CASE_BY_LEGALTERM_FAIL,
GET_CASE_BY_LEGALTERM_REQUEST,
GET_CASE_BY_LEGALTERM_SUCCESS,
} from "../constants/otherDataConstants"

export const journalReducer = (state = {}, action) => {
  switch (action.type) {
    case JOURNAL_NAMES_REQUEST:
      return { loading: true }
    case JOURNAL_NAMES_SUCCESS:
      return { loading: false, journal: action.payload}
    case JOURNAL_NAMES_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const citationIdsReducer = (state = {}, action) => {
  switch (action.type) {
    case CITATION_IDS_REQUEST:
      return { loading: true }
    case CITATION_IDS_SUCCESS:
      return { loading: false, ids: action.payload}
    case CITATION_IDS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

  export const CaseReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_CASE_REQUEST:
        return { loading: true }
      case GET_CASE_SUCCESS:
        return { loading: false, case: action.payload}
      case GET_CASE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const allCasesReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_CASES_REQUEST:
        return { loading: true }
      case GET_CASES_SUCCESS:
        return { loading: false, cases: action.payload}
      case GET_CASES_FAIL:
        return { loading: false, error: action.payload }
        case GET_CASE_BY_LEGALTERM_REQUEST:
          return { loading: true }
        case GET_CASE_BY_LEGALTERM_SUCCESS:
          return { loading: false, cases: action.payload}
        case GET_CASE_BY_LEGALTERM_FAIL:
          return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const caseDescReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_CASEDESC_REQUEST:
        return { loading: true }
      case GET_CASEDESC_SUCCESS:
        return { loading: false, description: action.payload}
      case GET_CASEDESC_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const refCaseReducer = (state = {}, action) => {
    switch (action.type) {
      case REF_CASES_REQUEST:
        return { loading: true }
      case REF_CASES_SUCCESS:
        return { loading: false, cases: action.payload}
      case REF_CASES_FAIL:
        return { loading: false, error: action.payload }
        case REF_STATUTES_REQUEST:
          return { loading: true }
        case REF_STATUTES_SUCCESS:
          return { loading: false, cases: action.payload}
        case REF_STATUTES_FAIL:
          return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const CitationReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_CITATION_REQUEST:
        return { loading: true }
      case GET_CITATION_SUCCESS:
        return { loading: false, citation: action.payload}
      case GET_CITATION_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const allCitationDataReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CITATIONS_REQUEST:
          return { loading: true }
        case GET_CITATIONS_SUCCESS:
          return { loading: false, citations: action.payload}
        case GET_CITATIONS_FAIL:
          return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const ordinanceDataReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_ORDINANCE_REQUEST:
        return { loading: true }
      case GET_ORDINANCE_SUCCESS:
        return { loading: false, ordinance: action.payload}
      case GET_ORDINANCE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


  export const allStatutesReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_STATUTE_REQUEST:
        return { loading: true }
      case GET_STATUTE_SUCCESS:
        return { loading: false, statutes: action.payload}
      case GET_STATUTE_FAIL:
        return { loading: false, error: action.payload }
      case GET_STATUTES_REQUEST:
        return { loading: true }
      case GET_STATUTES_SUCCESS:
        return { loading: false, statutes: action.payload}
      case GET_STATUTES_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const statuteReadReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_STATUTEREAD_REQUEST:
        return { loading: true }
      case GET_STATUTEREAD_SUCCESS:
        return { loading: false, read: action.payload}
      case GET_STATUTEREAD_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
