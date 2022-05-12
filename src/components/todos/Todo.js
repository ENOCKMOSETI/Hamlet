import React from "react";

export default function Todo(props) {
    return (<>
        <li>
          <input id={props.id} type="checkbox" defaultChecked={props.completed} />
          <label>{props.name}</label>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>
    </>);
}