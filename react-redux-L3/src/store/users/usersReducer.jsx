import { ACTIONS } from '../actionsTypes';
import { request, fetchFailed, fetchSuccess } from '../actions';
import axios from 'axios';
const initialState = {
  loading: true,
  users: [],
  error: '',
};
const { FETCH_REQUEST, FETCH_SUCCESS,FETCH_FAILED } = ACTIONS;

export const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_REQUEST: 
      return {
        ...state
      }
    case FETCH_SUCCESS: 
      return {
        ...state,
        loading: false,
        users: action.payload,
      }
    case FETCH_FAILED: 
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      }
    default: return state;
  }
}
// with no middleware 
// export const fetchUsers = async (dispatch) => {
//   dispatch(request());
//   try {
//     const response = await axios.get("https://fakestoreapi.com/users");
//     const users = await response.data.map(user => ({
//       id: user.id,
//       username: user.username,
//     }));
//     dispatch(fetchSuccess(users))
//   } catch (error) {
//     dispatch(fetchFailed(error.message));
//   }
// }

// with middleware

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(request());
    try {
      const response = await axios.get("https://fakestoreapi.com/users");
      const users = await response.data.map(user => ({
        id: user.id,
        username: user.username,
      }));
      dispatch(fetchSuccess(users))
    } catch (error) {
      dispatch(fetchFailed(error.message));
    }
  }
}