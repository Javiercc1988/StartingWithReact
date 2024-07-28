import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
    // Usar el contexto:
    const { user } = useContext(UserContext);
    return (
      <>
        <h1>Home page</h1>
        <h4>Hola! {user?.name}</h4>
        <hr />
      </>
    );
  };
  