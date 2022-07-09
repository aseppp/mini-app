import { service } from './index';
import { endpoint } from './index';

export const register = (data) => {
  return service.post(`${endpoint.ACCOUNT_URL}/register`, data);
};

export const login = (data) => {
  return service.post(`${endpoint.ACCOUNT_URL}/login`, data);
};
