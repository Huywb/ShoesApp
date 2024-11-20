import express from 'express'
import dotenv from 'dotenv'
import { ConnectDB } from './utils/DBConnect.js'
import userRouter from './router/User.js'
import categoryRouter from './router/Category.js'


dotenv.config()
const app = express()


const PORT = 9090

app.get('/api/user',userRouter)
app.get('/api/category',categoryRouter)




app.listen(PORT,()=>{
    ConnectDB()
   console.log(`Server is running at ${PORT}`) 
})