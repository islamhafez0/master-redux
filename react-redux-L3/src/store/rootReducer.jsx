import { combineReducers } from 'redux';
import { cakeReducer } from './cake/CakeReducer';
import { icecreamReducer } from './icecream/IcecreamReducer';
import { cookiesReducer } from './cookies/cookiesReducer';
import { usersReducer } from './users/usersReducer';
export const rootReducer = combineReducers({
  cakes: cakeReducer,
  iceCreams: icecreamReducer,
  cookies: cookiesReducer,
  users: usersReducer,
});