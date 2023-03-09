"use client";

import { PokemonType } from "@/types/pokemon";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }: { pokemons: PokemonType[] }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(15rem,1fr))",
        gap: "16px",
      }}
    >
      {pokemons?.map((pokemon) => {
        return (
          <div key={pokemon.name}>
            <PokemonCard {...pokemon} />
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
