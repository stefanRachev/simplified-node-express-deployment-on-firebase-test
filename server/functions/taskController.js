const Task = require("./models/Task");

exports.createTask = async (req, res) => {
  try {
    const { title, description, status, priority } = req.body;
    const newTask = new Task({ title, description, status, priority });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
