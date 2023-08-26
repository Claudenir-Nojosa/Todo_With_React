import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todos";

const store = configureStore({
  reducer: { todo: todosReducer},
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
