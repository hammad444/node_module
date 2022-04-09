import axios from "axios"
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
   GET_CASE_BY_LEGALTERM_FAIL,
   GET_CASE_BY_LEGALTERM_REQUEST,
   GET_CASE_BY_LEGALTERM_SUCCESS,

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

// -----------------save bookmarks-------------------------------
  export const setBookmark = (obj) => async (dispatch, getState) => {
    // console.log(obj, "bookmark action:: req")
    try {
      dispatch({
        type: BOOKMARK_REQUEST,
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
        'http://localhost:4000/otherdata/setBookmark',
        obj, config
      )
      // console.log(data,"bookmark action::res .....")
      dispatch({
        type: BOOKMARK_SUCCESS,
        payload: data,
      })
    } catch (error) {
      // console.log(error.response,"bookmark action::error .....")
      dispatch({
        type: BOOKMARK_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
  // -----------------delete bookmark-------------------------------
  export const deleteBookmark = (id) => async (dispatch, getState) => {
    // console.log(id, "delete bookmark action:: req")
    try {
      dispatch({
        type: DELETE_BOOKMARK_REQUEST,
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
        `http://localhost:4000/otherdata/bookmark/${id}`,
        id, config
      )
      // console.log(data,"delete bookmark action::res .....")
      dispatch({
        type: DELETE_BOOKMARK_SUCCESS,
        payload: data,
      })
    } catch (error) {
      // console.log(error.response,"bookmark action::error .....")
      dispatch({
        type: DELETE_BOOKMARK_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
          // -----------------updatebookmark-------------------------------
          export const updateBookmark = (obj,id) => async (dispatch, getState) => {
            try {
              dispatch({
                type: UPDATE_BOOKMARK_REQUEST,
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
                `http://localhost:4000/otherdata/bookmark/${id}`,obj,config
              )
              // console.log(data,"bookmark update action::res .....")
              dispatch({
                type: UPDATE_BOOKMARK_SUCCESS,
                payload: data,
              })
            } catch (error) {
              // console.log(error.response,"bookmark update  action::error .....")
              dispatch({
                type: UPDATE_BOOKMARK_FAIL,
                payload:
                  error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
              })
            }
          }
     // -----------------get bookmark-------------------------------
 export const getBookmark = (id) => async (dispatch, getState) => {

  try {
    dispatch({
      type: GET_BOOKMARK_REQUEST,
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
      `http://localhost:4000/otherdata/allBookmarks`, {id:id} ,config
    )

    // console.log(data,"bookmarks action::res .....")
    dispatch({
      type: GET_BOOKMARK_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // console.log(error.response.data.message,"bookmarks action::error .....")
    dispatch({
      type: GET_BOOKMARK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
  // -----------------get dictionaries-------------------------------
  export const getDictionaries = () => async (dispatch, getState) => {

    try {
      dispatch({
        type: GET_DICTIONARIES_REQUEST,
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
        `http://localhost:4000/otherdata/allDictionary`,config
      )
  
      // console.log(data,"dictionaries action::res .....")
      dispatch({
        type: GET_DICTIONARIES_SUCCESS,
        payload: data,
      })
    } catch (error) {
      // console.log(error.response.data.message,"dictionaries action::error .....")
      dispatch({
        type: GET_DICTIONARIES_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
  // -----------------get dictionary-------------------------------
  export const getDictionary = (letter) => async (dispatch, getState) => {
    // console.log(letter, "dictionary action:: req")
    try {
      dispatch({
        type: GET_DICTIONARY_REQUEST,
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
        'http://localhost:4000/otherdata/dictionary',
        {letter:letter}, config
      )
      // console.log(data,"dictionary action::res .....")
      dispatch({
        type: GET_DICTIONARY_SUCCESS,
        payload: data,
      })
    } catch (error) {
      // console.log(error.response,"dictionary action::error .....")
      dispatch({
        type: GET_DICTIONARY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
    // -----------------get legalterms-------------------------------
    export const getLegalterms = () => async (dispatch, getState) => {

      try {
        dispatch({
          type: GET_LEGALTERMS_REQUEST,
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
          `http://localhost:4000/otherdata/allLegalterms`,config
        )
    
        // console.log(data,"legalterms action::res .....")
        dispatch({
          type: GET_LEGALTERMS_SUCCESS,
          payload: data,
        })
      } catch (error) {
        // console.log(error.response.data.message,"legalterms action::error .....")
        dispatch({
          type: GET_LEGALTERMS_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      }
    }
    // -----------------get legalterm-------------------------------
    export const getLegalterm = (letter) => async (dispatch, getState) => {
      // console.log(letter, "legalterm action:: req")
      try {
        dispatch({
          type: GET_LEGALTERM_REQUEST,
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
          'http://localhost:4000/otherdata/legalterm',
          {letter:letter}, config
        )
        // console.log(data,"legalterm action::res .....")
        dispatch({
          type: GET_LEGALTERM_SUCCESS,
          payload: data,
        })
      } catch (error) {
        // console.log(error.response,"legalterm action::error .....")
        dispatch({
          type: GET_LEGALTERM_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      }
    }

      // -----------------get case by legalterm-------------------------------
      export const casebylegalterm = (ref) => async (dispatch, getState) => {
        // console.log(ref, "case by legalterm action:: req")
        try {
          dispatch({
            type: GET_CASE_BY_LEGALTERM_REQUEST,
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
            'http://localhost:4000/otherdata/casebyLegalterm',
            {ref:ref}, config
          )
          // console.log(data,"case by legalterm action::res .....")
          dispatch({
            type: GET_CASE_BY_LEGALTERM_SUCCESS,
            payload: data,
          })
        } catch (error) {
          // console.log(error.response,"case by legalterm action::error .....")
          dispatch({
            type: GET_CASE_BY_LEGALTERM_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
        }
      }
// -----------------get articles-------------------------------
export const getArticles = () => async (dispatch, getState) => {

  try {
    dispatch({
      type: GET_ARTICLES_REQUEST,
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
      `http://localhost:4000/otherdata/allArticles`,config
    )

    // console.log(data,"articles action::res .....")
    dispatch({
      type: GET_ARTICLES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // console.log(error.response.data.message,"articles action::error .....")
    dispatch({
      type: GET_ARTICLES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
// -----------------get article-------------------------------
export const getArticle = (letter) => async (dispatch, getState) => {
  // console.log(letter, "article action:: req")
  try {
    dispatch({
      type: GET_ARTICLE_REQUEST,
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
      'http://localhost:4000/otherdata/article',
      {letter:letter}, config
    )
    // console.log(data,"article action::res .....")
    dispatch({
      type: GET_ARTICLE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // console.log(error.response,"article action::error .....")
    dispatch({
      type: GET_ARTICLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

  // -----------------search article-------------------------------
  export const searchArticle = (ref) => async (dispatch, getState) => {
    // console.log(ref, "search article action:: req")
    try {
      dispatch({
        type: SEARCH_ARTICLES_REQUEST,
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
        'http://localhost:4000/otherdata/searchArticle',
        {ref:ref}, config
      )
      // console.log(data,"search article action::res .....")
      dispatch({
        type: SEARCH_ARTICLES_SUCCESS,
        payload: data,
      })
    } catch (error) {
      // console.log(error.response,"search article action::error .....")
      dispatch({
        type: SEARCH_ARTICLES_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }


      // -----------------get topics-------------------------------
      export const getTopics = () => async (dispatch, getState) => {

        try {
          dispatch({
            type: GET_TOPICS_REQUEST,
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
            `http://localhost:4000/otherdata/allTopics`,config
          )
      
          // console.log(data,"topics action::res .....")
          dispatch({
            type: GET_TOPICS_SUCCESS,
            payload: data,
          })
        } catch (error) {
          // console.log(error.response.data.message,"topics action::error .....")
          dispatch({
            type: GET_TOPICS_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
        }
      }

        // -----------------topic statutes-------------------------------
  export const topicStatutes = (ref) => async (dispatch, getState) => {
    // console.log(ref, "topic Statutes action:: req")
    try {
      dispatch({
        type: TOPIC_STATUTES_REQUEST,
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
        'http://localhost:4000/otherdata/topicStatutes',
        {ref:ref}, config
      )
      // console.log(data,"topic Statutes action::res .....")
      dispatch({
        type: TOPIC_STATUTES_SUCCESS,
        payload: data,
      })
    } catch (error) {
      // console.log(error.response,"topic Statutes action::error .....")
      dispatch({
        type: TOPIC_STATUTES_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }