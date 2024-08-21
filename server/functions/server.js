const express = require("express");
const cors = require("cors");
const router = require("./router");  
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(router);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/data", (req, res) => {
  res.send("Data received");
});

module.exports = app;