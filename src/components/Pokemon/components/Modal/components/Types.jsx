import React, { useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';


export const Types = ({ pokemon }) => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        if (pokemon.types) {
            setTypes(pokemon.types);
        }
    }, [pokemon.types])

    return (
        <Box>
            <Typography variant='h5' sx={{ mb: 2 }}>Types</Typography>
            {types.length && types.map(slot =>
                <Typography variant="h5" component="h3" key={slot.type.url} className={slot.type.name} sx={{ my: 1, textTransform: "capitalize" }}>
                    {slot.type.name}
                </Typography>)
            }
        </Box >
    )
}