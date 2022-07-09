import axios from 'axios';

// CREATE BASE URL
export const service = axios.create();

export const setAuthToken = (token) => {
  if (token) {
    service.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete service.defaults.headers.common['Authorization'];
  }
};

export const endpoint = {
  QUOTE_URL: process.env.REACT_APP_RANDOM_QUOTES_URL,
  ACCOUNT_URL: process.env.REACT_APP_ACCOUNT_URL
};
