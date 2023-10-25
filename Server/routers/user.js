import express from 'express'
import { createNewUser } from '../src/controllers/user.js'

const routerUser = express.Router()

routerUser.post('/create', createNewUser)

export default routerUser