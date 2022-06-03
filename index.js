const connection = require("./mongodb");
const express = require("express");
const app = express();
const path = require("path");
const expressHandlerbars = require("express3-handlebars");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({
    extended: true
}));

app.get("/", (req,res)=>{j
    res.send("hello world")
})

app.listen("3000",()=>{
    console.log("server started");  
})