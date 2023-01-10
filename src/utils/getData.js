const url = 'https://norma.nomoreparties.space/api/ingredients';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

const getData = () => {
  return fetch(url)
  .then(res => checkResponse(res));
};

export { getData };