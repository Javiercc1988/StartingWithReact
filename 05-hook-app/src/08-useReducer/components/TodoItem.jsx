export const TodoItem = ({ onDeleteTodo, todo }) => {
  
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{todo.todo}</span>
      <button onClick={() => onDeleteTodo(todo)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};
