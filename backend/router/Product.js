import express from 'express'
import { protectedRoute } from '../middleware/protectedRoute.js'
import { createProduct, deleteProduct, getAllProduct, getProductById, updateProduct } from '../controllers/Product/Product.js'


const router = express.Router()

router.get('/all',protectedRoute,getAllProduct)
router.get('/:id',protectedRoute,getProductById)
router.post('/create',protectedRoute,createProduct)
router.put('/update/:id',protectedRoute,updateProduct)
router.delete('/delete/:id',protectedRoute,deleteProduct)

export default router