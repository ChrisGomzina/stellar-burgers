import { CHANGE_INGREDIENT_POPUP_STATE, 
  CHANGE_ORDER_POPUP_STATE,
  CHANGE_ORDER_DETAILS_POPUP_STATE } from '../actions/popup.js';

const initialState = {
  isIngredientPopupOpen: false,
  isOrderPopupOpen: false,
  isOrderDetailsPopupOpen: false
};

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INGREDIENT_POPUP_STATE: {
      return {
        ...state,
        isIngredientPopupOpen: action.payload
      };
    }
    case CHANGE_ORDER_POPUP_STATE: {
      return {
        ...state,
        isOrderPopupOpen: action.payload
      };
    }
    case CHANGE_ORDER_DETAILS_POPUP_STATE: {
      return {
        ...state,
        isOrderDetailsPopupOpen: action.payload
      };
    }
    default: {
      return state;
    }
  }
};