import { configureStore } from '@reduxjs/toolkit'
import filmsReducer from '../slice/film.slice.js'
export const store = configureStore({
    reducer: {
        films: filmsReducer,
    },
})