import express from 'express'
import dotenv from 'dotenv'
import mongoose from "mongoose"
import router from "./routers/index.js"
import cors from 'cors'

dotenv.config()

const { port } = process.env

const app = express()
app.use(cors());
app.use(express.json());


app.use("/", router)


mongoose.connect('mongodb+srv://kyhoang487:PdYWdU317mjKoMAj@cluster0.1z0vuka.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected with MongoDB!'));
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})