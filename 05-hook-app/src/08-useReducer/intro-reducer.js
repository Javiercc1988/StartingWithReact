// Declaro un estado inicial
const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
  },
];

// Un Reducer, es una función pura que toma el estado actual y una acción y devuelve un nuevo estado.
const todoReducer = (state = initialState, action = {}) => {
  if (action?.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  return state;
};

// Generamos un nuevo mock de un nuevo dato para guardar en el estado
const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};

// Creamos una acción para agregar un nuevo todo.
const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

// Llamamos al reducer con el estado inicial y la acción de agregar un nuevo todo.
let todos = todoReducer(initialState, addTodoAction);

// Mostramos el nuevo estado
console.log(todos);
