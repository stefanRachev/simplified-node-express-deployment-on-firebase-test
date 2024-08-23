const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },

  status: {
    type: String,
    enum: ["Incomplete", "In Progress", "Complete"],
    required: true,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
