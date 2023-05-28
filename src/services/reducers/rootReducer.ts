import { combineReducers } from 'redux';

import { ingredientReducer } from './ingredients';
import { orderReducer } from './order';
import { popupReducer } from './popup';
import { profileReducer } from './profile';
import { ordersReducer } from './orders';

export const rootReducer = combineReducers({
  ingredientReducer,
  orderReducer,
  popupReducer,
  profileReducer,
  ordersReducer
});