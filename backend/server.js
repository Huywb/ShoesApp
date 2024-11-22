import express from 'express'
import dotenv from 'dotenv'
import { ConnectDB } from './utils/DBConnect.js'
import userRouter from './router/User.js'
import categoryRouter from './router/Category.js'
import productRouter from './router/Product.js'
import cartRoute from './router/Cart.js'
import discountRoute from './router/Discount.js'


dotenv.config()
const app = express()


const PORT = 9090

app.use('/api/user',userRouter)
app.use('/api/category',categoryRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRoute)
app.use('/api/discount',discountRoute)




app.listen(PORT,()=>{
    ConnectDB()
   console.log(`Server is running at ${PORT}`) 
})