import { BASE_URL } from './constans.js';
import { checkResponse } from './utils.js';

const getOrder = (ingredients, token) =>
  fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ingredients,
    }),
  })  
  .then(res => checkResponse(res));

export { getOrder };