import { BASE_URL } from './constans';
import { checkResponse } from './utils';

const getData = () => {
  return fetch(`${BASE_URL}/ingredients`)
  .then(res => checkResponse(res));
};

export { getData };