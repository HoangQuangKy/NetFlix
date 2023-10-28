import films from "../models/films.js";

export const createFilms = async (req, res) => {
    try {
        const filmName = req.body.filmName;
        const img = req.body.img;
        const genres = req.body.genres;
        const episodes = req.body.episodes;
        const category = req.body.category;
        const decs = req.body.decs;
        const actors = req.body.actors;
        const acceptAge = req.body.acceptAge;

        const data = await films.create({
            filmName: filmName,
            img: img,
            genres: genres,
            episodes: episodes,
            category: category,
            decs: decs,
            actors: actors,
            acceptAge: acceptAge
        })
        return res.status(200).json({
            message: 'Create new film success',
            data: data
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
            decs: { $exists: false }
        },
            {
                $set: {
                    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    actors: ["Leesin", "Yasuo", "Zed"],
                    acceptAge: 18
                }
            });
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
export const getUniqueCategories = async (req, res) => {
    try {
        const uniqueCategories = await films.distinct('category')
        return res.status(200).json({
            message: uniqueCategories
        })
    } catch (error) {
        console.error('Lỗi:', error);
        return [];
    }
}