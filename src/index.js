import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);

reportWebVitals();
