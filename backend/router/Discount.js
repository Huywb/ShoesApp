



import express from 'express'
import { protectedRoute } from '../middleware/protectedRoute.js'
import { createDiscount, getAllDiscount } from '../controllers/Discount/Discount.js'


const router = express.Router()

router.post("/create",protectedRoute,createDiscount)
router.get("/",protectedRoute,getAllDiscount)


export default router