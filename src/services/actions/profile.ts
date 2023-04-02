import { resetPassword, 
  setPassword, 
  register, 
  authorization, 
  refreshTokenApi, 
  logOut, 
  getProfileData, 
  sendProfileData } from '../../utils/profileAPI';

import { setCookie, splitCookie, deleteCookie, getCookie } from '../../utils/cookie';

import { TUser } from '../types/types';
import { AppDispatch } from '../types/index';

//Экшен для записи данных пользователя
export const SET_PROFILE: 'SET_PROFILE' = 'SET_PROFILE';

//Экшены для сброса пароля на странице /forgot-password
export const RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST' = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS' = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED: 'RESET_PASSWORD_FAILED' = 'RESET_PASSWORD_FAILED';

//Экшены для установки нового пароля на странице /reset-password
export const SET_PASSWORD_REQUEST: 'SET_PASSWORD_REQUEST' = 'SET_PASSWORD_REQUEST';
export const SET_PASSWORD_SUCCESS: 'SET_PASSWORD_SUCCESS' = 'SET_PASSWORD_SUCCESS';
export const SET_PASSWORD_FAILED: 'SET_PASSWORD_FAILED' = 'SET_PASSWORD_FAILED';

//Экшены для регистрации
export const REGISTSTRATION_REQUEST: 'REGISTSTRATION_REQUEST' = 'REGISTSTRATION_REQUEST';
export const REGISTSTRATION_SUCCESS: 'REGISTSTRATION_SUCCESS' = 'REGISTSTRATION_SUCCESS';
export const REGISTSTRATION_FAILED: 'REGISTSTRATION_FAILED' = 'REGISTSTRATION_FAILED';

//Экшены для авторизации
export const AUTHORIZATION_REQUEST: 'AUTHORIZATION_REQUEST' = 'AUTHORIZATION_REQUEST';
export const AUTHORIZATION_SUCCESS: 'AUTHORIZATION_SUCCESS' = 'AUTHORIZATION_SUCCESS';
export const AUTHORIZATION_FAILED: 'AUTHORIZATION_FAILED' = 'AUTHORIZATION_FAILED';

//Экшены для выхода из профиля
export const LOGOUT_REQUEST: 'LOGOUT_REQOUEST' = 'LOGOUT_REQOUEST';
export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED: 'LOGOUT_FAILED' = 'LOGOUT_FAILED';

//Экшены для получения данных о пользователе
export const GET_PROFILE_DATA_REQUEST: 'GET_PROFILE_DATA_REQUEST' = 'GET_PROFILE_DATA_REQUEST';
export const GET_PROFILE_DATA_SUCCESS: 'GET_PROFILE_DATA_SUCCESS' = 'GET_PROFILE_DATA_SUCCESS';
export const GET_PROFILE_DATA_FAILED: 'GET_PROFILE_DATA_FAILED' = 'GET_PROFILE_DATA_FAILED';

//Экшены для редактирования данных пользователя 
export const SEND_PROFILE_DATA_REQUEST: 'SEND_PROFILE_DATA_REQUEST' = 'SEND_PROFILE_DATA_REQUEST';
export const SEND_PROFILE_DATA_SUCCESS: 'SEND_PROFILE_DATA_SUCCESS' = 'SEND_PROFILE_DATA_SUCCESS';
export const SEND_PROFILE_DATA_FAILED: 'SEND_PROFILE_DATA_FAILED' = 'SEND_PROFILE_DATA_FAILED';

//Экшены для обновления токена
export const REFRESH_TOKEN_REQUEST: 'REFRESH_TOKEN_REQUEST' = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS: 'REFRESH_TOKEN_SUCCESS' = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILED: 'REFRESH_TOKEN_FAILED' = 'REFRESH_TOKEN_FAILED';

export interface ISetProfile {
  readonly type: typeof SET_PROFILE;
  readonly payload: TUser;
}

export interface IResetPasswordRequest {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}

export interface IResetPasswordSuccess {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
  readonly payload: boolean;
}

export interface IResetPasswordFailed {
  readonly type: typeof RESET_PASSWORD_FAILED;
}

export interface ISetPasswordRequest {
  readonly type: typeof SET_PASSWORD_REQUEST;
}

export interface ISetPasswordSuccess {
  readonly type: typeof SET_PASSWORD_SUCCESS;
  readonly payload: boolean;
}

export interface ISetPasswordFailed {
  readonly type: typeof SET_PASSWORD_FAILED;
}

export interface IRegistrationRequest {
  readonly type: typeof REGISTSTRATION_REQUEST;
}

