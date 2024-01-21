import { ACTIONS } from '../actionsTypes'
const initialState = {
  numOfCookies: 22
}
const { BUY_COOKIE } = ACTIONS;

export const cookiesReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_COOKIE:
      return {
        ...state,
        numOfCookies: state.numOfCookies - 1,
      }
    default: return state
  }
}