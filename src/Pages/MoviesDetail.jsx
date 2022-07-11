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
      <div className="relative w-full h-30 bg-black ">
        {/* <div> */}
        <img
          src={`${process.env.REACT_APP_TMDB_IMAGE_URL}/${detailMovie?.backdrop_path}`}
          alt=""
          className="bg-no-repeat w-full h-30 object-cover opacity-20 object-top"
        />
        {/* </div> */}

        <div>
          <h1 className="absolute">hello</h1>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetail;
