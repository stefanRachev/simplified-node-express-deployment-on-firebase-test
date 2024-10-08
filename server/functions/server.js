require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

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
