import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { config } from "../../../config";

const initialState = {
    message: "",
    pokemons: [],
    status: "idle",
    prefiltered: 0,
    filteredPokemons: [],
    filters: {
        name: "",
        types: []
    }
};

const fetchAsyncAdditionalData = async ({ url }) => {
    const res = await fetch(url);
    const data = await res.json();

    return data;
}

export const fetchAsyncPokemons = createAsyncThunk(
    'pokemons/fetchAsyncPokemons',
    async () => {
        const res = await fetch(`${config.baseApi}/?limit=1281`);
        const data = await res.json();

        return data.results;
    }
)


export const fetchNewGroup = createAsyncThunk(
    'pokemons/fetchNewGroup',
    async ({ limit = 15, offset = 0 }, { getState }) => {
        const state = getState();
        const filters = selectFilters(state);
        const pokemons = selectPokemons(state);

        const prefiltered = pokemons.filter(pokemon => filters.name ? pokemon.name.startsWith(filters.name) : pokemon);

        const pokemonsGroup = prefiltered.slice(offset, offset + limit);
        const pokemonsGroupData = await Promise.all(pokemonsGroup.map(async ({ url }) =>
            await fetchAsyncAdditionalData({ url })
        ));

        return [pokemonsGroupData, prefiltered.length];
    }
)


export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
        setFilterTypes: (state, action) => {
            state.filters.types = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncPokemons.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchAsyncPokemons.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.pokemons = action.payload;
            })
            .addCase(fetchAsyncPokemons.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });

        builder
            .addCase(fetchNewGroup.fulfilled, (state, action) => {
                state.filteredPokemons = action.payload[0];
                state.prefiltered = action.payload[1];
            })
            .addCase(fetchNewGroup.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
});

export const { setFilters, setFilterTypes } = pokemonsSlice.actions;


export const selectFilters = state => state.pokemons.filters;
export const selectPokemons = state => state.pokemons.pokemons;
export const selectPrefiltered = state => state.pokemons.prefiltered;
export const selectStatus = state => state.pokemons.status === "loading";
export const selectPokemonsLength = state => state.pokemons.pokemons.length;
export const selectFilteredPokemons = state => state.pokemons.filteredPokemons;

export default pokemonsSlice.reducer;