import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter(1, 100, 1);

  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );


  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />
      <pre>Pokémon info</pre>

      {isLoading ? <LoadingMessage /> : <PokemonCard id={data.id} name={data.name} sprites={data.sprites}/>}

      <h2>{data?.name}</h2>

      <button
        className="btn btn-primary mt-3"
        onClick={() => (counter >= 1 ? decrement() : null)}
      >
        Anterior
      </button>
      <button className="btn btn-primary mt-3" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
};
