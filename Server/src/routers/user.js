import express from 'express'
import { Login, authentication, createNewUser } from '../controllers/user.js'
const routerUser = express.Router()


routerUser.post('/register', createNewUser)
routerUser.post('/login', Login)

routerUser.get('/check', authentication)





export default routerUser