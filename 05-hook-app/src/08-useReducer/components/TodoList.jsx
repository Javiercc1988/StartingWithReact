import { TodoItem } from "./TodoItem";

export const TodoList = ({ onDeleteTodo, todos = [] }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
          />
        );
      })}
    </ul>
  );
};
