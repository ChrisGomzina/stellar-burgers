import { FORGOT_PASSWORD, RESET_PASSWORD} from '../actions/password.js';

const initialState = {
  requestNewPassword: null,
  resetOldPassword: null
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD: {
      return {
        ...state,
        requestNewPassword: action.payload
      }
    }
    case RESET_PASSWORD: {
      return {
        ...state,
        resetOldPassword: action.payload
      }
    }
    default:
      return state;
  }
};