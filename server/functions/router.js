const express = require("express");
const router = express.Router();

const testControllers = require("./testControllers");
const anotherController = require("./anotherController");


router.get("/data", testControllers.getData);
router.post("/data", testControllers.postData);
router.get("/another", anotherController.getAnotherData);

module.exports = router;
