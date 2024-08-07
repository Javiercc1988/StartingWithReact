//Creacion de componente rapido rafc

import React, { useState } from "react";
import PropTypes from 'prop-types'

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

    // Reseteamos el input
    setinputValue("");
    // Usamos la función enviada por props del componente para emitir al componente padre el valor
    // De esta forma se encarga el componente padre de trabajar con el dato
    onAddNewCategory(cleanValue);

  };

  return (
    // <form onSubmit={(event) => onSubmit(event)}>
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Busca una categoría..."
        value={inputValue}
        onChange={onInputChange}
        // onChange={(inputEvent) => onInputChange(inputEvent)}
      />
    </form>
  );
};


AddCategory.propTypes = {
  onAddNewCategory: PropTypes.func.isRequired
}