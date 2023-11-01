import express from 'express'
import { Login, createNewUser } from '../controllers/user.js'
const routerUser = express.Router()

routerUser.post('/register', createNewUser)
routerUser.post('/login', Login)

export default routerUser