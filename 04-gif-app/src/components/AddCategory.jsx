//Creacion de componente rapido rafc

import React, { useState } from "react";

export const AddCategory = ({ onAddNewCategory }) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmit = (event) => {
    // Evitar comportamiento de refresco de página por defecto del formulario
    event.preventDefault();

    const cleanValue = inputValue.trim();
    if (cleanValue.length <= 1) return;

    // Usamos la función enviada por props del componente para emitir al componente padre el valor
    // De esta forma se encarga el componente padre de trabajar con el dato
    onAddNewCategory(cleanValue);

    // Reseteamos el input
    setinputValue("");
  };

  return (
    // <form onSubmit={(event) => onSubmit(event)}>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Introduce una categoría"
        value={inputValue}
        onChange={onInputChange}
        // onChange={(inputEvent) => onInputChange(inputEvent)}
      />
    </form>
  );
};
