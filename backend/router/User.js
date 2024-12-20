import express from 'express'
import { login, register } from '../controllers/User/User.js'
import { protectedRoute } from '../middleware/protectedRoute.js'

const router = express.Router()

router.post('/register',register)
router.post('/login',login)

export default router