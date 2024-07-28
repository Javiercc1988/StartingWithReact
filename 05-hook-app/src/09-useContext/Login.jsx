import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const Login = () => {
  // Usar el contexto:
  const { user, setUser } = useContext(UserContext);

  const userData = {
    id: 1,
    name: "Javier",
    email: "javier.emaildeprueba@pruebas.com",
  };
  
  return (
    <>
      <h1>Login page</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button className="btn btn-primary" onClick={() => setUser(userData)}>
        Establecer usuario
      </button>
    </>
  );
};
