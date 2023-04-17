import { Box } from '@mui/material';
import React from 'react';


export const Image = ({ pokemon }) => {
    const imgUrl = pokemon.sprites.other.dream_world.front_default;

    return (
        <Box component="img" src={imgUrl} alt={pokemon.name} sx={{ width: "150px", height: "150px" }} />
    )
}