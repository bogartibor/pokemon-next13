import NextButton from "@/components/NextButton";
import PokemonList from "@/components/PokemonList";
import { getPokemons } from "@/lib/pokemon";

export default async function Home() {
  const pokemons = await getPokemons();

  return (
    <>
      {pokemons && <PokemonList pokemons={pokemons} />}
      <div style={{ margin: "10px 0" }}>
        <NextButton next={1} />
      </div>
    </>
  );
}
