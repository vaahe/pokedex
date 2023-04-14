import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../../config";

const initialState = {
    pokemons: [],
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
    async ({ limit = 15, offset = 0 }) => {
        const res = await fetch(`${config.baseApi}?limit=${limit}&offset=${offset}`);
        const data = await res.json();
        const dataWithDetails = await Promise.all(data.results.map(async ({ url }) =>
            await fetchAsyncAdditionalData({ url })
        ))
        return dataWithDetails;
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
            })
    }
});

export const selectPokemons = state => state.pokemons.pokemons;
export default pokemonsSlice.reducer;