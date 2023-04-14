import React from 'react';
import { Id } from './components/Id';
import { Image } from './components/Image';
import { Types } from './components/Types';

import './index.module.css';
import { Grid, Paper } from '@mui/material';


const Pokemon = ({ pokemon }) => {
    return (
        <Grid item md={4} key={pokemon.id}>
            <Paper sx={{ boxShadow: 'rgba(0, 0, 0, 0.25) 1px 2px 8px', borderRadius: '10px' }}>
                <h2>{pokemon.name}</h2>
                <Image pokemon={pokemon} />
                <Id pokemon={pokemon} />
                <Types pokemon={pokemon} />
            </Paper>
        </Grid >
    )
}

export default Pokemon;
