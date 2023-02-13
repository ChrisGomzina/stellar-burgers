import { resetPassword, 
  setPassword, 
  register, 
  authorization } from '../../utils/profileAPI.js';

import { setCookie, splitCookie } from '../../utils/cookie.js';

//Экшен для записи данных пользователя
export const SET_PROFILE = 'SET_PROFILE';

//Экшены для сброса пароля на странице /forgot-password
export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';

//Экшены для установки нового пароля на странице /reset-password
export const SET_PASSWORD_REQUEST = 'SET_PASSWORD_REQUEST';
export const SET_PASSWORD_SUCCESS = 'SET_PASSWORD_SUCCESS';
export const SET_PASSWORD_FAILED = 'SET_PASSWORD_FAILED';

//Экшены для регистрации
export const REGISTSTRATION_REQUEST = 'REGISTSTRATION_REQUEST';
export const REGISTSTRATION_SUCCESS = 'REGISTSTRATION_SUCCESS';
export const REGISTSTRATION_FAILED = 'REGISTSTRATION_FAILED';

//Экшены для авторизации
export const AUTHORIZATION_REQUEST = 'AUTHORIZATION_REQUEST';
export const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS';
export const AUTHORIZATION_FAILED = 'AUTHORIZATION_FAILED';

//Сброс пароля
export const resetOldPassword = (email) => (dispatch) => {
  dispatch({
    type: RESET_PASSWORD_REQUEST
  });
  resetPassword(email)
   .then((res) => {
      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: res.success });
    })
    .catch(() => {
      dispatch({ type: RESET_PASSWORD_FAILED })
    });
};

//Установка нового пароля
export const setNewPassword = (password, code) => (dispatch) => {
  dispatch({
    type: SET_PASSWORD_REQUEST
  });
  setPassword(password, code)
    .then((res) => {
      dispatch({ type: SET_PASSWORD_SUCCESS, payload: res.success });
    })
    .catch(() => {
      dispatch({ type: SET_PASSWORD_FAILED })
    });
};

//Регистрация
export const registerOnSite = (email, password, name) => (dispatch) => {
  dispatch({
    type: REGISTSTRATION_REQUEST
  });
  register(email, password, name)
    .then((res) => {
      setCookie('token', splitCookie(res.accessToken));
      setCookie('refreshToken', res.refreshToken);
      dispatch({ type: REGISTSTRATION_SUCCESS, payload: res.success });
      dispatch({ type: SET_PROFILE, payload: res.user });
    })
    .catch(() => {
      dispatch({ type: REGISTSTRATION_FAILED })
    });
};

//Авторизация
export const logInToSite = (email, password) => (dispatch) => {
  dispatch({
    type: AUTHORIZATION_REQUEST
  });
  authorization(email, password)
    .then((res) => {
      setCookie('token', splitCookie(res.accessToken));
      setCookie('refreshToken', res.refreshToken);
      dispatch({ type: AUTHORIZATION_SUCCESS, payload: res.success });
      dispatch({ type: SET_PROFILE, payload: res.user });
    })
    .catch(() => {
      dispatch({ type: AUTHORIZATION_FAILED })
    });
};