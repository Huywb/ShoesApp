import express from 'express'
import dotenv from 'dotenv'
import { ConnectDB } from './utils/DBConnect.js'


dotenv.config()
const app = express()


const PORT = 9090

app.get('/api',(req,res)=>{
    res.json({message:"This is backend"})
})




app.listen(PORT,()=>{
    ConnectDB()
   console.log(`Server is running at ${PORT}`) 
})