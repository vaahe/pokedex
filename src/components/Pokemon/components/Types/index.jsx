import React, { useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';

import "./Types.css";


export const Types = ({ pokemon }) => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        if (pokemon.types) {
            setTypes(pokemon.types);
        }
    }, [pokemon.types])

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
            {types.length && types.map(slot =>
                <Typography variant="h5" component="h3" key={slot.type.url} className={slot.type.name} sx={{ px: 1, mr: 1 }}>
                    {slot.type.name}
                </Typography>
            )}
        </Box >
    )
}