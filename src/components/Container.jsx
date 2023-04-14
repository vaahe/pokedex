import React from 'react';
import { useSelector } from 'react-redux';

import Pokemon from './Pokemon';
import { selectPokemons } from '../redux/features/pokemons/pokemonsSlice';

import { Grid } from '@mui/material';
import { Pagination } from './Pokemon/components/Pagination';
import { FilterArea } from './Pokemon/components/FilterArea';


const Container = () => {
    const pokemons = useSelector(selectPokemons);

    return (
        <>
            <FilterArea />
            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ p: 12 }}
            >
                {pokemons.length && pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
            </Grid>
            <Pagination />
        </>
    )
}

export default Container;