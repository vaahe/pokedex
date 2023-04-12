import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Pokemon from './Pokemon';
import { fetchAdditionalData, selectPokemons, selectAdditionalData } from '../redux/features/pokemons/pokemonsSlice';

const PokemonWrapper = () => {
    const pokemons = useSelector(selectPokemons);
    const additionalData = useSelector(selectAdditionalData);
    const dispatch = useDispatch();

    useEffect(() => {
        pokemons.forEach(async pokemon =>
            dispatch(fetchAdditionalData(pokemon.url))
        );
    }, [dispatch]);

    return (
        <div>
            {pokemons.length && pokemons.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.url} />)}
        </div>
    )
}

export default PokemonWrapper;