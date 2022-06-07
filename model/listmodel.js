
const mongoose = require("mongoose");
const { stringify } = require("querystring");

var ListSchema = new mongoose.Schema({
    symbol: {type: String} ,
    open: {type: String} ,
    high: {type: String} ,
    low: {type: String} ,
    price: {type: String} ,
    volume: {type: String} ,
    latestDay: {type: String} ,
    previousClose: {type: String} ,
    change: {type: String} ,
    changePercent: {type: String}   
}
)
const List = mongoose.model("list", ListSchema);


module.exports = List;