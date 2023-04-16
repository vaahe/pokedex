import React from 'react';
import { useSelector } from 'react-redux';

import Pokemon from './Pokemon';
import { selectFilteredPokemons, selectPokemons, selectStatus } from '../redux/features/pokemons/pokemonsSlice';

import { Box, CircularProgress, Grid } from '@mui/material';
import { Pagination } from './Pokemon/components/Pagination';
import { FilterArea } from './Pokemon/components/FilterArea';


const Container = () => {
    const pokemons = useSelector(selectFilteredPokemons);
    const isLoading = useSelector(selectStatus) === "loading";

    return (
        <>
            {isLoading ?
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 20 }}>
                    <CircularProgress size='100px' />
                </Box>
                :
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
                        {pokemons.length && pokemons.map((pokemon) =>
                            <Pokemon key={pokemon.id} pokemon={pokemon} />)}
                    </Grid>
                    <Pagination />
                </>
            }
        </>
    )
}

export default Container;