import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

const PokemonWrapper = () => {
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemons = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await res.json();
        setPokemons(data.results);
    }

    const fetchPokemonData = async () => {
        if (pokemons.length) {
            pokemons.forEach(async pokemon => {
                const additionalInfo = await fetch(pokemon.url);
                const data = await additionalInfo.json();
                pokemon['additionalInfo'] = data;
            });
        }
    }

    useEffect(() => {
        fetchPokemons();
        fetchPokemonData();
        console.log(pokemons[0].additionalInfo)
    }, []);


    return (
        <div>
            {pokemons.length && pokemons.map(pokemon => <Pokemon pokemon={pokemon} />)}
        </div>
    )
}

export default PokemonWrapper;