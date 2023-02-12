import { RESET_PASSWORD_REQUEST, 
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  SET_PASSWORD_REQUEST,
  SET_PASSWORD_SUCCESS,
  SET_PASSWORD_FAILED,
  REGISTSTRATION_REQUEST,
  REGISTSTRATION_SUCCESS,
  REGISTSTRATION_FAILED } from '../actions/profile.js';

const initialState = {
  //Данные авторизованного пользователя
  profile: null,
  //состояния для сброса пароля на странице /forgot-password
  resetPassword: null,
  resetPasswordRequest: false,
  resetPasswordFailed: false,
  //состояния для установки нового пароля на странице /reset-password
  setPassword: null,
  setPasswordRequest: false,
  setPasswordFailed: false,
  //состояния для регистрации пользователя
  registrationAnswer: null,
  registrationRequest: false,
  registrationFailed: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        resetPasswordRequest: true,
        resetPasswordFailed: false
      }
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: true
      }
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPassword: action.payload
      }
    }
    case SET_PASSWORD_REQUEST: {
      return {
        ...state,
        setPasswordRequest: true,
        setPasswordFailed: false
      }
    }
    case SET_PASSWORD_FAILED: {
      return {
        ...state,
        setPasswordRequest: false,
        setPasswordFailed: true
      }
    }
    case SET_PASSWORD_SUCCESS: {
      return {
        ...state,
        setPasswordRequest: false,
        setPassword: action.payload
      }
    }
    case REGISTSTRATION_REQUEST: {
      return {
        ...state,
        registrationRequest: true,
        registrationFailed: false
      }
    }
    case REGISTSTRATION_FAILED: {
      return {
        ...state,
        registrationRequest: false,
        registrationFailed: true
      }
    }
    case REGISTSTRATION_SUCCESS: {
      return {
        ...state,
        registrationRequest: false,
        registrationAnswer: action.payload
      }
    }
    default: {
      return state;
    }
  }
};