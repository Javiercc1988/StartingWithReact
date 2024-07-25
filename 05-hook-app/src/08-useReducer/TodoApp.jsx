import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodoApp } from "../hooks";

export const TodoApp = () => {
  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCount } =
    useTodoApp();

  return (
    <>
      <h1>
        Todo App ({todosCount}), <small>pendientes: ({pendingTodosCount})</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
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
