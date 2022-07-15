import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import {
  editTodo,
  setState,
  getTodoById
} from '../store/reducers/todo/actions';
import { useNavigate, useParams } from 'react-router-dom';

const TodoUpdate = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todo);
  console.log(todos);

  const { register, handleSubmit, watch, setValue } = useForm();

  useEffect(() => {
    dispatch(getTodoById(id));
  }, [dispatch]);

  useEffect(() => {
    if (todos?.detail) {
      setValue('title', todos?.detail?.data?.title);
    }
  }, [todos, setValue]);

  const onsubmit = () => {
    const newData = {
      title: watch('title')
    };
    dispatch(editTodo(id, newData));
  };
  const goBack = () => {
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };

  useEffect(() => {
    if (todos?.isUpdate) {
      dispatch(setState({ isAdd: false }));
      goBack();
    }
  }, [todos?.isUpdate, dispatch]);

  return (
    <main className="w-100 p-2 md:p-0">
      <div className="md:w-128 md:m-auto md:h-screen">
        <h1 className="font-poppin-style font-bold text-lg md:mt-8 mb-3 mt-3">
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

          <button className="w-full mt-3 py-3 bg-black text-white">
            Update Todo
          </button>
        </form>
      </div>
    </main>
  );
};

export default TodoUpdate;
