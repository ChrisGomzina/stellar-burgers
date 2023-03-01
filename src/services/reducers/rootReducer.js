import { combineReducers } from 'redux';

import { ingredientReducer } from './ingredients.js';
import { orderReducer } from './order.js';
import { popupReducer } from './popup.js';
import { profileReducer } from './profile.js';
import { ordersReducer } from './orders.js';

export const rootReducer = combineReducers({
  ingredientReducer,
  orderReducer,
  popupReducer,
  profileReducer,
  ordersReducer
});