const express = require("express");
const jwt = require("jsonwebtoken");
const app = new express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.listen(port,()=>{
    console.log("listening on ",port)
})
app.get('/', (req, res)=>{
    console.log("hello world")
    res.send("hello world")
})


app.post("/login",(req, res)=>{
    const token= jwt.sign(req.body.UserID,"secretKey")
    res.json({
        "token":token,
        "status":"Good"
    })
})
