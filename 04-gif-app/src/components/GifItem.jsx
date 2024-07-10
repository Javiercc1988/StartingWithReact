// Los prop-types con vite tenemos que instalarlos: npm i prop-types
import PropTypes from "prop-types";

export const GifItem = ({ id, title, url }) => {
  return (
    <article className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </article>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
