import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getDetailMovies } from '../store/reducers/movie/actions';

const MoviesDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const detailMovie = movies?.detailMovies;

  useEffect(() => {
    dispatch(getDetailMovies(id));
  }, [dispatch]);

  return (
    <div>
      <div className="relative w-full h-screen bg-black">
        <img
          src={`${process.env.REACT_APP_TMDB_IMAGE_URL}/${
            detailMovie?.backdrop_path || null
          }`}
          alt=""
          className="absolute w-full h-full opacity-20 object-cover object-top"
        />

        <div className="absolute p-3 md:p-0 md:w-full md:h-screen flex">
          <div className="flex flex-col md:w-130 md:flex-row items-center md:m-auto md:content-center md:gap-10">
            <div>
              <img
                src={`${process.env.REACT_APP_TMDB_IMAGE_URL}/${
                  detailMovie?.poster_path || null
                }`}
                alt=""
                className="w-48 md:w-full"
              />
            </div>

            <div>
              <div className="mt-2">
                <h1 className="md:text-4xl text-2xl text-white font-Source-sans-pro font-bold">
                  {detailMovie?.title}
                </h1>
                <p className="text-white font-Source-sans-pro text-lg italic">
                  {detailMovie?.tagline}
                </p>

                <div className="flex gap-3 md:mt-5 my-2 flex-wrap">
                  {detailMovie?.genres?.map((item, index) => (
                    <div
                      key={index}
                      className="flex border md:p-2 p-1 rounded hover:bg-white cursor-pointer"
                    >
                      <p className="text-white hover:text-black">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:mt-5 mt-5">
                <h1 className="text-white md:text-lg font-bold font-Source-sans-pro">
                  Overview
                </h1>
                <p className="text-lg text-white font-Source-sans-pro md:w-128">
                  {detailMovie?.overview}
                </p>

                <p className="text-white mt-5">
                  Release date : {detailMovie?.release_date}
                </p>

                <p className="text-white mt-5">
                  Status : {detailMovie?.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetail;
