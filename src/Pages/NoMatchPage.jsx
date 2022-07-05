import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../assets/images/Scarecrow.png';

const NoMatchPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <main className="h-screen flex items-center p-5">
        <div className="flex flex-col md:flex-row max-w-6xl m-auto md:items-center md:gap-8">
          <div className="flex-2 ">
            <div className="max-w-lg">
              <img src={Image} alt="main_image" />
            </div>
          </div>

          <div className="flex-1 mt-8">
            <h1 className="text-4xl font-space-mono font-bold mb-4 md:text-7xl">
              I have bad news for you
            </h1>
            <h3 className="text-xl font-space-mono text-gray-400 md:text-2xl md:max-w-sm">
              The page you are looking for might be removed or is temporarily
              unavailable
            </h3>
            <button
              onClick={goBack}
              className="mt-4 py-4 px-10 bg-grey-button text-white md:mt-8"
            >
              Back to home.
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default NoMatchPage;
