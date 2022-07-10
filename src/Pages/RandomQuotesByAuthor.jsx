import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getRandomQuotesByAuthor } from '../store/reducers/randomQuotes/actions';

const RandomQuotesByAuthor = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [param, setParam] = useState('');

  const quotes = useSelector((state) => state.quote);
  const quotesData = quotes?.quotesData?.results;
  console.log(quotes?.quotesData);

  console.log(id);

  useEffect(() => {
    if (id) {
      setParam(id);
    }
    dispatch(getRandomQuotesByAuthor(param));
  }, [id, param]);

  return (
    <div>
      <div className="w-full h-screen flex content-center flex-col pt-28 mb-96">
        <div className="md:w-128 m-auto flex flex-col items-center p-5">
          <div>
            <h1 className="text-4xl mb-5 font-poppin-style text-left">
              Quotes By <span className="font-bold italic">{param}</span>
            </h1>
          </div>
          <div className="flex flex-col gap-8 md:gap-10">
            {quotesData
              ? quotesData.map((item, index) => (
                  <div key={index} className="">
                    <span className="text-lg text-left font-poppin-style text-gray-600">
                      {'" '}
                      {item.content}
                      {' "'}
                    </span>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuotesByAuthor;
