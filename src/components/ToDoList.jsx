import React from "react";
import "../stylesheets/ToDoList.css";
import TaskForm from "./TaskForm";

function ToDoList() {
  return (
    <>
      <TaskForm />
      <div className="container-to-do-list">LISTAAA</div>
    </>
  );
}
