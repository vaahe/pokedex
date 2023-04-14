import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const FilterArea = () => {
    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '30%' }, px: 12, pt: 6 }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="filled-required"
                label="Search pokemon by name"
                variant="filled"
            />
        </Box>
    );
}