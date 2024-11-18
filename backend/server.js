import express from 'express'


const app = express()

const PORT = 9090

app.get('/api',(req,res)=>{
    res.json({message:"This is backend"})
})




app.listen(PORT,()=>{
   console.log(`Server is running at ${PORT}`) 
})