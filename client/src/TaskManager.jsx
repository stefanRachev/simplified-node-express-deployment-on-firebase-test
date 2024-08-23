import { useState, useEffect } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    status: "Incomplete",
    priority: "Low",
  });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/tasks`)
      .then((res) => res.json())
      .then((result) => {
        setTasks(result);
      });
  }, []);

  const createTask = () => {
    fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => {
        console.log("Response status:", response.status);
        return response.text();
      })
      .then((text) => {
        console.log("Response text:", text);
        try {
          const data = JSON.parse(text);
          setTasks([...tasks, data]);
          setNewTask({
            title: "",
            description: "",
            status: "Incomplete",
            priority: "Low",
          });
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      })
      .catch((error) => console.error("Error creating task:", error));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.description} - {task.status} - {task.priority}
          </li>
        ))}
      </ul>
      <h2>Create a new task</h2>
      <input
        type="text"
        placeholder="Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newTask.description}
        onChange={(e) =>
          setNewTask({ ...newTask, description: e.target.value })
        }
      />
      <select
        value={newTask.status}
        onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
      >
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
      </select>
      <select
        value={newTask.priority}
        onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={createTask}>Create Task</button>
    </div>
  );
};

export default TaskManager;
