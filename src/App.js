import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from './components/Container';
import { fetchAsyncPokemons, fetchNewGroup, selectFilteredPokemons, selectPokemons } from './redux/features/pokemons/pokemonsSlice';

import './App.css';
import { AppWrapper } from 'components/Pokemon/components/AppWrapper';
import { useRoutes } from 'react-router';
import { routes } from './routes';

export const App = () => {
  const dispatch = useDispatch();

  const element = useRoutes(routes);

  useEffect(() => {
    dispatch(fetchAsyncPokemons());
  }, [])

  return (
    <AppWrapper>
      {element ? element : <Container />}
    </AppWrapper>
  );
}
