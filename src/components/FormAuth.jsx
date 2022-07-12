import React, { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import Robot from '../assets/images/robot.png';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';

import { registerAuth, login } from '../store/reducers/auth/actions';
import { setToken, getToken } from '../Utils';
import { useNavigate } from 'react-router-dom';

const FormAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [dataUser, setDataUser] = useState({});
  console.log(dataUser);

  const auth = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    watch
    // formState: { errors }
  } = useForm();

  const handleShowLogin = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenToast(false);
  };

  const responseGoogle = (response) => {
    console.log(response);
    setDataUser(response);
    setToken(response.accessToken);
    navigate('/todo');
  };

  const onSubmit = () => {
    const dataRegister = {
      name: watch('name'),
      email: watch('email'),
      password: watch('password')
    };
    const dataLogin = {
      email: watch('email'),
      password: watch('password')
    };
    if (showLogin) {
      dispatch(login(dataLogin));
    } else {
      dispatch(registerAuth(dataRegister));
    }
  };

  useEffect(() => {
    if (auth.isAdd) {
      setOpenToast(true);
      navigate('/todo');
    }
  }, [auth]);

  return (
    <div className="font-poppin-style mb-10">
      <div className="Card w-full flex content-center h-screen flex-col">
        <div className="m-auto w-11/12 md:w-1/4 border-lg rounded py-8 px-3">
          <div className="flex flex-col items-center">
            <img src={Robot} alt="illustration" className="w-1/4 mb-5" />
            <h3 className="text-3xl font-bold font-poppin-style mb-3">
              Authentication
            </h3>
            <p className=" text-sm font-poppin-style text-gray-400 text-center">
              Join to get more interest, also you don't have to worry about
              missing info about movies update.
            </p>
          </div>

          <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              {showLogin ? (
                <>
                  <div className="mb-3">
                    <TextField
                      {...register('email')}
                      fullWidth
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      type="email"
                    />
                  </div>

                  <div className="mb-3">
                    <TextField
                      {...register('password')}
                      fullWidth
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      type="password"
                    />
                  </div>

                  <div className="w-full flex justify-center mb-3 ">
                    <button
                      type={'submit'}
                      className="w-full bg-black text-white m-auto py-3"
                    >
                      Login
                    </button>
                  </div>

                  <div className="w-full flex justify-center mb-2">
                    <span className="text-center">
                      Dont't have account ? {''}
                      <button onClick={handleShowLogin} className="text-blue">
                        Register
                      </button>
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-3">
                    <TextField
                      {...register('name')}
                      fullWidth
                      id="outlined-basic"
                      label="Full Name"
                      variant="outlined"
                      type="name"
                    />
                  </div>

                  <div className="mb-3">
                    <TextField
                      {...register('email')}
                      fullWidth
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      type="email"
                    />
                  </div>

                  <div className="mb-3">
                    <TextField
                      {...register('password')}
                      fullWidth
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      type="password"
                    />
                  </div>

                  <div className="w-full flex justify-center mb-3 ">
                    <button className="w-full bg-black text-white m-auto py-3">
                      Register
                    </button>
                  </div>

                  <div className="w-full flex justify-center mb-2">
                    <span className="text-center">
                      Already have account ? {''}
                      <button onClick={handleShowLogin} className="text-blue">
                        Login
                      </button>
                    </span>
                  </div>
                </>
              )}

              {/* <div className="w-full flex justify-center ">
                <span className="text-center text-gray-400">or</span>
              </div> */}
              <hr />

              <div>
                <GoogleLogin
                  clientId="955683013687-irnv015hin026m1ou7f0gei19t55eu4o.apps.googleusercontent.com"
                  buttonText="Continue with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  className="w-full text-center justify-center mt-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <Snackbar
        open={openToast}
        onClose={handleClose}
        onRequestClose={() => setOpenToast(!openToast)}
        message="Register success, please login"
        autoHideDuration={6000}
      />
    </div>
  );
};

export default FormAuth;
