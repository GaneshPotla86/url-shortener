const express =require('express')
const app=express()
const urlRoute=require('./routes/url')
const port=8001
//connecting MongoDB
const {connectDB}=require('./connection')
connectDB("mongodb://127.0.0.1:27017/url-shortener").then(()=>{
    console.log("Connected to MongoDB")
})
app.use(express.json())
app.use('/url', urlRoute)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})