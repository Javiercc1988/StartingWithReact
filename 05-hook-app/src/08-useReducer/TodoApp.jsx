import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   todo: "Recolectar la piedra del Alma",
  //   done: false,
  // }
];

const initReducer = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, initReducer);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const handleNewTodo = (newTodo) => {
    const action = {
      type: "[TODO] Add TODO",
      payload: newTodo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (todoId) => {
    dispatch({
      type: "[TODO] Remove TODO",
      payload: todoId.id,
    });
  };

  return (
    <>
      <h1>
        Todo App (10), <small>pendientes: (2)</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          {/* TodoAdd onNewTodo(emitir todo un todo) */}
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
