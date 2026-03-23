const express=require('express')
const URL=require('../models/url')

const route=express.Router()

route.get('/',async (req,res)=>{
    const allURLs=await URL.find({})
    return res.render('home',{urls:allURLs,})
})

route.get('/signup',(req,res)=>{
    return res.render('signup')
})

route.get('/login',(req,res)=>{
    return res.render('login')
})

module.exports=route