import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    films: [],
    randomFilm: null,
    categories: []
}

export const filmSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        setFilms: (state, action) => {
            state.films = action.payload.films
            state.randomFilm = action.payload.randomFilm
        },
        setCategories: (state, action) => {
            state.categories = action.payload.categories
        }
    },
})
export const { setFilms, setCategories } = filmSlice.actions

export default filmSlice.reducer