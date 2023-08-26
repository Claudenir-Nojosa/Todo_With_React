"use client";
import React, { useState } from "react";
import classes from "./Todo.module.css";

type Props = {
  title: string;
  priority: string;
  status: string;
  description: string;
};

const Todo = ({ title, priority, status, description }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const editButtonHandler = () => {
    setIsEditing(true);
  };
  const cancelButtonHandler = () => {
    setIsEditing(false);
  };

  const priorityClass = () => {
    let priorityClass = "";

    if (priority === "Urgent") {
      priorityClass = classes.urgent;
    } else if (priority === "Important") {
      priorityClass = classes.important;
    } else {
      priorityClass = "";
    }
    return priorityClass;
  };
  const statusClass = () => {
    let statusClass = "";

    if (status === "Ongoing") {
      statusClass = classes.ongoing;
    } else if (status === "Completed") {
      statusClass = classes.completed;
    }
    return statusClass;
  }

  return (
    <ul className={classes.card}>
      <li>
        <h2 className={classes.title}>{title}</h2>
        <span className={`${classes.tag} ${priorityClass()}`}>{priority}</span>
        <span className={`${classes.tag} ${statusClass()}`}>{status}</span>
        <textarea className={classes.description} defaultValue={description} />
        {!isEditing && (
          <div className={classes.actionBar}>
            <button className={classes.button} onClick={editButtonHandler}>
              Edit
            </button>
            <button className={classes.removeButton}>Remove</button>
          </div>
        )}
        {isEditing && (
          <div className={classes.actionBar}>
            <button
              className={classes.saveButton}
              onClick={cancelButtonHandler}
            >
              Save
            </button>
            <button
              className={classes.cancelButton}
              onClick={cancelButtonHandler}
            >
              Cancel
            </button>
          </div>
        )}
      </li>
    </ul>
  );
};

export default Todo;
