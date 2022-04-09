import axios from "axios"
import {
   PACKAGE_FAIL,
   PACKAGE_REQUEST,
   PACKAGE_SUCCESS,
   CHOOSE_PACKAGE,
   GET_PACKAGES_FAIL,
   GET_PACKAGES_REQUEST,
   GET_PACKAGES_SUCCESS,
   DELETE_PACKAGE_FAIL,
   DELETE_PACKAGE_REQUEST,
   DELETE_PACKAGE_SUCCESS,
   UPDATE_PACKAGE_FAIL,
   UPDATE_PACKAGE_REQUEST,
   UPDATE_PACKAGE_SUCCESS,
   GET_PACKAGE_FAIL,
   GET_PACKAGE_REQUEST,
   GET_PACKAGE_SUCCESS,
} from "../constants/packageConstants"
  

  export const PackageCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PACKAGE_REQUEST:
        return { loading: true }
      case PACKAGE_SUCCESS:
        return { loading: false, success: true }
      case PACKAGE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


  export const allPackagesReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_PACKAGES_REQUEST:
        return { loading: true }
      case GET_PACKAGES_SUCCESS:
        return { loading: false, packages: action.payload }
      case GET_PACKAGES_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const PackageDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_PACKAGE_REQUEST:
        return { loading: true }
      case DELETE_PACKAGE_SUCCESS:
        return { loading: false, success: true }
      case DELETE_PACKAGE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


  export const PackageUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_PACKAGE_REQUEST:
        return { loading: true }
      case UPDATE_PACKAGE_SUCCESS:
        return { loading: false, success: true }
      case UPDATE_PACKAGE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const pkgReducer = (state = {}, action) => {
    switch (action.type) {
      case CHOOSE_PACKAGE:
        return { packageDetails: action.payload }
      default:
        return state
    }
  }

  export const GetPackageReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_PACKAGE_REQUEST:
        return { loading: true }
      case GET_PACKAGE_SUCCESS:
        return { loading: false, package: action.payload }
      case GET_PACKAGE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }