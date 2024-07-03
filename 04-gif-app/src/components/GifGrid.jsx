export const GifGrid = ({ category }) => {
  const listado = [1, 2, 3, 4];
  return (
    <>
      <h3>{category}</h3>
      {
      
        listado.map((gif) => <p key={gif}>{gif}</p>)
        
    }
    </>
  );
};
