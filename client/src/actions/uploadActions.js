import axios from "axios"
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
// -----------------upload statutes csv data-------------------------------
export const uploadStatuteData = (obj) => async (dispatch, getState) => {
    // console.log(obj, "upload statutes csv action:: req")
    try {
      dispatch({
        type: STATUTES_DATA_REQUEST,
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
      formData.append("file",obj.file)
    
      //  console.log(formData,"............")
      const { data } = await axios.post(
        'http://localhost:4000/uploaddata/statutes',
        formData, config
      )
      // console.log(formData,data,"upload statutes csv action::res .....")
      dispatch({
        type: STATUTES_DATA_SUCCESS,
        payload: data,
      })
    } catch (error) {
      // console.log(error.response,"upload statutes csv action::error .....")
      dispatch({
        type: STATUTES_DATA_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
 // -----------------upload cases csv data-------------------------------
 export const uploadCaseData = (obj) => async (dispatch, getState) => {
  // console.log(obj, "upload cases csv action:: req")
  try {
    dispatch({
      type: CASES_DATA_REQUEST,
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
    formData.append("file",obj.file)
  
    //  console.log(formData,"............")
    const { data } = await axios.post(
      'http://localhost:4000/uploaddata/cases',
      formData, config
    )
    // console.log(formData,data,"upload cases csv action::res .....")
    dispatch({
      type: CASES_DATA_SUCCESS,
      payload: data,
    })
  } catch (error) {
    // console.log(error.response,"upload cases csv action::error .....")
    dispatch({
      type: CASES_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
  // -----------------upload legalterms csv data-------------------------------
  export const uploadLegaltermData = (obj) => async (dispatch, getState) => {
    // console.log(obj, "upload legalterms csv action:: req")
    try {
      dispatch({
        type: LEGALTERMS_DATA_REQUEST,
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
      formData.append("file",obj.file)
    
      //  console.log(formData,"............")
      const { data } = await axios.post(
        'http://localhost:4000/uploaddata/legalterms',
        formData, config
      )
      // console.log(formData,data,"upload legalterms csv action::res .....")
      dispatch({
        type: LEGALTERMS_DATA_SUCCESS,
        payload: data,
      })
    } catch (error) {
      // console.log(error.response,"upload legalterms csv action::error .....")
      dispatch({
        type: LEGALTERMS_DATA_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
    // -----------------upload articles csv data-------------------------------
    export const uploadArticleData = (obj) => async (dispatch, getState) => {
      // console.log(obj, "upload articles csv action:: req")
      try {
        dispatch({
          type: ARTICLES_DATA_REQUEST,
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
        formData.append("file",obj.file)
      
        //  console.log(formData,"............")
        const { data } = await axios.post(
          'http://localhost:4000/uploaddata/articles',
          formData, config
        )
        // console.log(formData,data,"upload articles csv action::res .....")
        dispatch({
          type: ARTICLES_DATA_SUCCESS,
          payload: data,
        })
      } catch (error) {
        // console.log(error.response,"upload articles csv action::error .....")
        dispatch({
          type: ARTICLES_DATA_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      }
    }
       // -----------------upload topics csv data-------------------------------
       export const uploadTopicData = (obj) => async (dispatch, getState) => {
        // console.log(obj, "upload topics csv action:: req")
        try {
          dispatch({
            type: TOPICS_DATA_REQUEST,
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
          formData.append("file",obj.file)
        
          //  console.log(formData,"............")
          const { data } = await axios.post(
            'http://localhost:4000/uploaddata/topics',
            formData, config
          )
          // console.log(formData,data,"upload topics csv action::res .....")
          dispatch({
            type: TOPICS_DATA_SUCCESS,
            payload: data,
          })
        } catch (error) {
          // console.log(error.response,"upload topics csv action::error .....")
          dispatch({
            type: TOPICS_DATA_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
        }
      }
             // -----------------upload dictionary csv data-------------------------------
             export const uploadDictionaryData = (obj) => async (dispatch, getState) => {
              // console.log(obj, "upload dictionary csv action:: req")
              try {
                dispatch({
                  type: DICTIONARY_DATA_REQUEST,
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
                formData.append("file",obj.file)
              
                //  console.log(formData,"............")
                const { data } = await axios.post(
                  'http://localhost:4000/uploaddata/dictionary',
                  formData, config
                )
                // console.log(formData,data,"upload dictionary csv action::res .....")
                dispatch({
                  type: DICTIONARY_DATA_SUCCESS,
                  payload: data,
                })
              } catch (error) {
                // console.log(error.response,"upload dictionary csv action::error .....")
                dispatch({
                  type: DICTIONARY_DATA_FAIL,
                  payload:
                    error.response && error.response.data.message
                      ? error.response.data.message
                      : error.message,
                })
              }
            }