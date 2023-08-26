"use client"
import React from "react";
import classes from "./FilteredTodos.module.css";

export type Props = {
  active?: boolean
  number: number
  description: string
}

const FilteredTodos = ({active, number, description}: Props) => {
  return (
    <div className={classes.card}>
      <span className={classes.number}>{number}</span>
      <h3 className={classes.filter}>{description}</h3>
    </div>
  );
};

export default FilteredTodos;
