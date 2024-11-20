import express from 'express'
import { protectedRoute } from '../middleware/protectedRoute.js'
import { createCategory, deleteCategory, getAllCategory, getCategoryById, updateCategory } from '../controllers/Category/Category.js'


const router = express.Router()

router.get('/all',protectedRoute,getAllCategory)
router.get('/:id',protectedRoute,getCategoryById)
router.post('/create',protectedRoute,createCategory)
router.put('/update/:id',protectedRoute,updateCategory)
router.delete('/delete/:id',protectedRoute,deleteCategory)

export default router