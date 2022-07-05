import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const loc = useLocation();

  console.log(loc);

  return (
    <>
      <nav>
        <h1 className="uppercase text-2xl m-2 font-space-mono absolute md:m-6">
          404 not found
        </h1>
      </nav>
    </>
  );
};

export default Navbar;
