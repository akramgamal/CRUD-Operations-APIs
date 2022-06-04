const express=require('express')
app=express()
app.use(express.json())

app.use(require("../Assignment 4/users/routes/users"))
app.use(require("../Assignment 4/posts/routes/posts"))
app.listen(5000,()=>{
    console.log("server is running")
})