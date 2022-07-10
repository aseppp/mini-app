import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { gapi } from 'gapi-script';

gapi.load('client:auth2', () => {
  gapi.client.init({
    clientId: process.env.GOOGLE_CLIENT_ID
  });
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
