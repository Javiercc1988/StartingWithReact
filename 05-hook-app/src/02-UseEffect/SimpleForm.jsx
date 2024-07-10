import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "MyUser",
    email: "myuser@email.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    console.log("Elemento cambiado: ", { name, value });

    // Guardado usando propiedades computadas [name] para apuntar a la propiedad el objeto
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //   UseEffect
  // Compuesto por la funcion de efecto y el array de dependencias ( opcional ) y funcion del cleanUp (opcional)

  useEffect(() => {
    // Se ejecuta siempre que se renderiza el componente
    // console.log("useEffect disparado!");
  }, []);

  useEffect(() => {
    // console.log("useEffect FormState disparado!");
  }, [formState]);

  useEffect(() => {
    // console.log("useEffect userName disparado!");
  }, [username]);

  useEffect(() => {
    // console.log("useEffect Email disparado!");
  }, [email]);

  return (
    <>
      <h1>Simple form</h1>

      <input
        type="text"
        className="form-control mt-3"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-3"
        placeholder="email@email.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "MyUser" && <Message />}

    </>
  );
};
