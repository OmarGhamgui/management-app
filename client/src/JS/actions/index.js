import {
  LOGIN_FAIL,
  LOGIN_LOAD,
  LOGIN_SUCCESS,
  LOGOUT_LOAD,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_USER,
  ADD_CLIENT,
  ADD_SUCCESS,
  ADD_FAIL,
  DELETE_LOAD,
  DELETE_SUCCESS,
  EDIT_USER,
  EDIT_SUCCESS,
  EDIT_FAIL,
  REMOVE_CLIENT,
  REMOVE_SUCCESS
} from "../constants/actions-types";
import axios from "axios";

import { history } from "../../history";


export const register = (newUser) => async (dispatch) => {
  await dispatch({
    type: REGISTER_USER,
  });
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const addRes = await axios.post("/user/register", newUser);
    await history.push("/login");
    dispatch({
      type: REGISTER_SUCCESS,
      payload: addRes.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};


export const login = (input) => async (dispatch) => {
  dispatch({
    type: LOGIN_LOAD,
  });
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const loginRes = await axios.post("/user/login", input);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: loginRes.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

// logout user
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT_LOAD,
  });
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  } catch (error) {}
};

//Delete Account

export const deleteAccount = (userId,token) => async (dispatch) => {
  dispatch({
    type: DELETE_LOAD,
  });
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await axios.delete("/user/deleteUser/" + userId, {
      headers: { "x-auth-token": token },
    });
    dispatch({
      type: DELETE_SUCCESS,
    });
  } catch (error) {
  }
};
//edit a profil

export const editprofil = (newUser) => async (dispatch) => {
  await dispatch({
    type: EDIT_USER,
  });
  try {
    const editRes = await axios.put(`/user/${newUser.userId}`,newUser);
 dispatch({
      type: EDIT_SUCCESS,
      payload: editRes.data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_FAIL,
      payload: error.response.data,
    });
  }
};

// add a client

export const addClient = (newClient) => async (dispatch) => {
  await dispatch({
    type: ADD_CLIENT,
  });
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const addRes = await axios.post("/client/" + newClient.userId, newClient);
    dispatch({
      type: ADD_SUCCESS,
      payload: addRes.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_FAIL,
      payload: error.response.data,
    });
  }
};

// remove a client

export const removeClient = (Client) => async (dispatch) => {
  await dispatch({
    type: REMOVE_CLIENT,
  });
  try {
    const removeRes = await axios.delete(`/client/${Client._id}`);
 dispatch({
      type: REMOVE_SUCCESS,
      payload: removeRes.data,
    });
  } catch (error) {
   
  }
};





