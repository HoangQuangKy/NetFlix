import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    films: [],
    randomFilm: null
}

export const filmSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        setFilms: (state, action) => {
            state.films = action.payload.films
            state.randomFilm = action.payload.randomFilm
        }
    },
})
export const { setFilms } = filmSlice.actions

export default filmSlice.reducer