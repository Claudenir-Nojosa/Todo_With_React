import Todo from "@/app/models/Todo";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const todosInitialState = [
  new Todo(
    "Learn React",
    "Urgent",
    "Completed",
    "Learn React and all the fundamentals.",
    "t1"
  ),
  new Todo(
    "Learn TypeScript",
    "Urgent",
    "Ongoing",
    "Learn TypeScript and all the fundamentals.",
    "t2"
  ),
  new Todo(
    "Learn Backend",
    "Urgent",
    "Ongoing",
    "Learn everything about Backend.",
    "t3"
  ),
];

const todosSlice = createSlice({
  name: "todos",
  initialState: todosInitialState,
  reducers: {
    remove: (state, action: PayloadAction<string>) => {
      state = state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { remove } = todosSlice.actions;

export default todosSlice.reducer;
