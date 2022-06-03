const { Decimal128 } = require("bson");
const mongoose = require("mongoose");
const { stringify } = require("querystring");

var ListSchema = new mongoose.Schema({
    name: {type: String} ,
    price: {type: Decimal128}
}
)

mongoose.model("list", ListSchema)