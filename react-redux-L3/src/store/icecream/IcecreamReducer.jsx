import { ACTIONS } from "../actionsTypes";

const initialState = {
  numOfIcecreams: 30
};


export const icecreamReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTIONS.BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1
      }
    default:
      return state
  }
}