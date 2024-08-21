// const mongoose = require("mongoose");

// const taskSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: false,
//   },
//   dueDate: {
//     type: Date,
//     required: false,
//   },
//   status: {
//     type: String,
//     enum: ["pending", "completed"],
//     default: "pending",
//   },
//   priority: {
//     type: String,
//     enum: ["low", "medium", "high"],
//     default: "medium",
//   },
// });

// const Task = mongoose.model("Task", taskSchema);

// module.exports = Task;

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
