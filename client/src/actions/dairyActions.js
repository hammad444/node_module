import axios from "axios";
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
} from "../constants/dairyConstants";

// -----------------get all clients cases-------------------------------
export const getAllClientsCases = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ALL_CASES_REQUEST,
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
      "http://localhost:4000/dairy/allClientsCases",
      { id: id }, config
    );
    // console.log(data, "all clients cases get action::res .....");
    dispatch({
      type: ALL_CASES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "all clients cases get action::error .....");
    dispatch({
      type: ALL_CASES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// -----------------get clients-------------------------------
export const getClients = (id) => async (dispatch, getState) => {
  // console.log(id, "get clients ::req...");
  try {
    dispatch({
      type: GET_CLIENTS_REQUEST,
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
      "http://localhost:4000/dairy/allClients",
      { id: id },config
    );
    // console.log(data, "clients get action::res .....");
    dispatch({
      type: GET_CLIENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "clients get action::error .....");
    dispatch({
      type: GET_CLIENTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// -----------------get client-------------------------------
export const getClient = (ids) => async (dispatch, getState) => {
  // console.log(ids, "get client ::req...");
  try {
    dispatch({
      type: GET_CLIENT_REQUEST,
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

    const { data } = await axios.post("http://localhost:4000/dairy/client", {
      ids: ids,
    },config);
    // console.log(data, "client get action::res .....");
    dispatch({
      type: GET_CLIENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "client get action::error .....");
    dispatch({
      type: GET_CLIENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// -----------------create client-------------------------------
export const createClient = (obj) => async (dispatch, getState) => {
  // console.log(obj, "create client :: req");
  try {
    dispatch({
      type: CREATE_CLIENT_REQUEST,
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
      "http://localhost:4000/dairy/clients",
      obj,
      config
    );
    // console.log(data, "create client ::res .....");
    dispatch({
      type: CREATE_CLIENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "create client ::error .....");
    dispatch({
      type: CREATE_CLIENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// -----------------update client-------------------------------
export const updateClient = (obj, id) => async (dispatch, getState) => {
  // console.log(obj, id,"update client :: req");
  try {
    dispatch({
      type: UPDATE_CLIENT_REQUEST,
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

    const { data } = await axios.put(
      `http://localhost:4000/dairy/clients/${id}`,
      obj,
      config
    );
    // console.log(data, "update client ::res .....");
    dispatch({
      type: UPDATE_CLIENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "update client ::error .....");
    dispatch({
      type: UPDATE_CLIENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// -----------------get cases-------------------------------
export const getCases = (ids) => async (dispatch, getState) => {
  // console.log(ids, "get cases ::req...");
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
      "http://localhost:4000/dairy/allCases",
      { ids: ids },config
    );
    // console.log(data, "cases get action::res .....");

    dispatch({
      type: GET_CASES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "cases get action::error .....");
    dispatch({
      type: GET_CASES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// -----------------get case-------------------------------
export const getCase = (ids) => async (dispatch, getState) => {
  // console.log(ids, "get client case ::req...");
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

    const { data } = await axios.post("http://localhost:4000/dairy/case", {
      ids: ids
    },config);
    // console.log(data, "get  client case action::res .....");
    dispatch({
      type: GET_CASE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "get  client case action::error .....");
    dispatch({
      type: GET_CASE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// -----------------create  case-------------------------------
export const createCase = (obj) => async (dispatch, getState) => {
  // console.log(obj, "create case :: req");
  try {
    dispatch({
      type: CREATE_CASE_REQUEST,
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

    const formData = new FormData();
    formData.append("user_id", obj.user_id);
    formData.append("client_id", obj.client_id);
    formData.append("case_title", obj.case_title);
    formData.append("case_date", obj.case_date);
    formData.append("case_number", obj.case_number);
    formData.append("hearing_date", obj.hearing_date);
    formData.append("hearing_time", obj.hearing_time);
    formData.append("case_court", obj.case_court);
    formData.append("case_city", obj.case_city);
    formData.append("case_desc", obj.case_desc);
    formData.append("case_notes", obj.case_notes);
    formData.append("case_files", obj.case_files);
    formData.append("case_close", obj.case_close);

    const { data } = await axios.post(
      "http://localhost:4000/dairy/cases",
      formData,
      config
    );
    // console.log(data, "create case ::res .....");
    dispatch({
      type: CREATE_CASE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "create case ::error .....");
    dispatch({
      type: CREATE_CASE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
// -----------------update case-------------------------------
export const updateCase = (obj, id) => async (dispatch, getState) => {
  // console.log(obj, "update case :: req");
  try {
    dispatch({
      type: UPDATE_CASE_REQUEST,
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

    const { data } = await axios.put(
      `http://localhost:4000/dairy/cases/${id}`,
      obj,
      config
    );
    // console.log(data, "update case ::res .....");
    dispatch({
      type: UPDATE_CASE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "update case ::error .....");
    dispatch({
      type: UPDATE_CASE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ---------------------------get case files------------------------------------

export const getCasesFiles = (ids) => async (dispatch, getState) => {
  // console.log(ids, "get cases files ::req...");
  try {
    dispatch({
      type: CASES_FILES_REQUEST,
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
      "http://localhost:4000/dairy/allCasesFiles",
      { ids: ids },config
    );
    // console.log(data, "cases files get action::res .....");
    dispatch({
      type: CASES_FILES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "cases files get action::error .....");
    dispatch({
      type: CASES_FILES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ---------------------------get case notes------------------------------------

export const getCasesNotes = (ids) => async (dispatch, getState) => {
  // console.log(ids, "get cases notes ::req...");
  try {
    dispatch({
      type: CASES_FILES_REQUEST,
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
      "http://localhost:4000/dairy/allCasesNotes",
      { ids: ids },config
    );
    // console.log(data, "cases notes get action::res .....");
    dispatch({
      type: CASES_FILES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "cases notes get action::error .....");
    dispatch({
      type: CASES_FILES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ---------------------------get case desc------------------------------------

export const getCasesDesc = (ids) => async (dispatch, getState) => {
  // console.log(ids, "get cases desc ::req...");
  try {
    dispatch({
      type: CASES_FILES_REQUEST,
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
      "http://localhost:4000/dairy/allCasesDesc",
      { ids: ids },config
    );
    // console.log(data, "cases desc get action::res .....");
    dispatch({
      type: CASES_FILES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // console.log(error.response, "cases desc get action::error .....");
    dispatch({
      type: CASES_FILES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// ------------------------------caseReadIds-------------------------------
export const caseReadIds = (data) => async (dispatch, getState) => {

    dispatch({
      type: CASES_READ_IDS,
      payload: data,
    });
  
  };
// ---------------------------setHearingFile------------------------------------
export const setHearingFile = (data) => async (dispatch, getState) => {
  const arry=[]
  if(typeof data == "string"){
    arry.push(data);
    dispatch({
      type: CASES_FILES_SUCCESS,
      payload: arry,
    });
  }
  
  
  };