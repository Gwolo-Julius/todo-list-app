import React, { useState } from "react";

function TaskItem({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(task.name);
  const [updatedDescription, setUpdatedDescription] = useState(
    task.description
  );
  
// This component handles individual tasks and allows users to mark a task as completed or edit/delete it.

  const toggleCompletion = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTask({ ...task, name: updatedName, description: updatedDescription });
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button className="save_btn" type="submit">Save</button>
        </form>
      ) : (
        <>
          <div onClick={toggleCompletion}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
          </div>
          <button className="edit_btn" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="delete_btn" onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TaskItem;
