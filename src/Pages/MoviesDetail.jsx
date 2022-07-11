import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getDetailMovies } from '../store/reducers/movie/actions';

const MoviesDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const detailMovie = movies?.detailMovies;
  console.log(detailMovie);

  useEffect(() => {
    dispatch(getDetailMovies(id));
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default MoviesDetail;
