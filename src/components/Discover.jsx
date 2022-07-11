import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDiscoverMovies } from '../store/reducers/movie/actions';

const SliderCard = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const dataMoviesDiscover = movies?.discoverMovies?.results;

  useEffect(() => {
    dispatch(getDiscoverMovies());
  }, [dispatch]);

  return (
    <div className=" w-full flex overflow-scroll gap-5 pb-8">
      {dataMoviesDiscover?.map((item, index) => (
        <Link to={`/movies/${item.id}`} key={index}>
          <div className="w-40">
            <img
              src={`${process.env.REACT_APP_TMDB_IMAGE_URL}/${item.poster_path}`}
              alt=""
              className="rounded"
            />
            <h1 className="text-center font-semibold">{item.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SliderCard;
