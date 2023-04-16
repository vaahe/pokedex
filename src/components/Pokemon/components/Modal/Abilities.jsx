import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

export const Abilities = ({ pokemon }) => {
    const [abilities, setAbilities] = useState([]);

    const getAbilities = () => {
        setAbilities(pokemon.abilities);
    }

    useEffect(() => {
        getAbilities();
    }, []);

    return (
        <Box component="div">
            <Typography variant='h5'>Abilities</Typography>
            <Box>
                {abilities && abilities.map(ability =>
                    <Typography component="h3" variant="h6">{ability.ability.name}</Typography>
                )}
            </Box>
        </Box>
    )
}
