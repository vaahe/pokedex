import { Typography } from '@mui/material';
import React from 'react'

export const Id = ({ pokemon }) => {
    let { id } = pokemon;

    const getId = (id) => {
        return id < 10 ? `#00${id}` : `#0${id}`;
    }
    return (
        <Typography component="h4" sx={{ color: 'rgb(45,64,23)' }}>{getId(id)}</Typography>
    )
}
