import axios from "axios";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userActionTypes";

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest());

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const userData = response.data;
        dispatch(fetchUserSuccess(userData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};

export { fetchUserRequest, fetchUserSuccess, fetchUserFailure,fetchUsers };
