export const TodoItem = ({ onDeleteTodo, todo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onToggleTodo(todo)}
      >
        {todo.todo}
      </span>
      <button onClick={() => onDeleteTodo(todo)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};
