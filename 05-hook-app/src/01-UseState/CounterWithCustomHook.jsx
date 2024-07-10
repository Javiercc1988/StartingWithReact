import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset} = useCounter(100, 105, 95);
  return (
    <>
      <h1>Counter with Hook: {counter} </h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increment(10)}>+1</button>
      <button className="btn btn-danger" onClick={reset}>Reset</button>
      <button className="btn btn-primary" onClick={() => decrement(2)}>-1</button>
    </>
  );
};
