import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getRandomQuotes } from '../store/reducers/randomQuotes/actions';

const RandomQuotes = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote);
  console.log(quote);

  useEffect(() => {
    dispatch(getRandomQuotes());
  }, [dispatch]);

  const handleGenerateQuote = () => {
    dispatch(getRandomQuotes());
  };

  return (
    <div>
      <div className="w-full h-screen flex content-center flex-col">
        <div className="md:w-128 m-auto flex flex-col items-center p-5">
          <div className="flex items-center gap-8 md:gap-10">
            <div className="md:block w-24 h-60 bg-yellow-400 rounded-full"></div>
            <span className="text-xl font-poppin-style font-medium">
              {'"'}
              {quote.data ? quote.data.content : ''}
              {'"'}
            </span>
          </div>

          <div className="mt-10 w-full">
            <div>
              <Link
                to={`${quote.data ? quote.data.author : null}`}
                className="w-full h-24 bg-black text-white flex justify-between items-center px-5"
              >
                <div>
                  <h1 className="text-start text-1xl">
                    {quote.data ? quote.data.author : ''}
                  </h1>
                  <h1 className="text-start">
                    {quote.data ? quote.data.tags[0] : ''}
                  </h1>
                </div>
                <div>
                  <i className="bx bx-right-arrow-alt bx-lg text-white"></i>
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <button
              onClick={handleGenerateQuote}
              className="flex items-center gap-1 content-end"
            >
              <i className="bx bx-refresh bx-sm"></i>
              <span>Generate New Quote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuotes;
