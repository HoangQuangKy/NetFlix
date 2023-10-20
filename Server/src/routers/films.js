import express from 'express'
import { createFilms, getAllFilms, updateFilms } from '../controllers/films.js';
import router from './index.js';

const routerFilms = express.Router();

routerFilms.post('/createFilms', createFilms)
routerFilms.get('/getAllFilms', getAllFilms)
routerFilms.put('/update', updateFilms)

export default routerFilms