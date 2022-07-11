// import { service } from './index';
// import { endpoint } from './index';
import axios from 'axios';

export const getMoviesDiscover = () => {
  return axios.get(`${process.env.REACT_APP_TMDB_URL}/discover/movie`, {
    params: {
      api_key: process.env.REACT_APP_TMDB_KEY
    }
  });
};

export const getMoviesTrending = () => {
  return axios.get(`${process.env.REACT_APP_TMDB_URL}/trending/all/day`, {
    params: {
      api_key: process.env.REACT_APP_TMDB_KEY
    }
  });
};

export const getMoviesTV = () => {
  return axios.get(`${process.env.REACT_APP_TMDB_URL}/discover/tv`, {
    params: {
      api_key: process.env.REACT_APP_TMDB_KEY
    }
  });
};

export const getDetailMovies = (id) => {
  return axios.get(`${process.env.REACT_APP_TMDB_URL}/movie/${id}`, {
    params: {
      api_key: process.env.REACT_APP_TMDB_KEY
    }
  });
};
