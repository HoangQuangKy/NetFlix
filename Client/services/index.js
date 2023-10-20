import axios from "axios";

const filmInstance = axios.create({
    baseURL: "http://localhost:8000",
});

export const getFilm = () => {
    return filmInstance.get("/film/getAllFilms")
}