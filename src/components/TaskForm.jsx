import React, { useState } from "react";
import '../stylesheets/TaskForm.css'
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };
  const handleSend = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    };

    props.onSubmit(newTask);
  };



  return (
    <form 
    onSubmit={handleSend}
    className="task-form">
      <input
        className="input-task"
        type="text"
        placeholder="Write a task"
        name="text"
        onChange={ handleChange }
      />
      <button className="button-task">
      Add Task
      </button>
    </form>
  );
}


export default TaskForm;