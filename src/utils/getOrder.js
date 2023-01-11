const url = 'https://norma.nomoreparties.space/api/orders';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

const getOrder = (ingredients) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ingredients,
    }),
  })  
  .then(res => checkResponse(res));

export { getOrder };