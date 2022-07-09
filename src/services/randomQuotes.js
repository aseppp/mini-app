import { endpoint } from './index';
import { service } from './index';

export const getQuotes = (param) => {
  return service.get(`${endpoint.QUOTE_URL}`, param);
};
