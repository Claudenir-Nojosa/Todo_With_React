"use client"
import React from "react";
import classes from "./TodoList.module.css";
import Todo from "./Todo";
import { useSelector } from 'react-redux';
import { RootReducer } from '../../store';

const TodoList = () => {
  const {todo} = useSelector((state: RootReducer) => state);

  return (
    <main className={classes.main}>
      <p>2 Todo's marked with: 'Category' and 'Filter'</p>
      {todo.map((todos) => <Todo key={todos.id} title={todos.title} description={todos.description} priority={todos.priority} status={todos.status} />)}
    </main>
  );
};

export default TodoList;
