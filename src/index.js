import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import App from './App';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import { fetchPokemons } from './redux/features/pokemons/pokemonsSlice';

import './index.css';

store.dispatch(fetchPokemons());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
