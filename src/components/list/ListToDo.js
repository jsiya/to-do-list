import './ListStyles.css';
import React, { useState, useEffect } from 'react';
import trash from '../../assets/images/icons8-trash-96.png'
import edit from '../../assets/images/icons8-edit-100.png'

function ListToDo({ tasks, removeTask, markTaskAsCompleted }){

    const handleRemoveTask = (event, taskName) => {
        event.stopPropagation(); 
        removeTask(taskName);
    };

    return (
        <div className="tasks">
        <ul id="task-list" type="none">
            {tasks.map((task, index) => (
                    <li key={index} className={task.isCompleted ? 'task checked' : 'task'}  onClick={() => markTaskAsCompleted(task.taskName)}>
                        {task.taskName} - {task.dueDate}
                        <button className="remove-btn" onClick={(event) => handleRemoveTask(event, task.taskName)}>
                            <img src={trash}/>
                        </button>
                    </li>
                ))}
        </ul>
    </div>
    );
    
}

export default ListToDo