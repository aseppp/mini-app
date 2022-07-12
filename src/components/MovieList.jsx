import React from 'react';
import DiscoverMovie from './Discover';
import Trending from './Trending';
import TvMovies from './TvMovies';

const Discover = () => {
  return (
    <div className="px-2">
      <h1 className="my-5 font-bold text-2xl">Discover</h1>
      <div className="rounded">
        <DiscoverMovie />
      </div>

      <h1 className="my-5 font-bold text-2xl">Trending</h1>
      <div className="rounded">
        <Trending />
      </div>

      <h1 className="my-5 font-bold text-2xl">Top Rated</h1>
      <div className="rounded">
        <TvMovies />
      </div>
    </div>
  );
};

export default Discover;
