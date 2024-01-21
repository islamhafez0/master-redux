import { ACTIONS } from './actionsTypes'

export const buyCake = (number = 1) => {
  return {
    type: ACTIONS.BUY_CAKE,
    payload: number,
  }
}

export const buyIcecream = () => {
  return {
    type: ACTIONS.BUY_ICECREAM
  }
}

export const buyCookie = () => {
  return {
    type: ACTIONS.BUY_COOKIE
  }
}

export const request = () => {
  return {
    type: ACTIONS.FETCH_REQUEST,
  }
}
export const fetchSuccess = (users) => {
  return {
    type: ACTIONS.FETCH_SUCCESS,
    payload: users,
  }
}
export const fetchFailed = (error) => {
  return {
    type: ACTIONS.FETCH_FAILED,
    payload: error,
  }
}