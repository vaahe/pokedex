import React, { useEffect, useState } from 'react';

import "./Types.css";
import { Box, Typography } from '@mui/material';

export const Types = ({ pokemon }) => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        if (pokemon.types) {
            setTypes(pokemon.types);
        }
    }, [pokemon.types])

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
            {types.length && types.map(slot => <Typography variant="h5" component="h2" key={slot.type.url} className={slot.type.name}>{slot.type.name}</Typography>)
            }
        </Box >
    )
}