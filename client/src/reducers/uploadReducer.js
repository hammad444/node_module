import {
    STATUTES_DATA_FAIL,
    STATUTES_DATA_REQUEST,
    STATUTES_DATA_SUCCESS,
    CASES_DATA_FAIL,
    CASES_DATA_REQUEST,
    CASES_DATA_SUCCESS,
    LEGALTERMS_DATA_FAIL,
    LEGALTERMS_DATA_REQUEST,
    LEGALTERMS_DATA_SUCCESS,
    ARTICLES_DATA_FAIL,
    ARTICLES_DATA_REQUEST,
    ARTICLES_DATA_SUCCESS,
    TOPICS_DATA_FAIL,
    TOPICS_DATA_REQUEST,
    TOPICS_DATA_SUCCESS,
    DICTIONARY_DATA_FAIL,
    DICTIONARY_DATA_REQUEST,
    DICTIONARY_DATA_SUCCESS,
 } from "../constants/uploadConstants"

 export const statutesDataReducer = (state = {}, action) => {
    switch (action.type) {
      case STATUTES_DATA_REQUEST:
        return { loading: true }
      case STATUTES_DATA_SUCCESS:
        return { loading: false, message: action.payload}
      case STATUTES_DATA_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const casesDataReducer = (state = {}, action) => {
    switch (action.type) {
      case CASES_DATA_REQUEST:
        return { loading: true }
      case CASES_DATA_SUCCESS:
        return { loading: false, message: action.payload}
      case CASES_DATA_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const legaltermsDataReducer = (state = {}, action) => {
    switch (action.type) {
      case LEGALTERMS_DATA_REQUEST:
        return { loading: true }
      case LEGALTERMS_DATA_SUCCESS:
        return { loading: false, message: action.payload}
      case LEGALTERMS_DATA_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const articlesDataReducer = (state = {}, action) => {
    switch (action.type) {
      case ARTICLES_DATA_REQUEST:
        return { loading: true }
      case ARTICLES_DATA_SUCCESS:
        return { loading: false, message: action.payload}
      case ARTICLES_DATA_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const topicsDataReducer = (state = {}, action) => {
    switch (action.type) {
      case TOPICS_DATA_REQUEST:
        return { loading: true }
      case TOPICS_DATA_SUCCESS:
        return { loading: false, message: action.payload}
      case TOPICS_DATA_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const dictionaryDataReducer = (state = {}, action) => {
    switch (action.type) {
      case DICTIONARY_DATA_REQUEST:
        return { loading: true }
      case DICTIONARY_DATA_SUCCESS:
        return { loading: false, message: action.payload}
      case DICTIONARY_DATA_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }