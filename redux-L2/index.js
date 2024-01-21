const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require('axios');
const thunk = require('redux-thunk').default;

const ACTIONS = {
  FETCH_USERS_REQUEST: "FETCH_USERS_REQUEST",
  FETCH_USERS_SUCCESS: "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAILED: "FETCH_USERS_FAILED",
};


const initialState = {
    loading: true,
    users: [],
    error: '',
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTIONS.FETCH_USERS_REQUEST:
      return {
        ...state,
      };

    case ACTIONS.FETCH_USERS_SUCCESS: 
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case ACTIONS.FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default: 
      return state
  }
}


const request = () => {
  return {
    type: ACTIONS.FETCH_USERS_REQUEST
  }
}
const fetchSuccess = users => {
  return {
    type: ACTIONS.FETCH_USERS_SUCCESS,
    payload: users,
  }
}
const fetchFailed = error => {
  return {
    type: ACTIONS.FETCH_USERS_FAILED,
    payload: error,
  }
}

const fetchUsers = async (dispatch) => {
  try {
    dispatch(request());
    const response = await axios.get("https://fakestoreapi.com/users");
    const users = await response.data.map(user => user.username);
    dispatch(fetchSuccess(users));
  } catch (error) {
    dispatch(fetchFailed(error.message));
  }
}

// const fetchUsers = () => {
//   return async function(dispatch) {
//     dispatch(request())
//     try {
//       const response = await axios.get('https://fakestoreapi.com/users');
//       const users = await response.data.map(user => user.username);
//       dispatch(fetchSuccess(users));
//     } catch (error) {
//       dispatch(fetchFailed(error))
//     }
//   }
// }



const store = createStore(reducer);
store.subscribe(() => { console.log(store.getState()) });
// store.dispatch(fetchUsers());
fetchUsers(store.dispatch);
store.getState().loading && console.log('loading....');
