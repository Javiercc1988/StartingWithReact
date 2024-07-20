import { useLayoutEffect, useRef } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {

  const imgRef = useRef();

  useLayoutEffect(() => {

  }, [id])

  return (
    <>
      <section>
        <h2 className="text-capitalize">
          #{id} - {name}
        </h2>
      </section>
      <div style={{border: '1px solid red'}}>
        {sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={name} />
        ))}
      </div>
    </>
  );
};
