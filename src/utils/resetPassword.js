import { BASE_URL } from './constans.js';
import { checkResponse } from './utils.js';

const requestPassword = (email) => 
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

const resetPassword = (password, code) => 
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

export { requestPassword, resetPassword };