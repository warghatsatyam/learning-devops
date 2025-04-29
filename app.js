const express = require('express')

const app = express()

app.get("/",(req,res)=>{
    res.send("Hello World How are you");
})


module.exports = app;