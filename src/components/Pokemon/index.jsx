import React, { useState } from 'react';

import { Id } from './components/Id';
import { Image } from './components/Image';
import { Types } from './components/Types';
import { PokemonModal } from './components/Modal';

import { Grid, Paper } from '@mui/material';

import styles from "./Pokemon.module.css";


export const Pokemon = ({ pokemon }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            {open && <PokemonModal open={open} handleClose={handleClose} handleOpen={handleOpen} pokemon={pokemon} />}
            <Grid item md={4} key={pokemon.id} sx={{ textTransform: 'capitalize' }} onClick={() => handleOpen()} >
                <Paper className={styles.pokemon} sx={{ boxShadow: 'rgba(0, 0, 0, 0.25) 1px 2px 8px', borderRadius: '10px', padding: '10px 20px' }}>
                    <h2>{pokemon.name}</h2>
                    <Image pokemon={pokemon} />
                    <Id pokemon={pokemon} />
                    <Types pokemon={pokemon} />
                </Paper>
            </Grid >
        </>
    )
}
