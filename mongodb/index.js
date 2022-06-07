const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/Stock',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection
        .once('open', ()=>console.log('connected to database'))
        .on('error',(err)=>console.log("connection to database failed!!",err))

const List = require("../model/listmodel");
