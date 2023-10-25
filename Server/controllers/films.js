import films from "../models/films.js";

export const createFilms = async (req, res) => {
    try {
        const filmName = req.body.filmName;
        const img = req.body.img;
        const genres = req.body.genres;
        const episodes = req.body.episodes;
        const category = req.body.category
        const data = await films.create({
            filmName: filmName,
            img: img,
            genres: genres,
            episodes: episodes,
            category: category
        })
        return res.status(200).json({
            message: 'Create new film success',
            data
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Can't post this video"

        });

    }
}

export const getAllFilms = async (req, res) => {
    try {
        const data = await films.find({})
        return res.status(200).json({
            message: 'this is all films',
            data: data
        })
    } catch (error) {
        return res.status(400).json({
            message: 'Failed',
            error: error.message
        })
    }
}

export const updateFilms = async (req, res) => {
    try {
        const data = await films.updateMany({
            category: { $exists: false }
        },
            { $set: { category: [] } });
        if (data) {
            return res.status(200).json({
                message: 'Success'
            })
        }
        if (!data) {
            return res.status(200).json({
                message: 'Không có bộ phim nào cần update'
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
}