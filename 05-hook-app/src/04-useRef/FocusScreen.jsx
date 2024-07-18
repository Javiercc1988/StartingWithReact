import { useRef } from "react";

export const FocusScreen = () => {
  // useRef es un Hook de React que te permite referenciar un valor que no es necesario para el renderizado.
  // Al utilizar una ref, te aseguras de que:
  // Puedes almacenar información entre renderizados (a diferencia de las variables regulares, que se reinician en cada renderizado).
  // Si se cambia no se desencadena un renderizado (a diferencia de las variables de estado, que desencadenan un renderizado).
  // La información es local para cada copia de tu componente (a diferencia de las variables externas, que son compartidas).

  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Introduce tu nombre"
        className="form-control"
      />

      <button className="btn btn-primary mt-2" onClick={onClick}>
        Set focus
      </button>
    </>
  );
};
