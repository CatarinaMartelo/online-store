import React from 'react';
import ReactDOM from 'react-dom/client';
import "semantic-ui-css/semantic.min.css";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { RouterProvider } from 'react-router';
import { router } from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  
  <Provider store={store}>
      <RouterProvider router={router} />
  
  </Provider>

  
);

