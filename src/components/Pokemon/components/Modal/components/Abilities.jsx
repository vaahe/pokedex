import React, { useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';


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
            <Typography variant='h5' sx={{ mb: 2 }}>Abilities</Typography>
            <Box>
                {abilities && abilities.map(slot =>
                    <Typography component="span" variant="h6" sx={{ display: "block", textTransform: "capitalize" }} key={slot.ability.name}>
                        {slot.ability.name}
                    </Typography>
                )}
            </Box>
        </Box>
    )
}
