import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/reducers/todo/actions';

const Todo = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch
    // clearErrors
    // formState: { errors }
  } = useForm();

  const onsubmit = () => {
    const newData = {
      title: watch('title')
    };
    dispatch(addTodo(newData));
    console.log(newData);
  };

  return (
    <main className="w-100">
      <div className="w-128 md:m-auto md:h-screen">
        <h1 className="font-poppin-style font-bold text-lg md:mt-8 mb-3 ">
          Do something ?{' '}
        </h1>
        <form onSubmit={handleSubmit(onsubmit)} className="md:mt-8">
          <TextField
            {...register('title')}
            error={watch('title') === ''}
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
      </div>
    </main>
  );
};

export default Todo;
