export const GifItem = ({ id, title, url }) => {
  return (
    <article className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </article>
  );
};
