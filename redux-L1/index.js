const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;

const logger = reduxLogger.createLogger();

const ACTIONS = {
  BUY_CAKE: 'BUY_CAKE',
  BUY_ICECREAM: 'BUY_ICECREAM'
}

const initialCakeState = {
  numOfcakes: 10,
}
const initialIcecreamState = {
  numOfIceCreams: 20,
}

function buyCake() {
  return {
    type: ACTIONS.BUY_CAKE
  }
}

function buyIcecreame() {
  return {
    type: ACTIONS.BUY_ICECREAM
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTIONS.BUY_CAKE: return {
      ...state,
      numOfcakes: state.numOfcakes - 1
    }
    case ACTIONS.BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1,
    };
    default:
      return state
  }
}

const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case ACTIONS.BUY_CAKE: return {
      ...state,
      numOfcakes: state.numOfcakes - 1,
    };
    default: return state;
  }
}

const iceCreamReducer = (state = initialIcecreamState, action) => {
  switch(action.type) {
    case ACTIONS.BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1,
    };
    default: return state;
  }
}

const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleWare(logger));
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyIcecreame());
unsubscribe();