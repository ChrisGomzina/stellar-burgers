import { BASE_URL } from './constans.js';
import { checkResponse } from './utils.js';

const resetPassword = (email) => 
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

const setPassword = (password, code) => 
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

const register = (email, password, name) => 
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

const authorization = (email, password) => 
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

const refreshTokenApi = (refreshToken) => {
  return fetch(`${BASE_URL}/auth/token`, {
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
  

const logOut = (refreshToken) => {
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

const getProfileData = (accessToken) => 
  fetch(`${BASE_URL}/auth/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${accessToken}`,
    },
  })
.then(res => checkResponse(res));

const sendProfileData = (accessToken, email, name, password) => 
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