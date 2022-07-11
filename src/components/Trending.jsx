import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../store/reducers/movie/actions';

const Trending = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const dataMoviesTrending = movies?.trendingMovies?.results;

  useEffect(() => {
    dispatch(getTrendingMovies());
  }, [dispatch]);

  return (
    <div className=" w-full flex overflow-scroll gap-5 pb-8">
      {dataMoviesTrending?.map((item, index) => (
        <Link to={`/movies/${item.id}`} key={index}>
          <div className="w-40">
            <img
              src={`${process.env.REACT_APP_TMDB_IMAGE_URL}/${item.poster_path}`}
              alt=""
              className="rounded"
            />
            <h1 className="text-center font-semibold">
              {item.title || item.original_name}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Trending;
