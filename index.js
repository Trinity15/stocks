const connection = require("mongodb");
const List = require("./model/listmodel");
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const bodyparser = require("body-parser");
const axios = require("axios");
const responseTime = require("response-time");
app.use(responseTime());
app.use(cors());
var db;
var client = new connection.MongoClient("mongodb://localhost:27017/");

//GET and POST on MONGODB

//Getting data from DB
app.get("/", (req, res) => {
  List.find({})
    .then((data) => {
      res.json({ found: true, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.json({ found: false, data: null });
    });
});

// //axios getting data from api
const params = ["IBM", "AAP", "AAPL", "GOOG"];

async function makeGetRequest() {
  let res = await axios.get(url);
  let data = res.data;
  console.log(data);
  await addStock(data);
}

for (let index = 0; index < params.length; index++) {
  var url =
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&apikey=R7LOEQ2AV77WGZBJ&symbol=" +
    params[index];
  makeGetRequest();
}

async function addStock(data) {
  try {
    await client.connect();
    console.log("Database created!");
    db = client.db("Stock");
    const collection = db.collection("lists");
    await collection.insertOne(data);
  } catch (err) {
    console.log(err);
  }
}

app.post("/", (req, res) => {
  new List(req.body)
    .save()
    .then((v_data) => {
      console.log(v_data);
      res.json({ save: true });
      clearCache(v_data.List);
    })
    .catch((err) => {
      console.log(err);
      res.json({ save: false });
      sdlk;
    });
});

//frontend

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

var port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
