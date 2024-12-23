const express=require('express')
const dotenv=require('dotenv')
const mongoose=require("mongoose")
const bodyParser=require('body-parser')
const routes=require('./routers/studentRoutes')
const app=express()
dotenv.config()
mongoose.connect(process.env.URI)
.then(()=>{
    console.log("DB connected")
})
.catch((err)=>{
    console.log("Error",err)
})
app.use(bodyParser.json())
app.use('/student',routes)
app.listen(5050,()=>{
    console.log("Server Started")
})
