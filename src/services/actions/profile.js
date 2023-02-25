import { resetPassword, 
  setPassword, 
  register, 
  authorization, 
  refreshTokenApi, 
  logOut, 
  getProfileData, 
  sendProfileData } from '../../utils/profileAPI.js';

import { setCookie, splitCookie, deleteCookie, getCookie } from '../../utils/cookie.js';

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

//Экшены для выхода из профиля
export const LOGOUT_REQUEST = 'LOGOUT_REQOUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

//Экшены для получения данных о пользователе
export const GET_PROFILE_DATA_REQUEST = 'GET_PROFILE_DATA_REQUEST';
export const GET_PROFILE_DATA_SUCCESS = 'GET_PROFILE_DATA_SUCCESS';
export const GET_PROFILE_DATA_FAILED = 'GET_PROFILE_DATA_FAILED';

//Экшены для редактирования данных пользователя 
export const SEND_PROFILE_DATA_REQUEST = 'SEND_PROFILE_DATA_REQUEST';
export const SEND_PROFILE_DATA_SUCCESS = 'SEND_PROFILE_DATA_SUCCESS';
export const SEND_PROFILE_DATA_FAILED = 'SEND_PROFILE_DATA_FAILED';

//Экшены для обновления токена
export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED = 'REFRESH_TOKEN_FAILED';

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
export const registerOnSite = (email, password, name, forwarding) => (dispatch) => {
  dispatch({
    type: REGISTSTRATION_REQUEST
  });
  register(email, password, name)
    .then((res) => {
      setCookie('token', splitCookie(res.accessToken));
      setCookie('refreshToken', res.refreshToken);
      dispatch({ type: REGISTSTRATION_SUCCESS, payload: res.success });
      dispatch({ type: SET_PROFILE, payload: res.user });
      forwarding();
    })
    .catch(() => {
      dispatch({ type: REGISTSTRATION_FAILED })
    });
};

//Авторизация
export const logInToSite = (email, password, forwarding) => (dispatch) => {
  dispatch({
    type: AUTHORIZATION_REQUEST
  });
  authorization(email, password)
    .then((res) => {
      setCookie('token', splitCookie(res.accessToken));
      setCookie('refreshToken', res.refreshToken);
      dispatch({ type: AUTHORIZATION_SUCCESS, payload: res.success });
      dispatch({ type: SET_PROFILE, payload: res.user });
      forwarding();
    })
    .catch(() => {
      dispatch({ type: AUTHORIZATION_FAILED })
    });
};

//Выход из профиля
export const logOutSite = (refreshToken, forwarding) => (dispatch) => {
  dispatch({
    type: LOGOUT_REQUEST
  });
  logOut(refreshToken)
    .then((res) => {
      dispatch({ type: LOGOUT_SUCCESS, payload: res.success });
      deleteCookie('token');
      deleteCookie('refreshToken');
      forwarding();
    })
    .catch(() => {
      dispatch({ type: LOGOUT_FAILED })
    });
};

//Обновление токена
export const updateToken = (refreshToken) => (dispatch) => {
  dispatch({
    type: REFRESH_TOKEN_REQUEST
  });
  refreshTokenApi(refreshToken)
    .then((res) => {
      setCookie('token', splitCookie(res.accessToken));
      setCookie('refreshToken', res.refreshToken);
      dispatch({ type: REFRESH_TOKEN_SUCCESS, payload: res.success });
    })
    .catch(() => {
      dispatch({ type: REFRESH_TOKEN_FAILED })
    });
};

//Получение данных пользователя
export const getProfileInfo = (accessToken) => (dispatch) => {
  dispatch({
    type: GET_PROFILE_DATA_REQUEST
  });
  getProfileData(accessToken)
    .then((res) => {
      dispatch({ type: SET_PROFILE, payload: res.user });
      dispatch({ type: REFRESH_TOKEN_SUCCESS, payload: null });
      dispatch({ type: GET_PROFILE_DATA_SUCCESS, payload: res.success });
    })
    .catch((err) => {
      if (err.message === 'jwt malformed' || err.message === 'jwt expired') {
        dispatch(updateToken(getCookie('refreshToken')));
      }
    });
};

//Отправка отредактированных данных
export const sendProfileInfo = (accessToken, email, name, password) => (dispatch) => {
  dispatch({
    type: SEND_PROFILE_DATA_REQUEST
  });
  sendProfileData(accessToken, email, name, password)
    .then((res) => {
      dispatch({ type: SET_PROFILE, payload: res.user });
      dispatch({ type: SEND_PROFILE_DATA_SUCCESS, payload: res.success });
    })
    .catch((err) => {
      if (err.message === 'jwt malformed' || err.message === 'jwt expired') {
        dispatch(updateToken(getCookie('refreshToken')));
        dispatch({ type: SEND_PROFILE_DATA_FAILED })
      }
    });
};