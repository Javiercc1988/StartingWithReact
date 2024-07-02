import PropTypes from "prop-types";
import { useState } from "react";

export const CounterAppMejorado = ({ valorInicial = 0 }) => {
  // Lógica
  const [counterValue, setCounter] = useState(valorInicial);

  const incrementarContador = () => setCounter(counterValue + 1);

  const decrementarContador = () => setCounter(counterValue - 1);

  const resetContador = () => setCounter(valorInicial);

  // HTML
  return (
    <>
      <h1>Counter App Mejorado</h1>
      <h3>Valor: {counterValue}</h3>

      <button onClick={incrementarContador}> +1 </button>
      <button onClick={decrementarContador}> -1 </button>
      <button aria-label="btn-reset" onClick={resetContador}>Reset</button>
    </>
  );
};

CounterAppMejorado.propTypes = {
  valorInicial: PropTypes.number.isRequired,
};
