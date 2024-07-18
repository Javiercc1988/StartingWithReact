import { CounterApp } from "./01-UseState/CounterApp";
import { CounterWithCustomHook } from "./01-UseState/CounterWithCustomHook";
import { FormWithCustomHook } from "./02-UseEffect/FormWithCustomHook";
import { SimpleForm } from "./02-UseEffect/SimpleForm";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";

export const HooksApp = () => {
  return (
    <>
      <h1>Training App: Hooks</h1>

      {/* <CounterApp /> */}
      {/* <CounterWithCustomHook/> */}
      {/* <SimpleForm /> */}
      {/* <FormWithCustomHook /> */}
      {/* <MultipleCustomHooks/> */}
      {/* <FocusScreen/> */}
      <Layout/>
    </>
  );
};
