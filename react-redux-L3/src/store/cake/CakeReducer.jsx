import { ACTIONS } from "../actionsTypes";


const initialState = {
  numOfCakes: 20
}

export const cakeReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTIONS.BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload
      };
    default:
      return state;
  }
}