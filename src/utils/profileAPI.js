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
  fetch('https://norma.nomoreparties.space/api/auth/register', {
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


export { resetPassword, setPassword, register };