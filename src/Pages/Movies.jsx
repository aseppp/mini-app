import React from 'react';
import Discover from '../components/MovieList';

const Movies = () => {
  return (
    <div className="w-full z-30 h-fit">
      <div className="md:w-130 m-auto">
        <Discover />
      </div>
    </div>
  );
};

export default Movies;
