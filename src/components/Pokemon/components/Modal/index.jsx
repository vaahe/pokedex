import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';
import { Stats } from './Stats';
import { Abilities } from './Abilities';
import { Id } from '../Id';
import { Types } from './Types';

export const PokemonModal = ({ open, handleOpen, handleClose, pokemon }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', height: '70%', width: '60%', transform: 'translate(-50%, -50%)', bgcolor: 'white', boxShadow: '24', p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Id pokemon={pokemon} />
                        <Typography variant="h3" component="h1" sx={{ ml: 2, textTransform: 'capitalize' }}>
                            {pokemon.name}
                        </Typography>
                    </Box>
                    <Button onClick={() => handleClose()}>X</Button>
                </Box>
                <Box sx={{ border: '1px solid red', display: 'flex' }}>
                    <Box
                        component="img"
                        src={pokemon.sprites.other.dream_world.front_default}
                        alt={pokemon.name}
                        sx={{ border: '1px solid red', width: '25%', height: '25%' }}
                    />
                    <Stats pokemon={pokemon} />
                    <Abilities pokemon={pokemon} />
                    <Types pokemon={pokemon} />
                    <Typography component="span">Weight {pokemon.weight}</Typography>
                    <Typography component="span">Height {pokemon.height}</Typography>
                </Box>
            </Box>
        </Modal>
    );
}
