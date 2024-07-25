import { TodoItem } from "./TodoItem";

export const TodoList = ({ onDeleteTodo, onToggleTodo, todos = [] }) => {

  return (
    <ul className="list-group">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        );
      })}
    </ul>
  );
};
