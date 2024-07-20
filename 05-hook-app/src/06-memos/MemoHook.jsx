import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumbers) => {
  for (let i = 0; i < iterationNumbers; i++) {
    console.log("Ahí vamos...");
  }

  return `${iterationNumbers} iteraciones realizadas.`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  // useMemo Hook. Se encarga de memorizar un valor.
  // Memorizará el valor y lo reprocesará solo cuando el counter cambie. De esta forma evitamos que al hacer click en show hide button y se redibuje el componente, se vuelva a ejecutar la función heavyStuff.
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      <h4> {memorizedValue}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        Incrementar
      </button>

      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show / Hide : {JSON.stringify(show)}
      </button>
    </>
  );
};
