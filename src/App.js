import './App.css';
import './components/title/Title.js'
import './components/list/ListToDo.js'
import Title from './components/title/Title.js';
import ListToDo from './components/list/ListToDo.js';
import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('Fetch');
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    console.log('Saving local storage:', tasks);
    if(tasks.length > 0)
      {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
  }, [tasks]);

  const addTask = (taskName, dueDate) => {
    setTasks([...tasks, { taskName, dueDate, isCompleted: false }]); 
  };

  const removeTask = (taskName) => {
    setTasks(tasks.filter(task => task.taskName !== taskName));
  };

  const markTaskAsCompleted = (taskName) => {
    setTasks(tasks.map(task => {
      if (task.taskName === taskName) {
        if(task.isCompleted === false)
        {
          return { ...task, isCompleted: true };
        }
        else{
          return { ...task, isCompleted: false };
        }
      }
      return task;
    }));
  };

  return (
    <div className="App">
      <header>
        <p className="header-p">To-Do List</p>
      </header>
      <main>
        <Title addTask={addTask} />
        <ListToDo tasks={tasks} removeTask={removeTask} markTaskAsCompleted={markTaskAsCompleted} />
      </main>
      <footer>
      <a target="_blank" href="https://icons8.com/icon/13086/trash">Trash</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        <a target="_blank" href="https://icons8.com/icon/91310/create">Edit</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        <a target="_blank" href="https://icons8.com/icon/103200/unchecked-checkbox">Unchecked Checkbox</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        <a target="_blank" href="https://icons8.com/icon/103200/unchecked-checkbox">Unchecked Checkbox</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      </footer>
    </div>
  );
}

export default App;
