import React from 'react';
import { Typography } from '@mui/material';

export const Id = ({ pokemon }) => {
    let { id } = pokemon;

    const getId = (id) => {
        if (id < 1000) {
            if (id < 10) {
                return `#000${id}`;
            }

            if (id < 100) {
                return `#00${id}`;
            }

            return `#0${id}`;
        }

        return `#${id}`;
    }
    return (
        <Typography component="h4" variant="h5" sx={{ color: 'rgb(45, 64, 23)' }}>{getId(id)}</Typography>
    )
}
