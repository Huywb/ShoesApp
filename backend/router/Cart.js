

import express from 'express'
import { protectedRoute } from '../middleware/protectedRoute.js'
import { createCart, getAllCart, getCartById } from '../controllers/Cart/CartController.js'


const router = express.Router()

router.get('/',protectedRoute,getAllCart)
router.get('/:id',protectedRoute,getCartById)
router.post('/create',protectedRoute,createCart)


export default router