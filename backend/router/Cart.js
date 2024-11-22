

import express from 'express'
import { protectedRoute } from '../middleware/protectedRoute.js'
import { getAllCart, getCartById } from '../controllers/Cart/CartController.js'


const router = express.Router()

router.get('/',protectedRoute,getAllCart)
router.get('/:id',protectedRoute,getCartById)


export default router