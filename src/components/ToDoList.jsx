import React, { useState } from "react";
import "../stylesheets/ToDoList.css";
import TaskForm from "./TaskForm";
import Task from "./Task";

function ToDoList() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    console.log(task);
    if (task.text.trim()) {
      task.text = task.text.trim();

      const taksUpdates = [task, ...tasks];
      setTasks(taksUpdates);
    }
  }

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  } 

  const completeTask = id => {
    const taksUpdates = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      } 
      return task;
    });
    setTasks(taksUpdates);
  }

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className="container-to-do-list">
        {
          tasks.map((task) => 
          <Task 
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            completeTask={completeTask}
            deleteTask={deleteTask} />
          )
        }
      </div>
    </>
  );
}

export default ToDoList;