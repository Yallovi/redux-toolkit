/** @format */

import { FC } from "react";
import { useGetPokemonByNameQuery } from "../store/api/api";
import { useGetAllPokemonQuery } from "../store/api/allPokemon";

const Pokemon: FC = () => {
  const {
    data: pokemon,
    isError,
    isLoading,
  } = useGetPokemonByNameQuery("bulbasaur");

  const { data } = useGetAllPokemonQuery({ limit: 10, offset: 0 });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <>Error</>;

  if (pokemon)
    return (
      <div className="border border-white space-x-2 mt-10 p-2">
        <span>{pokemon.id}</span>
        <span>{pokemon.name}</span>
      </div>
    );

  return <div></div>;
};

export default Pokemon;
