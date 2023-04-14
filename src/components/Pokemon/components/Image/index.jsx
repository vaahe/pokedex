import React, { useEffect, useState } from 'react';

import "./Image.module.css";

export const Image = ({ pokemon }) => {
    const [imgUrl, setImgUrl] = useState("");

    useEffect(() => {
        const getImage = async (id) => {
            if (id < 100) {
                if (id < 10) {
                    id =  `0${id}`;
                }
                id = `0${id}`;
            }
            
            const res = await fetch(`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`);
            const imgUrl = (res.url);
            setImgUrl(imgUrl);
        }

        getImage(pokemon.id);
    }, [pokemon.id]);

    return (
        <img src={imgUrl} alt={pokemon.name} />
    )
}