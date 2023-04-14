import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncPokemons, selectPokemons } from 'redux/features/pokemons/pokemonsSlice';

export const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const pokemons = useSelector(selectPokemons);

    let offset = 0;
    const dataLength = 150;
    const itemsPerPage = 15;
    const numberOfPages = dataLength / itemsPerPage;

    const prevPage = () => {
        if (currentPage === 1) {
            return false;
        }

        dispatch(fetchAsyncPokemons({ limit: 15, offset: offset -= 15 }));
        setCurrentPage(currentState => currentState - 1);
    }

    const nextPage = () => {
        dispatch(fetchAsyncPokemons({ limit: 15, offset: offset += 15 }));
        setCurrentPage(currentState => currentState + 1);
    }

    console.log(pokemons);

    useEffect(() => {
        window.scrollTo({
            behavior: "smooth",
            top: "0px",
        });
    }, [currentPage]);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button onClick={prevPage}>Prev</Button>
            <Typography component="span">{currentPage}</Typography>
            <Button onClick={nextPage}>Next</Button>
        </Box>
    )
}
