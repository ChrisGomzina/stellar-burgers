import { BASE_URL } from './constans.js';
import { checkResponse } from './utils.js';

const getData = () => {
  return fetch(`${BASE_URL}/ingredients`)
  .then(res => checkResponse(res));
};

export { getData };