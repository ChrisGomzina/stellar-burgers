import { combineReducers } from 'redux';
import { ingredientReducer } from './ingredients.js';
import { orderReducer } from './order.js';

export const rootReducer = combineReducers({
  ingredientReducer,
  orderReducer
});