import React, { useState, useEffect } from 'react';

import { Box, Typography } from '@mui/material';


export const Stats = ({ pokemon }) => {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        setStats(pokemon.stats);
    }, [pokemon.stats])

    return (
        <Box component="div">
            {stats && stats.map(statItem =>
                <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between', p: 1, ml: 2 }}>
                    <Typography sx={{ textTransform: "capitalize" }}>{statItem.stat.name}</Typography>
                    <Typography sx={{ ml: 4, fontWeight: "700" }}>{statItem.base_stat}</Typography>
                </Box>
            )}
        </Box>
    )
}
