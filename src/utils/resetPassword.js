import { BASE_URL } from './constans.js';
import { checkResponse } from './utils.js';

export const requestNewPassword = (email) => 
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

export const resetOldPassword = (password, code) => 
  fetch(`${BASE_URL}/password-reset/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "password": password,
      "token": code
    }),
  })  
  .then(res => checkResponse(res));

export { requestNewPassword, resetOldPassword };