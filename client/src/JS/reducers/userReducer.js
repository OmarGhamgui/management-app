import {
  REGISTER_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_LOAD,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_LOAD,
  LOGOUT_SUCCESS,
  DELETE_SUCCESS,
  DELETE_LOAD,
  EDIT_USER,
  EDIT_SUCCESS,
  EDIT_FAIL,
} from "../constants/actions-types";

import cogoToast from "cogo-toast";

const initialState = {
  user: {},
  loading: false,
  token: "",
  errors: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      cogoToast.success("Inscription réussite");
      return {
        ...state,
        loading: false,
        user: payload.user,
      };
    case REGISTER_FAIL:
      cogoToast.error("Something went wrong ...");
      return {
        ...state,
        loading: false,
        errors: payload.user,
      };
    case LOGIN_LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.token,
        user: payload.user,
      };
    case LOGIN_FAIL:
      cogoToast.error("Vérifier votre email ou mot de passe");
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case LOGOUT_LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: "",
        loading: false,
        user: {},
      };
    case DELETE_LOAD:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        token: "",
        loading: false,
        user: {},
      };
      case EDIT_USER:
        return{
          ...state,
          loading:true
        }
        case EDIT_SUCCESS : 
        return {
          ...state,
          loading:false,
          user:{...state.user,...payload.user}
        }
        case EDIT_FAIL : 
        return{
          ...state,
          loading:false,
          errors: payload.user
        }
    default:
      return state;
  }
};

export default userReducer;
