exports.getAnotherData = (req, res) => {
  console.log("GET /another endpoint hit");
  res.send("This is data from another controller!");
};