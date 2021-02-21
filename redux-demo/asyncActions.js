const redux = require("redux");
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

console.log("**** Redux Async Actions Demo ****");

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUsersSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: payload,
  };
};

const fetchUsersFailure = (payload) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: payload,
  };
};

function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchUsersRequest());

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case "FETCH_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
console.log("InitialState:", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Updated State: ", store.getState())
);
store.dispatch(fetchUsers());
// unsubscribe();
