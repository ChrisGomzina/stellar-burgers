import { SET_PROFILE,
  RESET_PASSWORD_REQUEST, 
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  SET_PASSWORD_REQUEST,
  SET_PASSWORD_SUCCESS,
  SET_PASSWORD_FAILED,
  REGISTSTRATION_REQUEST,
  REGISTSTRATION_SUCCESS,
  REGISTSTRATION_FAILED,
  AUTHORIZATION_REQUEST,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  GET_PROFILE_DATA_REQUEST,
  GET_PROFILE_DATA_SUCCESS,
  GET_PROFILE_DATA_FAILED,
  SEND_PROFILE_DATA_REQUEST,
  SEND_PROFILE_DATA_SUCCESS,
  SEND_PROFILE_DATA_FAILED,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILED } from '../actions/profile.js';

const initialState = {
  //Данные авторизованного пользователя
  profile: null,
  //состояния для сброса пароля на странице /forgot-password
  resetPasswordAnswer: null,
  resetPasswordRequest: false,
  resetPasswordFailed: false,
  //состояния для установки нового пароля на странице /reset-password
  setPasswordAnswer: null,
  setPasswordRequest: false,
  setPasswordFailed: false,
  //состояния для регистрации пользователя
  registrationAnswer: null,
  registrationRequest: false,
  registrationFailed: false,
  //состояния для авторизации пользователя
  authorizationAnswer: null,
  authorizationRequest: false,
  authorizationFailed: false,
  //состояния для выхода из профиля
  logOutAnswer: null,
  logOutRequest: false,
  logOutFailed: false,
  //состояния для обновления токена
  refreshTokenAnswer: null,
  refreshTokenRequest: false,
  refreshTokenFaild: false,
  //состояния для получения данных
  getProfileDataAnswer: null,
  getProfileDataRequest: false,
  getProfileDataFaild: false,
  //состояния для отправки отредактированных данных на сервер 
  sendProfileDataAnswer: null,
  sendProfileDataRequest: false,
  sendProfileDataFaild: false
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE: {
      return {
        ...state,
        profile: {
          name: action.payload.name,
          email: action.payload.email
        }
      }
    }
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
        resetPasswordAnswer: action.payload
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
        setPasswordAnswer: action.payload
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
    case AUTHORIZATION_REQUEST: {
      return {
        ...state,
        authorizationRequest: true,
        authorizationFailed: false
      }
    }
    case AUTHORIZATION_FAILED: {
      return {
        ...state,
        authorizationRequest: false,
        authorizationFailed: true
      }
    }
    case AUTHORIZATION_SUCCESS: {
      return {
        ...state,
        authorizationRequest: false,
        authorizationAnswer: action.payload
      }
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        logOutRequest: true,
        logOutFailed: false
      }
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logOutRequest: false,
        logOutFailed: true
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        profile: null,
        logOutRequest: false,
        logOutAnswer: action.payload
      }
    }
    case REFRESH_TOKEN_REQUEST: {
      return {
        ...state,
        refreshTokenRequest: true,
        refreshTokenFaild: false
      }
    }
    case REFRESH_TOKEN_FAILED: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenFaild: true
      }
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenAnswer: action.payload
      }
    }
    case GET_PROFILE_DATA_REQUEST: {
      return {
        ...state,
        getProfileDataAnswer: true,
        getProfileDataFaild: false
      }
    }
    case GET_PROFILE_DATA_FAILED: {
      return {
        ...state,
        getProfileDataAnswer: false,
        getProfileDataFaild: true
      }
    }
    case GET_PROFILE_DATA_SUCCESS: {
      return {
        ...state,
        getProfileDataAnswer: false,
        getProfileDataAnswer: action.payload
      }
    }
    case SEND_PROFILE_DATA_REQUEST: {
      return {
        ...state,
        sendProfileDataRequest: true,
        sendProfileDataFaild: false
      }
    }
    case SEND_PROFILE_DATA_FAILED: {
      return {
        ...state,
        sendProfileDataRequest: false,
        sendProfileDataFaild: true
      }
    }
    case SEND_PROFILE_DATA_SUCCESS: {
      return {
        ...state,
        sendProfileDataRequest: false,
        sendProfileDataAnswer: action.payload
      }
    }
    default: {
      return state;
    }
  }
};