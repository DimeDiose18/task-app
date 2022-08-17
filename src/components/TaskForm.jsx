import React from "react";
import '../stylesheets/TaskForm.css'

function TaskForm(props) {
  return (
    <form className="task-form">
      <input
        className="input-task"
        type="text"
        placeholder="Write a task"
        name="text"
      />
      <button className="button-task">Add Task</button>
    </form>
  );
}


export default TaskForm;