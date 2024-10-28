import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

// This component is for adding and editing tasks. It includes validation for the task name and description fields.



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName || !taskDescription) {
      alert("Please fill in all fields.");
      return;
    }

    addTask({
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      completed: false,
    });

    setTaskName("");
    setTaskDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button className="add_task_btn" type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
