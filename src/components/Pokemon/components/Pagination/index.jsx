import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewGroup, selectFilters, selectPokemonsLength, selectPrefiltered } from 'redux/features/pokemons/pokemonsSlice';

import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';


export const Pagination = () => {
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(15);

    const dispatch = useDispatch();

    const filters = useSelector(selectFilters);
    const prefiltered = useSelector(selectPrefiltered);
    const pokemonsLength = useSelector(selectPokemonsLength);

    const pagesCount = prefiltered ? Math.ceil(prefiltered / itemsPerPage) : Math.ceil(pokemonsLength / itemsPerPage);

    const handleChange = (e) => {
        setItemsPerPage(e.target.value);
    }

    const prevPage = () => {
        if (currentPage === 1) {
            return false;
        }

        let newOffset = offset - itemsPerPage;
        setOffset(newOffset);
        setCurrentPage(currentState => currentState - 1);
        dispatch(fetchNewGroup({ limit: itemsPerPage, offset }));
    }

    const nextPage = () => {
        if (currentPage === pagesCount) {
            return false;
        }

        let newOffset = offset + itemsPerPage;
        setOffset(newOffset);

        setCurrentPage(currentState => currentState + 1);
        dispatch(fetchNewGroup({ limit: itemsPerPage, offset }));
    }


    useEffect(() => {
        window.scrollTo({
            behavior: "smooth",
            top: "0px",
        });
    }, [currentPage]);

    useEffect(() => {
        dispatch(fetchNewGroup({ limit: itemsPerPage, offset }));
    }, [dispatch, itemsPerPage, offset, filters]);


    return (
        <Box compnent="div" sx={{px: 12}}>
            <FormControl sx={{ width: '10%' }}>
                <InputLabel id="demo-simple-select-label">Items Per Page</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={itemsPerPage}
                    label="itemsPerPage"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                </Select>
            </FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button onClick={prevPage}>Prev</Button>
                <Box component="span" sx={{ fontSize: '24px' }}>{currentPage} of {pagesCount}</Box>
                <Button onClick={nextPage}>Next</Button>
            </Box>
        </Box>
    )
}