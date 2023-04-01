import { BASE_URL } from './constans';
import { checkResponse } from './utils';
import { getCookie } from '../utils/cookie';

const resetPassword = (email: string) => 
  fetch(`${BASE_URL}/password-reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  })  
  .then(res => checkResponse(res));

const setPassword = (password: string, code: string) => 
  fetch(`${BASE_URL}/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'password': password,
      'token': code
    }),
  })  
  .then(res => checkResponse(res));

const register = (email: string, password: string, name: string) => 
  fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'email': email, 
      'password': password, 
      'name': name
    }),
  })
  .then(res => checkResponse(res));

const authorization = (email: string, password: string) => 
fetch(`${BASE_URL}/auth/login`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    'email': email, 
    'password': password
  }),
})
.then(res => checkResponse(res));

const refreshTokenApi = () => {
  return fetch(`${BASE_URL}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'token': getCookie('refreshToken'),
    }),
  })
  .then(res => checkResponse(res));
};
  

const logOut = (refreshToken: string) => {
  return fetch(`${BASE_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'token': refreshToken,
    }),
  })
  .then(res => checkResponse(res));
};

const getProfileData = (accessToken: string) => 
  fetch(`${BASE_URL}/auth/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${accessToken}`,
    },
  })
.then(res => checkResponse(res));

const sendProfileData = (accessToken: string, email: string, name: string, password: string) => 
  fetch(`${BASE_URL}/auth/user`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      'email': email,
      'name': name,
      'password': password
    }),
  })
.then(res => checkResponse(res));

export { resetPassword, setPassword, register, authorization, refreshTokenApi, logOut, getProfileData, sendProfileData };