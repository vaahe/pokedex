import React from 'react';

import { Stats } from './components/Stats';
import { Types } from './components/Types';
import { Abilities } from './components/Abilities';

import ScaleIcon from '@mui/icons-material/Scale';
import HeightIcon from '@mui/icons-material/Height';
import { Box, Button, Typography, Modal } from '@mui/material';


export const PokemonModal = ({ open, handleClose, pokemon }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', height: '60%', width: '60%', transform: 'translate(-50%, -50%)', bgcolor: 'white', boxShadow: '24', p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h2" sx={{ mr: 2 }}>ID {pokemon.id}</Typography>
                        <Typography variant="h2" sx={{ ml: 2, textTransform: 'capitalize' }}>
                            {pokemon.name}
                        </Typography>
                    </Box>
                    <Button onClick={() => handleClose()}>X</Button>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box
                        component="img"
                        src={pokemon.sprites.other.dream_world.front_default}
                        alt={pokemon.name}
                        sx={{ width: '25%', height: '25%' }}
                    />
                    <Box sx={{ backgroundColor: "rgb(117 173 230)", borderRadius: '10px', display: 'flex', justifyContent: "space-between", width: '100%', p: 1 }}>
                        <Stats pokemon={pokemon} />
                        <Abilities pokemon={pokemon} />
                        <Types pokemon={pokemon} />
                        <Box component="div">
                            <Typography component="span" variant="h5">Other</Typography>
                            <Typography component="p" variant="h6" sx={{ mt: 2, display: 'flex', alignItems: "center" }} title="Weight">
                                <ScaleIcon />
                                {pokemon.weight}
                            </Typography>
                            <Typography component="p" variant="h6" sx={{ display: 'flex', alignItems: "center" }} title="Height">
                                <HeightIcon sx={{ fontSize: '28px' }} />
                                {pokemon.height}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
}
