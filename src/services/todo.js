import { service } from './index';
import { endpoint } from './index';

export const addtodo = (data) => {
  return service.post(`${endpoint.TODO_URL}/add-todo/`, data);
};
export const getTodos = (param) => {
  return service.get(`${endpoint.TODO_URL}/todos`, param);
};
