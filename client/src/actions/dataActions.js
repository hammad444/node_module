import axios from "axios";
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
} from "../constants/dataConstants";

// -----------------get case -------------------------------
export const getCase = (ref) => async (dispatch, getState) => {
  // console.log(ref, "get case action:: req");
  try {
    dispatch({
      type: GET_CASE_REQUEST,
    });
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
      "http://localhost:4000/alldata/case",
      { ref: ref },
      config
    );
    // console.log(data, "get case action::res .....");
    dispatch({
      type: GET_CASE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "get case action::error .....");
    dispatch({
      type: GET_CASE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// -----------------get cases by refrences-------------------------------
export const getCases = (ref) => async (dispatch, getState) => {
  // console.log(ref, "get cases by refrence  action:: req");
  try {
    dispatch({
      type: GET_CASES_REQUEST,
    });
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
      "http://localhost:4000/alldata/cases",
      { ref: ref },
      config
    );
    // console.log(data, "get cases action::res .....");
    dispatch({
      type: GET_CASES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "get cases action::error .....");
    dispatch({
      type: GET_CASES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// -----------------get case Description -------------------------------
export const getCaseDesc = (ref) => async (dispatch, getState) => {
  // console.log(ref, "get caseDesc action:: req");
  try {
    dispatch({
      type: GET_CASEDESC_REQUEST,
    });
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
      "http://localhost:4000/alldata/caseDesc",
      { ref: ref },
      config
    );
    // console.log(data, "get caseDesc action::res .....");
    dispatch({
      type: GET_CASEDESC_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "get caseDesc action::error .....");
    dispatch({
      type: GET_CASEDESC_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// -----------------get cases from  One Ref-------------------------------
export const getRefCase = (ref) => async (dispatch, getState) => {
  // console.log(ref, "get cases by one ref action:: req");
  try {
    dispatch({
      type: REF_CASES_REQUEST,
    });
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
      "http://localhost:4000/alldata/refCases",
      { ref: ref },
      config
    );
    // console.log(data, "get cases by one ref action::res .....");
    dispatch({
      type: REF_CASES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "get cases by one ref action::error .....");
    dispatch({
      type: REF_CASES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// -----------------get citation-------------------------------
export const getCitation = (ref) => async (dispatch, getState) => {
  // console.log(ref, "get citation action:: req");
  try {
    dispatch({
      type: GET_CITATION_REQUEST,
    });
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
      "http://localhost:4000/alldata/citation",
      { ref: ref },
      config
    );
    // console.log(data, "get citation action::res .....");
    dispatch({
      type: GET_CITATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "get citation action::error .....");
    dispatch({
      type: GET_CITATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// -----------------get citation by refrences-------------------------------
export const getCitations = (ref) => async (dispatch, getState) => {
  // console.log(ref, "get citations by refrence action:: req");
  try {
    dispatch({
      type: GET_CITATIONS_REQUEST,
    });
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
      "http://localhost:4000/alldata/citations",
      { ref: ref },
      config
    );
    // console.log(data, "get citations action::res .....");
    dispatch({
      type: GET_CITATIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "get citations action::error .....");
    dispatch({
      type: GET_CITATIONS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// -----------------get ordinance-------------------------------
export const getOrdinance = (letter) => async (dispatch, getState) => {
  // console.log(letter, "get ordinance action:: req");
  try {
    dispatch({
      type: GET_ORDINANCE_REQUEST,
    });
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
      "http://localhost:4000/alldata/ordinance",
      { letter: letter },
      config
    );
    // console.log(data, "get ordinance action::res .....");
    dispatch({
      type: GET_ORDINANCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "get ordinance action::error .....");
    dispatch({
      type: GET_ORDINANCE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// -----------------get statute -------------------------------
export const getStatute = (ref) => async (dispatch, getState) => {
  // console.log(ref, "get statute action:: req");
  try {
    dispatch({
      type: GET_STATUTE_REQUEST,
    });
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
      "http://localhost:4000/alldata/statute",
      { ref: ref },
      config
    );
    // console.log(data, "get statute action::res .....");
    dispatch({
      type: GET_STATUTE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "get statute action::error .....");
    dispatch({
      type: GET_STATUTE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// -----------------get statutes by refrences -------------------------------
export const getStatutes = (ref) => async (dispatch, getState) => {
  // console.log(ref, "get statutes by refrence  action:: req");
  try {
    dispatch({
      type: GET_STATUTES_REQUEST,
    });
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
      "http://localhost:4000/alldata/statutes",
      { ref: ref },
      config
    );
    // console.log(data, "get statutes action::res .....");
    dispatch({
      type: GET_STATUTES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "get statutes action::error .....");
    dispatch({
      type: GET_STATUTES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// -----------------get statute Read -------------------------------
export const getStatuteRead = (ref) => async (dispatch, getState) => {
  // console.log(ref, "get statuteRead action:: req");
  try {
    dispatch({
      type: GET_STATUTEREAD_REQUEST,
    });
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
      "http://localhost:4000/alldata/statuteRead",
      { ref: ref },
      config
    );
    // console.log(data, "get statuteRead action::res .....");
    dispatch({
      type: GET_STATUTEREAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "get statuteRead action::error .....");
    dispatch({
      type: GET_STATUTEREAD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// -----------------get laws from  One Ref -------------------------------
export const getRefLaw = (ref) => async (dispatch, getState) => {
  // console.log(ref, "get laws by one ref action:: req");
  try {
    dispatch({
      type: REF_STATUTES_REQUEST,
    });
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
      "http://localhost:4000/alldata/refStatutes",
      { ref: ref },
      config
    );
    // console.log(data, "get laws by one ref action::res .....");
    dispatch({
      type: REF_STATUTES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "get laws by one ref action::error .....");
    dispatch({
      type: REF_STATUTES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// -----------------get journal names -------------------------------
export const getJournals = (ref) => async (dispatch, getState) => {
  // console.log(ref, "get journals action:: req");
  try {
    dispatch({
      type: JOURNAL_NAMES_REQUEST,
    });
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
      "http://localhost:4000/alldata/journal",
      config
    );
    // console.log(data, "get journals action::res .....");
    dispatch({
      type: JOURNAL_NAMES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "get journals action::error .....");
    dispatch({
      type: JOURNAL_NAMES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// -----------------get citation ids -------------------------------
export const getCitationIds = (ref) => async (dispatch, getState) => {
  // console.log(ref, "get citations ids action:: req");
  try {
    dispatch({
      type: CITATION_IDS_REQUEST,
    });
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
      "http://localhost:4000/alldata/citationids",
      config
    );
    // console.log(data, "get citations ids action::res .....");
    dispatch({
      type: CITATION_IDS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "get citations ids action::error .....");
    dispatch({
      type: CITATION_IDS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
