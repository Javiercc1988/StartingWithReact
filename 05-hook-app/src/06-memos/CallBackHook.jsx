import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((incrementValue) => {
    setCounter((value) => value + incrementValue);
  }, []);

  return (
    <>
      <h1>useCallback Hook: {counter} </h1>
      <ShowIncrement increment={incrementFather} />
      <hr />
    </>
  );
};
