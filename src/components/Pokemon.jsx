import React from 'react';

const Pokemon = ({ pokemon }) => {
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}

export default Pokemon;
