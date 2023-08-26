import React from "react";
import FilteredTodos from "./Todos/FilteredTodos";
import classes from "./SideBar.module.css";

const SideBar = () => {
  return (
    <aside className={classes.aside}>
      <label className={classes.searchLabel} htmlFor="search">
        Search Todo's
      </label>
      <input
        className={classes.searchInput}
        type="text"
        placeholder="Search"
        id="search"
      />
      <div className={classes.filtersList}>
        <FilteredTodos number={2} description="Pending"/>
        <FilteredTodos number={1} description="Completed"/>
        <FilteredTodos number={3} description="Important!" />
        <FilteredTodos number={1} description="Urgent!"/>
        <FilteredTodos number={2} description="Normal"/>
        <FilteredTodos number={2} description="All"/>
      </div>
    </aside>
  );
};

export default SideBar;
