const express = require('express');
const router=express.Router()
const {handlegenerateNewShortURL,handleAnalytics}=require('../controllers/url')

router.post('/', handlegenerateNewShortURL)

router.get('/analytics/:shortId',handleAnalytics)

module.exports=router