const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Stock", (error)=>{
if(!error)
console.log("Success");
else
console.log("error");
});

const List = require("../model/listmodel");