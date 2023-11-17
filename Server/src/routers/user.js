import express from 'express'
import { Login, authentication, createNewUser, getUserPaging, updateUser } from '../controllers/user.js'
const routerUser = express.Router()


routerUser.post('/register', createNewUser)
routerUser.post('/login', Login)
routerUser.get('/check', authentication)
routerUser.get('/getPagingUser', getUserPaging)
routerUser.put('/:id', updateUser)




export default routerUser