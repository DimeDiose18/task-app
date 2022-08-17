import React from "react";
import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task({ text, completed }) {
  return (
    <div className={completed ? 'container-task completed' : 'container-task'}>
      <div className='text-task'> 
        {text}
      </div>
      <div className='container-icons-task'>
        <AiOutlineCloseCircle className='icon-task' />
      </div>
    </div>
  );
}

export default Task;