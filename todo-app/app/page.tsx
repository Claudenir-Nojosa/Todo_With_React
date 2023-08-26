"use client"
import { Provider } from "react-redux";
import SideBar from "./components/SideBar";
import TodoList from "./components/Todos/TodoList";
import store  from './store/index';
export default function Home() {
  return (
    <Provider store={store}>
      <SideBar />
      <TodoList />
    </Provider>
  );
}
