import { useForm } from "../../hooks";

export const TodoAdd = ({ handleNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onNewTodo = (event) => {
    event.preventDefault();

    const cleanValue = description.trim();
    if (cleanValue.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      todo: description,
      done: false,
    };

    handleNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onNewTodo}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
