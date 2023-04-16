import React from 'react';

import "./Image.module.css";

export const Image = ({ pokemon }) => {
    const imgUrl = pokemon.sprites.other.dream_world.front_default;

    return (
        <img src={imgUrl} alt={pokemon.name} />
    )
}