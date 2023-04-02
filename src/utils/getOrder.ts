import { BASE_URL } from './constans';
import { checkResponse } from './utils';
import { getCookie } from '../utils/cookie';

const getOrder = (ingredients: Array<string| undefined>) =>
  fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'authorization': `Bearer ${getCookie('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ingredients,
    }),
  })  
  .then(res => checkResponse(res));

export { getOrder };