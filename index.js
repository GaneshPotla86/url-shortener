const express =require('express')
const app=express()
const urlRoute=require('./routes/url')
const port=8001
const URL=require('./models/url')
//connecting MongoDB
const {connectDB}=require('./connection')
connectDB("mongodb://127.0.0.1:27017/url-shortener").then(()=>{
    console.log("Connected to MongoDB")
})
app.use(express.json())
app.use('/url', urlRoute)

app.get('/:shortId',async(req,res)=>{
    const shortId=req.params.shortId
    const entry=await URL.findOneAndUpdate({
        shortId
    },{$push:{
        visitHistory:{timestamp:Date.now()},
    },
})
    res.redirect(entry.redirectURL)
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})