export interface IRegistrationSuccess {
  readonly type: typeof REGISTSTRATION_SUCCESS;
  readonly payload: boolean;
}

export interface IRegistrationFailed {
  readonly type: typeof REGISTSTRATION_FAILED;
}

export interface IAuthorizationRequest {
  readonly type: typeof AUTHORIZATION_REQUEST;
}

export interface IAuthorizationSuccess {
  readonly type: typeof AUTHORIZATION_SUCCESS;
  readonly payload: boolean;
}

export interface IAuthorizationFailed {
  readonly type: typeof AUTHORIZATION_FAILED;
}

export interface ILogoutRequest {
  readonly type: typeof LOGOUT_REQUEST;
}

export interface ILogoutSuccess {
  readonly type: typeof LOGOUT_SUCCESS;
  readonly payload: boolean;
}

export interface ILogoutFailed {
  readonly type: typeof LOGOUT_FAILED;
}

export interface IGetProfileDataRequest {
  readonly type: typeof GET_PROFILE_DATA_REQUEST;
} 

export interface IGetProfileDataSuccess {
  readonly type: typeof GET_PROFILE_DATA_SUCCESS;
  readonly payload: boolean;
}

export interface IGetProfileDataFailed {
  readonly type: typeof GET_PROFILE_DATA_FAILED;
}

export interface ISendProfileDataRequest {
  readonly type: typeof SEND_PROFILE_DATA_REQUEST;
}

export interface ISendProfileDataSuccess {
  readonly type: typeof SEND_PROFILE_DATA_SUCCESS;
  readonly payload: boolean;
}

export interface ISendProfileDataFailed {
  readonly type: typeof SEND_PROFILE_DATA_FAILED;
}

export interface IRefreshTokenRequest {
  readonly type: typeof REFRESH_TOKEN_REQUEST;
}

export interface IRefreshTokenSuccess {
  readonly type: typeof REFRESH_TOKEN_SUCCESS;
  readonly payload: boolean;
}

export interface IRefreshTokenFailed {
  readonly type: typeof REFRESH_TOKEN_FAILED;
}

export type TProfileActions =
  | ISetProfile
  | IResetPasswordRequest
  | IResetPasswordSuccess
  | IResetPasswordFailed
  | ISetPasswordRequest
  | ISetPasswordSuccess
  | ISetPasswordFailed
  | IRegistrationRequest
  | IRegistrationSuccess
  | IRegistrationFailed
  | IAuthorizationRequest
  | IAuthorizationSuccess
  | IAuthorizationFailed
  | ILogoutRequest
  | ILogoutSuccess
  | ILogoutFailed
  | IGetProfileDataRequest
  | IGetProfileDataSuccess
  | IGetProfileDataFailed
  | ISendProfileDataRequest
  | ISendProfileDataSuccess
  | ISendProfileDataFailed
  | IRefreshTokenRequest
  | IRefreshTokenSuccess
  | IRefreshTokenFailed;

//Сброс пароля
export const resetOldPassword = (email: string) => (dispatch: AppDispatch) => {
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
export const setNewPassword = (password: string, code: string) => (dispatch: AppDispatch) => {
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
export const registerOnSite = (email: string, password: string, name: string, forwarding: () => void) => (dispatch: AppDispatch) => {
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
export const logInToSite = (email: string, password: string, forwarding: () => void) => (dispatch: AppDispatch) => {
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
export const logOutSite = (refreshToken: string, forwarding: () => void) => (dispatch: AppDispatch) => {
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
export const updateToken = () => (dispatch: AppDispatch) => {
  dispatch({
    type: REFRESH_TOKEN_REQUEST
  });
  refreshTokenApi()
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
export const getProfileInfo = (accessToken: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: GET_PROFILE_DATA_REQUEST
  });
  getProfileData(accessToken)
    .then((res) => {
      dispatch({ type: SET_PROFILE, payload: res.user });
      // dispatch({ type: REFRESH_TOKEN_SUCCESS, payload: null });
      dispatch({ type: GET_PROFILE_DATA_SUCCESS, payload: res.success });
    })
    .catch((err) => {
      dispatch({ type: GET_PROFILE_DATA_FAILED });
      if (err.message === 'jwt malformed' || err.message === 'jwt expired') {
        dispatch(updateToken());
      }
    });
};

//Отправка отредактированных данных
export const sendProfileInfo = (accessToken: string, email: string, name: string, password: string) => (dispatch: AppDispatch) => {
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
        dispatch(updateToken());
        dispatch({ type: SEND_PROFILE_DATA_FAILED })
      }
    });
};