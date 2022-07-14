import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, getTodos } from '../store/reducers/todo/actions';
import { Link } from 'react-router-dom';

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const todosList = todos?.todos?.data;
  console.log(todosList);

  const { register, handleSubmit, watch } = useForm();

  const onsubmit = () => {
    const newData = {
      title: watch('title')
    };
    dispatch(addTodo(newData));
  };

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <main className="w-100">
      <div className="w-128 md:m-auto md:h-screen">
        <h1 className="font-poppin-style font-bold text-lg md:mt-8 mb-3 ">
          Do something ?{' '}
        </h1>

        <form onSubmit={handleSubmit(onsubmit)}>
          <TextField
            {...register('title')}
            required
            fullWidth
            id="outlined-basic"
            label="Type here ..."
            variant="outlined"
            type="title"
          />

          <button className="w-full md:mt-3 md:py-3 bg-black text-white">
            Add Todo
          </button>
        </form>

        <div className="md:mt-5">
          <h1 className="text-2xl font-bold font-poppin-style">Active Todos</h1>
          {todosList?.map((item, index) => (
            <div
              key={index}
              className="md:mt-3 bg-black md:py-3 md:px-2 flex justify-between"
            >
              <div>
                <h1 className="text-white font-bold">{item.title}</h1>
              </div>
              <div className="flex md:gap-3">
                <Link to={`/todos/${item.id}`}>
                  <i className="bx bxs-edit-alt bx-sm text-white"></i>
                </Link>
                <button>
                  <i className="bx bx-trash bx-sm text-white "></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Todo;
