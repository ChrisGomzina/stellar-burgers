const checkResponse = (res) => res.ok ? res.json() : res.json().then(data => Promise.reject(data));

export { checkResponse };