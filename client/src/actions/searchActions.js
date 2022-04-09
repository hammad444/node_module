import axios from "axios"
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

 // ----------------- case search-------------------------------
 export const searchCase = (ref) => async (dispatch, getState) => {
  // console.log(ref, "get searched case action:: req")
  try {
    dispatch({
      type: SEARCH_CASE_REQUEST,
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
      'http://localhost:4000/searchdata/searchCase',{ref:ref},config
    )
    // console.log(data,"get searched case action::res .....")
    dispatch({
      type: SEARCH_CASE_SUCCESS,
      payload: {data:data, ref:ref.keyword},
    })
  } catch (error) {
    // console.log(error.response,"get searched case action::error .....")
    dispatch({
      type: SEARCH_CASE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
       // -----------------search index-------------------------------
       export const searchIndex = (ref) => async (dispatch, getState) => {
        // console.log(ref, "get search index action:: req")
        try {
          dispatch({
            type: SEARCH_INDEX_REQUEST,
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
            'http://localhost:4000/searchdata/searchIndex',{ref:ref},config
          )
          // console.log(data,"get search index action::res .....")
          dispatch({
            type: SEARCH_INDEX_SUCCESS,
            payload: data,
          })
        } catch (error) {
          // console.log(error.response,"get search index action::error .....")
          dispatch({
            type: SEARCH_INDEX_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
        }
        }
      
         

              // -----------------search citation-------------------------------
              export const searchCitation = (ref) => async (dispatch, getState) => {
                // console.log(ref, "get search citation action:: req")
                try {
                  dispatch({
                    type: SEARCH_CITATION_REQUEST,
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
                    'http://localhost:4000/searchdata/searchCitation',{ref:ref},config
                  )
                  // console.log(data,"get search citation action::res .....")
                  dispatch({
                    type: SEARCH_CITATION_SUCCESS,
                    payload: data,
                  })
                } catch (error) {
                  // console.log(error.response,"get search citation action::error .....")
                  dispatch({
                    type: SEARCH_CITATION_FAIL,
                    payload:
                      error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
                  })
                }
                }
              
                        // -----------------search court-------------------------------
       export const searchCourt = (ref) => async (dispatch, getState) => {
        // console.log(ref, "get search court action:: req")
        try {
          dispatch({
            type: SEARCH_COURT_REQUEST,
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
            'http://localhost:4000/searchdata/searchCourt',{ref:ref},config
          )
          // console.log(data,"get search court action::res .....")
          dispatch({
            type: SEARCH_COURT_SUCCESS,
            payload: data,
          })
        } catch (error) {
          // console.log(error.response,"get search court action::error .....")
          dispatch({
            type: SEARCH_COURT_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
        }
        }
               // -----------------search index-------------------------------
       export const searchAdvance = (ref) => async (dispatch, getState) => {
        // console.log(ref, "get search advance action:: req")
        try {
          dispatch({
            type: SEARCH_ADVANCE_REQUEST,
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
            'http://localhost:4000/searchdata/searchAdvance',{ref:ref},config
          )
          // console.log(data,"get search advance action::res .....")
          dispatch({
            type: SEARCH_ADVANCE_SUCCESS,
            payload: data,
          })
        } catch (error) {
          // console.log(error.response,"get search advance action::error .....")
          dispatch({
            type: SEARCH_ADVANCE_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
        }
        }