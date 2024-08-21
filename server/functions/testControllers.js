exports.getData = (req, res) => {
  console.log("GET /data endpoint hit");
  res.send("This is data from the example controller!");
};

exports.postData = (req, res) => {
  console.log("POST /data endpoint hit");
  res.send("Data has been posted to the example controller!");
};