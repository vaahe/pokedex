import { useEffect } from 'react';
import { useRoutes } from 'react-router';
import { useDispatch } from 'react-redux';

import { routes } from './routes';
import { AppWrapper } from 'components/AppWrapper';
import { Container } from './components/Container';
import { fetchAsyncPokemons } from './redux/features/pokemons/pokemonsSlice';


export const App = () => {
  const dispatch = useDispatch();

  const element = useRoutes(routes);

  useEffect(() => {
    dispatch(fetchAsyncPokemons());
  }, [dispatch])

  return (
    <AppWrapper>
      {element ? element : <Container />}
    </AppWrapper>
  );
}
