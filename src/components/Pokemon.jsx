import React from 'react';

const Pokemon = ({ pokemon }) => {
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    return (
        <div>
            <h2>{name}</h2>
            {/* <h2>{pokemon.additionalData.id}</h2> */}
            {/* <img src={pokemon.additionalInfo.sprites.front_default} alt={pokemon.name} /> */}
        </div>
    )
}

export default Pokemon;
