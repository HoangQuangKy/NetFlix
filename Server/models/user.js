import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    phonenumber: {
        type: Number
    },
    age: {
        type: Number,
        required: true,
    },
    dateOfBirth: {
        type: Date,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    auth: {
        type: String,
        default: 'customer'
    }
}, {
    timestamps: true
})

export default mongoose.model("user", userSchema)