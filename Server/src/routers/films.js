import express from 'express'
import { createFilms, getAllFilms, getFilmById, getPagingFilms, getTitle, getUniqueCategories, updateFilms } from '../controllers/films.js';

const routerFilms = express.Router();

routerFilms.post('/createFilms', createFilms)
routerFilms.get('/getAllFilms', getAllFilms)
routerFilms.put('/:id', updateFilms)
routerFilms.get('/category', getUniqueCategories)
routerFilms.get('/getPagingFilms', getPagingFilms)
routerFilms.get('/getTitle', getTitle)
routerFilms.get('/:id', getFilmById)
export default routerFilms