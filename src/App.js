import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Todo from './components/todos/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

function App(props) {

  const [tasks, setTasks] = useState(props.tasks)

  const taskList = tasks.map(task => (
      <Todo 
        id={task.id} 
        name={task.name} 
        completed={task.completed}
        key={task.id} 
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
      />
    )
  );
  const taskNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const taskCount = `${taskList.length} ${taskNoun} remaining`;


  function addTask(name) {
    const newTask = {id: nanoid(), name: name, completed: false};
    setTasks([newTask, ...tasks])
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if(id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  return (
    <div className="App">
      <h1>To do or not to do</h1>
      <h2>{taskCount}</h2>
      <Form addTask={addTask} />
      <FilterButton /> 
      <ul className='todo'>
        {taskList}
      </ul>
    </div>
  );
}

export default App;
