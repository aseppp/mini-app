import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTodos } from '../store/reducers/todo/actions';

const TodosList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1>todos</h1>
      </div>
    </div>
  );
};

export default TodosList;
