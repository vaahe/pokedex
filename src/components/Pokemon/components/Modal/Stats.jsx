import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'

export const Stats = ({ pokemon }) => {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        setStats(pokemon.stats);
    }, [pokemon.stats])

    return (
        <Box component="div">
            {stats && stats.map(statItem =>
                <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between', border: '1px solid red', p: 1, ml: 2 }}>
                    <Typography>{statItem.stat.name}</Typography>
                    <Typography sx={{ml: 4}}>{statItem.base_stat}</Typography>
                </Box>
            )}
        </Box>
    )
}
