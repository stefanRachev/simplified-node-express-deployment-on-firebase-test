const express = require("express");

const app = express();

//const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/data", (req, res) => {
  res.send("Data received");
});



// app.listen(port, () => {
//   console.log(`Server is running on PORT ${port}`);
// });

module.exports = app;
