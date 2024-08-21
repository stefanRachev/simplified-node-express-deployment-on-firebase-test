const express = require("express");
const router = express.Router();

const testControllers = require("./testControllers");
const anotherController = require("./anotherController");
const taskController = require("./taskController");

router.get("/data", testControllers.getData);
router.post("/data", testControllers.postData);
router.get("/another", anotherController.getAnotherData);
router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getAllTasks);

module.exports = router;
