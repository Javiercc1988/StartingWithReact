import { useState } from "react";
import { UserContext } from "./UserContext";
/*
Un High Order Component (HOC) en React es una función que toma un componente y devuelve un nuevo componente con funcionalidades añadidas. 
Los HOC permiten reutilizar la lógica entre múltiples componentes, similar a cómo las funciones de orden superior (higher-order functions) operan en JavaScript. 
Generalmente, los HOC son utilizados para compartir comportamientos o lógica común entre componentes sin duplicar código.
*/

/*
EJEMPLO DE DEFINICION DE HOC


const withExtraProps = (WrappedComponent) => {
  return (props) => {
    const newProps = {
      ...props,
      extraProp: 'Soy una prop adicional'
    };

    return <WrappedComponent {...newProps} />;
  };
};

export default withExtraProps;

*/

// const user = {
//     id: 123,
//     name: 'Javier',
//     email: 'javier@pruebas.com'
// }

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()
  return (
    // De esta forma cualquier hijo podrá acceder a la propiedad hola independientemente de si es hijo, nieto etc..
    // <UserContext.Provider value={{ hola: "Mundo", user: user }}>
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};
