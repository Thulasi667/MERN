const studentcon=require('../control/studentControl')
const express=require('express')
const routes=express.Router()
routes.post('/add-student',studentcon.insertStudent)
routes.get('/get-student',studentcon.insertStudent)
routes.put('/updateStudent/:id',studentcon.UpdateStudent)
module.exports=routes