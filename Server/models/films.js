import mongoose from "mongoose";

const filmsSchema = new mongoose.Schema({
    filmName: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true
    },
    category: [{
        type: String
    }],
    genres: [{
        type: String
    }],
    episodes: {
        type: Number
    }
},
    { timestamps: true })

export default mongoose.model("films", filmsSchema)