import React, { useState } from "react";

export default function Todo(props) {

  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  function handleChange(e) {
    setNewName(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={props.id}>New name for {props.name}</label>
        <input 
          type="text" 
          id={props.id} 
          value={newName} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <button type="button" onClick={() => setEditing(false)}>Cancel renaming {props.name}</button>
        <button type="button">Save new name for {props.name}</button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div>
      <div>
        <input 
          id={props.id} 
          type="checkbox" 
          defaultChecked={props.completed} 
          onChange={() => props.toggleTaskCompleted(props.id)} 
        />
        <label htmlFor={props.id}>{props.name}</label>
      </div>
      <div>
        <button type="button" onClick={() => setEditing(true)}>Edit {props.name}</button>
        <button type="button" onClick={() => props.deleteTask(props.id)}>Delete {props.name}</button>
      </div>
    </div>
  );

    return (<>
        <li>
          {isEditing ?  editingTemplate : viewTemplate}
        </li>
    </>);
}