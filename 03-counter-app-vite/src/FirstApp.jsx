import { Fragment } from "react";

//1 En react para agrupar dos elementos es necesario tener un nodo padre como podría ser un DIV:
export const FirstAppConDiv = () => {
  return (
    <div>
      <h1> First App React Javi </h1>
      <p>Soy un parrafo</p>
    </div>
  );
};

//2 Existe una opción llamada fragment que debemos importar
export const FirstAppConFragment = () => {
  return (
    <Fragment>
      <h1> First App React Javi </h1>
      <p>Soy un parrafo</p>
    </Fragment>
  );
};

//3 Hay una tercera opción que es la siguiente y más comoda ya que nos ahorra importaciones
// Es importante saber que siempre debe haber un nodo padre cuando queremos concatenar elementos
export const FirstApp = () => {
  return (
    <>
      <h1> First App React Javi </h1>
      <p>Soy un parrafo</p>
    </>
  );
};

const name = "Javi";
const surname = "Pruebas";

const testArray = [1, 2, 3, 4, 5];
const testObject = {
  title: "Titulo 1",
  subtitle: "subtitulo2",
};

const getTitle = () => {
    return testObject.title
}

export const Interpolation = () => {

    // Dejar fuera las constantes de la data y las funciones es interesante ya que de esta forma cuando se deba
    // redibujar el componente no tendrá que procesar estos datos
    // Si no hay una dependencia del componente es mejor dejarlo fuera

  return (
    <>
      <h1> {name} </h1>
      <p>{surname}</p>

      <p>{testArray}</p>

      <p>{getTitle()}</p>
      {/* Imprimir un objeto */}

      <code>{JSON.stringify(testObject)}</code>
    </>
  );
};
