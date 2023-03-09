import NextButton from "@/components/NextButton";
import PokemonList from "@/components/PokemonList";
import { getPokemons } from "@/lib/pokemon";

export default async function Home() {
  const pokemons = await getPokemons();

  return (
    <>
      {pokemons && <PokemonList pokemons={pokemons} />}
      <div
        style={{
          margin: "10px 0",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row-reverse",
        }}
      >
        <NextButton next={1} />
      </div>
    </>
  );
}
