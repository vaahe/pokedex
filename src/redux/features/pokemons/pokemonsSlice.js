import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../../config";

const initialState = {
    pokemons: [],
    filteredPokemons: [],
    status: "idle",
    message: "",
};

const fetchAsyncAdditionalData = async ({ url }) => {
    const res = await fetch(url);
    const data = await res.json();

    return data;
}

export const fetchAsyncPokemons = createAsyncThunk(
    'pokemons/fetchAsyncPokemons',
    async (
        // { limit = 15, offset = 0 }
    ) => {
        const res = await fetch(`${config.baseApi}/?limit=1281`);
        const data = await res.json();
        console.log(data);
        debugger;

        // const dataWithDetails = await Promise.all(data.results.map(async ({ url }) =>
        //     await fetchAsyncAdditionalData({ url })
        // ));
        // return dataWithDetails;

        return data.results;
    }
)


export const fetchNewGroup = createAsyncThunk(
    'pokemons/fetchNewGroup',
    async ({ limit = 15, offset = 0 }, { getState }) => {
        const state = getState();
        console.log(offset, limit);
        const pokemonsGroup = state.pokemons.slice(offset, offset + limit);
        console.log(pokemonsGroup);
        debugger;
        const pokemonsGroupData = await Promise.all(pokemonsGroup.map(async ({ url }) =>
            await fetchAsyncAdditionalData({ url })
        ));

        return pokemonsGroupData;
    }
)




export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: initialState,
    reducers: {},
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
            .addCase(fetchNewGroup.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchNewGroup.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.filteredPokemons = action.payload;
            })
            .addCase(fetchNewGroup.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    }
});

export const selectFilteredPokemons = state => state.pokemons.filteredPokemons
export const selectPokemonsLength = state => state.pokemons.pokemons.length;
export const selectPokemons = state => state.pokemons.pokemons;
export const selectStatus = state => state.pokemons.status;

export default pokemonsSlice.reducer;