
import {
   BOOKMARK_FAIL,
   BOOKMARK_REQUEST,
   BOOKMARK_SUCCESS,
   GET_BOOKMARK_FAIL,
   GET_BOOKMARK_REQUEST,
   GET_BOOKMARK_SUCCESS,
   DELETE_BOOKMARK_FAIL,
   DELETE_BOOKMARK_REQUEST,
   DELETE_BOOKMARK_SUCCESS,
   UPDATE_BOOKMARK_FAIL,
   UPDATE_BOOKMARK_REQUEST,
   UPDATE_BOOKMARK_SUCCESS,

   GET_DICTIONARIES_FAIL,
   GET_DICTIONARIES_REQUEST,
   GET_DICTIONARIES_SUCCESS,
   GET_DICTIONARY_FAIL,
   GET_DICTIONARY_REQUEST,
   GET_DICTIONARY_SUCCESS,

   GET_LEGALTERMS_FAIL,
   GET_LEGALTERMS_REQUEST,
   GET_LEGALTERMS_SUCCESS,
   GET_LEGALTERM_FAIL,
   GET_LEGALTERM_REQUEST,
   GET_LEGALTERM_SUCCESS,
   
   GET_ARTICLES_FAIL,
   GET_ARTICLES_REQUEST,
   GET_ARTICLES_SUCCESS,
   GET_ARTICLE_FAIL,
   GET_ARTICLE_REQUEST,
   GET_ARTICLE_SUCCESS,
   SEARCH_ARTICLES_FAIL,
   SEARCH_ARTICLES_REQUEST,
   SEARCH_ARTICLES_SUCCESS,

   GET_TOPICS_FAIL,
   GET_TOPICS_REQUEST,
   GET_TOPICS_SUCCESS,

   TOPIC_STATUTES_FAIL,
   TOPIC_STATUTES_REQUEST,
   TOPIC_STATUTES_SUCCESS
} from "../constants/otherDataConstants"
 export const setBookmarkReducer = (state = {}, action) => {
    switch (action.type) {
      case BOOKMARK_REQUEST:
        return { loading: true }
      case BOOKMARK_SUCCESS:
        return { loading: false, message: action.payload,success:true}
      case BOOKMARK_FAIL:
        return { loading: false, error: action.payload }
        case UPDATE_BOOKMARK_REQUEST:
          return { loading: true }
        case UPDATE_BOOKMARK_SUCCESS:
          return { loading: false, message: action.payload,success:true}
        case UPDATE_BOOKMARK_FAIL:
          return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const getBookmarkReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_BOOKMARK_REQUEST:
        return { loading: true }
      case GET_BOOKMARK_SUCCESS:
        return { loading: false, bookmarks: action.payload}
      case GET_BOOKMARK_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const deleteBookmarkReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_BOOKMARK_REQUEST:
        return { loading: true }
      case DELETE_BOOKMARK_SUCCESS:
        return { loading: false, success:true,message: action.payload}
      case DELETE_BOOKMARK_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const getDictionaryReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_DICTIONARY_REQUEST:
        return { loading: true }
      case GET_DICTIONARY_SUCCESS:
        return { loading: false, list: action.payload}
      case GET_DICTIONARY_FAIL:
        return { loading: false, error: action.payload }
        case GET_DICTIONARIES_REQUEST:
          return { loading: true }
        case GET_DICTIONARIES_SUCCESS:
          return { loading: false, list: action.payload}
        case GET_DICTIONARIES_FAIL:
          return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const getLegaltermReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_LEGALTERM_REQUEST:
        return { loading: true }
      case GET_LEGALTERM_SUCCESS:
        return { loading: false, list: action.payload}
      case GET_LEGALTERM_FAIL:
        return { loading: false, error: action.payload }
        case GET_LEGALTERMS_REQUEST:
          return { loading: true }
        case GET_LEGALTERMS_SUCCESS:
          return { loading: false, list: action.payload}
        case GET_LEGALTERMS_FAIL:
          return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const getArticlesReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_ARTICLE_REQUEST:
        return { loading: true }
      case GET_ARTICLE_SUCCESS:
        return { loading: false, list: action.payload}
      case GET_ARTICLE_FAIL:
        return { loading: false, error: action.payload }
        case GET_ARTICLES_REQUEST:
          return { loading: true }
        case GET_ARTICLES_SUCCESS:
          return { loading: false, list: action.payload}
        case GET_ARTICLES_FAIL:
          return { loading: false, error: action.payload }
          case SEARCH_ARTICLES_REQUEST:
            return { loading: true }
          case SEARCH_ARTICLES_SUCCESS:
            return { loading: false, list: action.payload}
          case SEARCH_ARTICLES_FAIL:
            return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const getTopicsReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_TOPICS_REQUEST:
        return { loading: true }
      case GET_TOPICS_SUCCESS:
        return { loading: false, list: action.payload}
      case GET_TOPICS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const getTopicStatuteReducer = (state = {}, action) => {
    switch (action.type) {
      case TOPIC_STATUTES_REQUEST:
        return { loading: true }
      case TOPIC_STATUTES_SUCCESS:
        return { loading: false, list: action.payload}
      case TOPIC_STATUTES_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }