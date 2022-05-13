import React from "react";

export default function Todo(props) {
    return (<>
        <li>
          <input 
            id={props.id} 
            type="checkbox" 
            defaultChecked={props.completed} 
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <label>{props.name}</label>
          <div>
            <button>Edit</button>
            <button onClick={() => props.deleteTask(props.id)}>Delete</button>
          </div>
        </li>
    </>);
}