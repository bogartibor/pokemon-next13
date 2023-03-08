"use client";
import { DetailedPokemonType } from "@/types/pokemon";
import { capitalizeFirstLetter } from "@/utils/stringManupulation";
import Image from "next/image";

export default function DetailedPokemon({
  name,
  sprites,
  types,
  abilities,
}: DetailedPokemonType) {
  const imageUrl = sprites?.other?.["official-artwork"]?.front_default;
  return (
    <>
      {imageUrl && <Image src={imageUrl} width={256} height={256} alt="" />}
      <div>
        <h1>{capitalizeFirstLetter(name)}</h1>
        <div>Types: {types.map((type) => type.type.name).join(", ")}</div>
        <div>
          Abilities:{" "}
          {abilities.map((ability) => ability.ability.name).join(", ")}
        </div>
      </div>
    </>
  );
}
