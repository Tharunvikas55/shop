const express = require("express");
const mongoose = require("mongoose");

//DB configuration
const db = require("./config/keys").MongoURI;

const app = express();

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("connected successfully");
});

app.listen(4000);
console.log("Application is running is port 4000 or http://localhost:4000");
