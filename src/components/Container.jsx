import React from 'react';
import { useSelector } from 'react-redux';


import { Pokemon } from './Pokemon';
import { Pagination } from './Pokemon/components/Pagination';
import { FilterArea } from './Pokemon/components/FilterArea';
import { selectFilteredPokemons, selectStatus } from '../redux/features/pokemons/pokemonsSlice';

import { Box, CircularProgress, Grid } from '@mui/material';


export const Container = () => {
    const isLoading = useSelector(selectStatus);
    const filteredPokemons = useSelector(selectFilteredPokemons);


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
                        {!!filteredPokemons.length && filteredPokemons.map((pokemon) =>
                            <Pokemon key={pokemon.id} pokemon={pokemon} />)
                        }
                    </Grid>
                    <Pagination />
                </>
            }
        </>
    )
}