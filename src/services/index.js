import axios from 'axios';

// CREATE BASE URL
export const service = axios.create({
  baseURL: process.env.REACT_APP_TMDB_URL
});

service.defaults.headers.common[
  'Authorization'
] = `Bearer ${process.env.REACT_APP_TMDB_KEY}`;

export const endpoint = {
  QUOTE_URL: process.env.REACT_APP_RANDOM_QUOTES_URL,
  ACCOUNT_URL: process.env.REACT_APP_ACCOUNT_URL,
  MOVIE_URL: process.env.REACT_APP_TMDB_URL
};
