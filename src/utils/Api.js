const BASE_URL = `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`;

const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(res.status));

export const getBtnState = () => fetch(`${BASE_URL}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(checkResponse);

export const getBtnStateOn = () => fetch(`${BASE_URL}/switch-on`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(checkResponse);

export const getBtnStateOff = () => fetch(`${BASE_URL}/switch-off`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(checkResponse);
