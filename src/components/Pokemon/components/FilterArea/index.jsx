import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export const FilterArea = () => {
    const [pokemonName, setPokemonName] = useState([]);
    const [pokemons, setPokemons] = useState([]);


    // const getPokemons = async (limit = 20, offset = 0) => {
    //     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    //     const data = await res.json();
    //     setPokemons(currentState => [...currentState, data.results]);

    //     if (Boolean(data.next)) {
    //         console.log(234);
    //         offset += 20;
    //         getPokemons(20, offset);
    //     }
    //     console.log(pokemons);
    // }

    const types = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting',
        'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison',
        'Psychic', 'Rock', 'Steel', 'Water'];

    const handleChange = (event) => {
        const { target: { value } } = event;
        setPokemonName(typeof value === 'string' ? value.split(',') : value);

        console.log(event.target.value);
    };

    const handleSearch = (event) => {
        console.log(event.target.value);
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
                    onChange={(e) => console.log(e.target.value)}
                />
            </Box>
            <FormControl sx={{ width: '20%' }}>
                <InputLabel id="demo-multiple-name-label">Select Type</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={pokemonName}
                    label="Select Type"
                    onChange={handleChange}
                >
                    {types.map(type => <MenuItem value={type} key={type}>{type}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
}