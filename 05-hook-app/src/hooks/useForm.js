import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value, password } = target;

    console.log("Elemento cambiado: ", { name, value, password });

    // Guardado usando propiedades computadas [name] para apuntar a la propiedad el objeto
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    formState,
    onInputChange,
  };
};
