require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
app.get('/',(req,res)=>{
    res.send("Hello my love")
})
app.listen(process.env.PORT,()=>{
    console.log(`this app is listening on ${port}`)
})