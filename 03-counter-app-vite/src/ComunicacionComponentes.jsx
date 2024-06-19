export const ComunicacionComponents2 = (props) => {
    if(!title){
        throw new Error('El title no existe');
    }
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.name}</p>
      <p>{props.suma}</p>

    </>
  );
};

// Opción desestructurada
export const ComunicacionComponents = ({title, name, suma}) => {

    if(!title){
        throw new Error('El title no existe');
    }

  return (
    <>
      <h1>{title}</h1>
      <p>{name}</p>
      <p>{suma}</p>
    </>
  );
};
