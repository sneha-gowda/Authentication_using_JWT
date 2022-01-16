const express = require("express");
const jwt = require("jsonwebtoken");
const app = new express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.listen(port,()=>{
    console.log("listening on ",port)
})
app.get('/', (req, res)=>{
    res.send("hello world")
})

app.post("/login",(req, res)=>{
    console.log(req)
    const token= jwt.sign(req.body.UserID,"secretKey")
    res.json({
        "token":token,
        "status":"Good"
    })
})

const cities=require("./CitiesJSON")

const citiesCollection =require("./DBConnect")
cities.forEach(element=>{
    doc=new citiesCollection(element)
    doc.save().then().catch(err=>{
        console.log(err)
    });
})