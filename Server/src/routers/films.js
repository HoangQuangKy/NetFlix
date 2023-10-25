import express from 'express'
import { createFilms, getAllFilms, getUniqueCategories, updateFilms } from '../controllers/films.js';

const routerFilms = express.Router();

routerFilms.post('/createFilms', createFilms)
routerFilms.get('/getAllFilms', getAllFilms)
routerFilms.put('/update', updateFilms)
routerFilms.get('/category', getUniqueCategories)

export default routerFilms