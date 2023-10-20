import express from 'express'
import { createNewUser } from '../controllers/user.js'

const routerUser = express.Router()

routerUser.post('/create', createNewUser)

export default routerUser