import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from './components/Container';
import { fetchAsyncPokemons, selectPokemons } from './redux/features/pokemons/pokemonsSlice';

import './App.css';
import { AppWrapper } from 'components/Pokemon/components/AppWrapper';

export const App = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(selectPokemons)

  useEffect(() => {
    if (!pokemons.length) {
      dispatch(fetchAsyncPokemons({}));
    }
  }, [dispatch, pokemons.length])

  return (
    <AppWrapper>
      <Container />
    </AppWrapper>
  );
}
