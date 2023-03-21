import { BASE_URL } from './constans';
import { checkResponse } from './utils';

const getOrder = (ingredients: Array<string>, token: string) =>
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