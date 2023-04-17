import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, setFilterTypes, setFilters } from 'redux/features/pokemons/pokemonsSlice';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


export const FilterArea = () => {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);

    const types = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting',
        'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison',
        'Psychic', 'Rock', 'Steel', 'Water'];

    const handleSelector = (e) => {
        const { target: { value } } = e;
        dispatch(setFilterTypes(value));
    };

    const handleSearchInput = (e) => {
        dispatch(setFilters({ ...filters, name: e.target.value }));
    }

    return (
        <Box component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', mx: 12, mt: 6 }}>
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="filled-required"
                    label="Search pokemon by name"
                    variant="filled"
                    onChange={handleSearchInput}
                />
            </Box>
            <FormControl sx={{ width: '20%' }}>
                <InputLabel id="multiple-name-label">Select Type</InputLabel>
                <Select
                    labelId="multiple-name-label"
                    id="multiple-name"
                    multiple
                    value={filters.types}
                    label="Select Type"
                    onChange={handleSelector}
                >
                    {types.map(type => <MenuItem value={type} key={type}>{type}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
}