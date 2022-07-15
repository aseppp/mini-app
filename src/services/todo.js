import { service } from './index';
import { endpoint } from './index';

export const addtodo = (data) => {
  return service.post(`${endpoint.TODO_URL}/add-todo/`, data);
};
export const getTodos = () => {
  return service.get(`${endpoint.TODO_URL}/todos/`);
};
export const deleteTodo = (id) => {
  return service.delete(`${endpoint.TODO_URL}/todo/${id}`);
};
export const editTodo = (data, id) => {
  return service.patch(`${endpoint.TODO_URL}/todo/${id}`, data);
};
export const getTodoById = (id) => {
  return service.get(`${endpoint.TODO_URL}/todo/${id}`);
};
