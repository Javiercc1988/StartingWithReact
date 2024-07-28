import { useState } from "react";

export const useCounter = (initialValue, maxValue, minValue) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    if (counter >= maxValue) return;

    setCounter(counter + value);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  const decrement = (value = 1) => {
    if (counter <= minValue) return;

    setCounter(counter - value);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
