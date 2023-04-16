import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncPokemons, fetchNewGroup, selectFilteredPokemons, selectPokemons, selectPokemonsLength } from 'redux/features/pokemons/pokemonsSlice';


export const Pagination = () => {
    const [dataLength, setDataLength] = useState(0);
    const [pagesCount, setPagesCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(15);

    const limit = useRef(15);
    const offset = useRef(0);

    const dispatch = useDispatch();
    const pokemonsLength = useSelector(selectPokemonsLength);

    useEffect(() => {
        console.log(pokemonsLength);
        debugger;
        if (pokemonsLength) {
            dispatch(fetchNewGroup({ limit: limit.current, offset: offset.current }));
            offset.current = offset.current + limit.current;
            console.log("barlus dzez");
        }
        console.log("initial load")
    }, [pokemonsLength])

    const prevPage = async () => {
        if (currentPage === 1) {
            return false;
        }

        let newOffset = offset.current - itemsPerPage;
        offset.current = newOffset;

        setCurrentPage(currentState => currentState - 1);
        // dispatch(fetchNewGroup({ limit: itemsPerPage, offset: newOffset }));
    }

    const nextPage = () => {
        if (currentPage === dataLength) {
            return false;
        }

        let newOffset = offset.current + itemsPerPage;
        offset.current = newOffset;

        // setOffset(newOffset);

        setCurrentPage(currentState => currentState + 1);
        // dispatch(fetchNewGroup({ limit: itemsPerPage, offset: newOffset }));
    }

    const handleChange = (e) => {
        setItemsPerPage(e.target.value);
    }

    // useEffect(() => {
    //     console.log(pokemons);
    //     // getDataLength();
    // }, []);

    // useEffect(() => {
    //     window.scrollTo({
    //         behavior: "smooth",
    //         top: "0px",
    //     });
    // }, [currentPage]);

    // useEffect(() => {
    //     dispatch(fetchAsyncPokemons({ limit: itemsPerPage, offset: 0 }));
    //     setPagesCount(() => parseInt(Math.ceil(dataLength / itemsPerPage)));
    // }, [dataLength, dispatch, itemsPerPage]);

    return (
        <>
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
        </>
    )
}
