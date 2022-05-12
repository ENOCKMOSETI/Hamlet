import './App.css';
import Todo from './components/todos/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

function App(props) {

  const taskList = props.tasks?.map(task => (
      <Todo 
        id={task.id} 
        name={task.name} 
        completed={task.completed}
        key={task.id} 
      />
    )
  );

  return (
    <div className="App">
      <h1>To do or not to do</h1>
      <Form />
      <FilterButton /> 
      <ul className='todo'>
        {taskList}
      </ul>
    </div>
  );
}

export default App;
