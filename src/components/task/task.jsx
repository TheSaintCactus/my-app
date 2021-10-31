import React from "react";
import { formatDistanceToNow } from "date-fns";
import './task.css'


const EditingTask = () => {
  return <input type="text" className="edit" defaultValue="Editing task" />;
};

const Task = (props) => {
  return (
    <li className={props.className}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{ props.name }</span>
          <span className="created">{ formatDistanceToNow(new Date()) }</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>

      {props.className === "editing" ? <EditingTask /> : null}
    </li>
  );
};

export default Task;
