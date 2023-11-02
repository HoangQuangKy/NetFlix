import express from 'express'
import authentication from '../middlewares/index.js'
import { Login, createNewUser, authentications } from '../controllers/user.js'
const routerUser = express.Router()


routerUser.post('/register', createNewUser)
routerUser.post('/login', Login)
routerUser.get("/chek", authentications)

routerUser.get('/protected', authentication);






export default routerUser