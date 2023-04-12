import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    pokemons: [],
    additionalData: [],
    status: "idle",
    message: ""
};

export const fetchPokemons = createAsyncThunk(
    'pokemons/fetchPokemons',
    async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await res.json();
        return data.results;
    }
)

export const fetchAdditionalData = createAsyncThunk(
    'pokemons/fetchAdditionalData',
    async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
)

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemons.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.pokemons = state.pokemons.concat(action.payload);
            })
            .addCase(fetchPokemons.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchAdditionalData.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchAdditionalData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.additionalData.push(action.payload);
                // console.log(action.payload);
            })
            .addCase(fetchAdditionalData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

    }
});

export const selectPokemons = state => state.pokemons.pokemons;
export const selectAdditionalData = state => state.pokemons.additionalData;
export default pokemonsSlice.reducer;