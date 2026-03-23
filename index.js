const express =require('express')
const app=express()
const cookieParser=require('cookie-parser')
const {restrictToLoggedinUserOnly}=require('./middlewares/auth')

const port=8001
const URL=require('./models/url')
const path=require('path')

const urlRoute=require('./routes/url')
const staticRoute=require('./routes/staticRouter')
const userRoute=require('./routes/user')

//connecting MongoDB
const {connectDB}=require('./connection')
connectDB("mongodb://127.0.0.1:27017/url-shortener").then(()=>{
    console.log("Connected to MongoDB")
})
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.use('/url',restrictToLoggedinUserOnly, urlRoute)
app.use('/user',userRoute)
app.use('/', staticRoute)

app.set('view engine', 'ejs')
app.set('views',path.resolve('./views'))
app.get('/test',async (req,res)=>{
    const allURLs=await URL.find({})
    return res.render('home',{
        urls:allURLs,
    })
})

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