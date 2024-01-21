import { createStore } from "redux";

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};


const increment = () => ({ type: ACTIONS.INCREMENT });
const decrement = () => ({ type: ACTIONS.DECREMENT });

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ACTIONS.INCREMENT:
      return state + 1;
    case ACTIONS.DECREMENT:
      return state - 1;
    default:
      return state;
  };
};

const store = createStore(reducer);

export { increment, decrement, store };