import React from "react";

/*
El método [`React.memo`] es una función de orden superior para componentes funcionales que permite a React memorizar el resultado renderizado de un componente. Esto significa que React reutilizará el resultado de la última renderización, evitando una nueva renderización, si los props del componente no han cambiado.

Cuando se envuelve un componente con React.memo, React hará una comparación superficial de los props actuales del componente con los props del último render. Si los props son iguales, React reutilizará el último resultado renderizado, mejorando el rendimiento al evitar renderizaciones innecesarias.

En el código proporcionado, [`Small`] es un componente funcional que se envuelve con [`React.memo`]. Esto significa que el componente [`Small`] solo se volverá a renderizar si su prop [`value`] cambia. Esto es útil para optimizar componentes que dependen de props que cambian raramente, reduciendo así el número de renderizaciones y mejorando el rendimiento de la aplicación.
*/

export const Small = React.memo(({ value }) => {
  console.log("Vuelvo a dibujarme");
  return <small>{value} </small>;
});
