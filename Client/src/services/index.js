import axios from "axios";

const filmInstance = axios.create({
    baseURL: "http://localhost:8000",
});
const categoriesInstance = axios.create({
    baseURL: "http://localhost:8000"
})

export const getFilm = () => {
    return filmInstance.get("/film/getAllFilms")
}

export const getUniqueCategories = () => {
    return categoriesInstance.get("/film/category")
}

export const createNewUser = (newUser) => {
    return filmInstance.post("/user/register", newUser);
}
export const Login = (userLogin) => {
    return filmInstance.post("/user/login", userLogin)
}