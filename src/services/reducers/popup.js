import { OPEN_INGREDIRNT_DETAILS_POPUP, 
  CLOSE_INGREDIRNT_DETAILS_POPUP } from '../actions/popup.js';

const initialState = {
  selectedIngrediend: null,
};

export const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_INGREDIRNT_DETAILS_POPUP: {
      return {
        ...state,
        selectedIngrediend: action.payload,
      };
    }
    case CLOSE_INGREDIRNT_DETAILS_POPUP: {
      return {
        ...state,
        selectedIngrediend: null
      };
    }
    default: {
      return state;
    }
  }
};