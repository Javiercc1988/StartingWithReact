import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initReducer = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const initialState = [];

export const useTodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, initReducer);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    dispatch({
      type: "[TODO] Add TODO",
      payload: newTodo,
    });
  };

  const handleDeleteTodo = (todo) => {
    dispatch({
      type: "[TODO] Remove TODO",
      payload: todo.id,
    });
  };

  const handleToggleTodo = ({ id }) => {
    dispatch({
      type: "[TODO] Toggle TODO",
      payload: id,
    });
  };

  return {
    todos,
    dispatch,
    initReducer,
    useEffect,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
  };
};
