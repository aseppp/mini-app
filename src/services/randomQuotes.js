import { endpoint } from './index';
import { service } from './index';

export const getQuotes = () => {
  return service.get(`${endpoint.QUOTE_URL}/random`);
};

export const getQuotesByAuthor = (param) => {
  return service.get(`${endpoint.QUOTE_URL}/quotes?author=${param}`);
};
