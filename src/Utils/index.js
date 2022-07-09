export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const responseGoogle = (response) => {
  console.log(response);
};

export const getToken = () => {
  return localStorage.getItem('token');
};
