import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Todo from './components/todos/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

const FILTER_MAP = {
  All: () => true,
  Done: task => task.completed,
  Procrastinated: task => !task.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => (
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed}
      key={task.id} 
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
      name={name} 
      key={name}
      isPressed={name === filter}
      setFilter={setFilter} 
    />
  ));

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

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  return (
    <div className="App">
      <h1>To do or not to do</h1>
      <p>"One ought not to have everything done" -Shakespeare</p>
      <h2>{taskCount}</h2>
      <Form addTask={addTask} />
      <div>
        {filterList}
      </div>
      <ul className='todo'>
        {taskList}
      </ul>
    </div>
  );
}

export default App;
