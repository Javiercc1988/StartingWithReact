// Es necesario instalarlo con vite ya que no se instala de inicio
// npm i prop-types
// Las proptypes sirven para definir el tipo a las properties del componente
import PropTypes from "prop-types";

export const EjemploPropTypes = ({ title, subtitle, suma}) => {
  return (
    <>
      <h1 data-testid='test-title'>{title}</h1>
      <p>{subtitle}</p>
      <p>{suma}</p>
    </>
  );
};


// De esta forma podemos dar un tipado a las props del componente
EjemploPropTypes.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  suma: PropTypes.number
};

// Valores por defecto
EjemploPropTypes.defaultProps = {
    // title: 'No hay ningún título',
    subtitle: 'No hay subtitulo',
    suma: 2,

}