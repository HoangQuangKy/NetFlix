import { configureStore } from '@reduxjs/toolkit'
import filmsReducer from '../slice/film.slice.js'
import formReducer from '../slice/user.slice.js'
export const store = configureStore({
    reducer: {
        films: filmsReducer,
        form: formReducer,
    },
})